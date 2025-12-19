import { useState, useMemo } from 'react';

// Sample attendance data - this will be replaced by API calls
const getSampleAttendanceData = (year, month) => {
  // Sample data for different months - in real app, this comes from API
  const sampleData = {
    '2025-09': {
      "2025-09-01": "absent", "2025-09-02": "present", "2025-09-03": "present",
      "2025-09-04": "present", "2025-09-05": "present", "2025-09-06": "present",
      "2025-09-08": "absent", "2025-09-09": "present", "2025-09-10": "present",
      "2025-09-11": "present", "2025-09-12": "present", "2025-09-13": "late",
      "2025-09-15": "absent", "2025-09-16": "late", "2025-09-17": "present",
      "2025-09-18": "present", "2025-09-19": "present", "2025-09-20": "present",
      "2025-09-22": "present", "2025-09-23": "present", "2025-09-24": "present",
      "2025-09-25": "absent", "2025-09-26": "absent", "2025-09-27": "leave"
    },
    '2025-08': {
      "2025-08-01": "present", "2025-08-02": "present", "2025-08-05": "late",
      "2025-08-06": "present", "2025-08-07": "absent", "2025-08-08": "present",
      "2025-08-12": "holiday", "2025-08-15": "holiday", "2025-08-20": "leave"
    },
    '2025-10': {
      "2025-10-01": "present", "2025-10-02": "holiday", "2025-10-03": "present",
      "2025-10-07": "late", "2025-10-10": "absent", "2025-10-15": "present"
    }
  };
  
  const key = `${year}-${String(month + 1).padStart(2, '0')}`;
  return sampleData[key] || {};
};

// Motivational quotes for future dates
// Border colors for different statuses
const borderColors = {
  leave: "#9C27B0",
  holiday: "#2196F3", 
  absent: "#F44336",
  late: "#FF9800",
  present: "#4CAF50",
};

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date(2025, 8, 26)); // September 26, 2025
  
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  console.log(currentDate, currentMonth, currentYear, "==> Date Month Year");

  // Motivational quotes for future dates
  const motivationalQuotes = [
    "Success is the sum of small efforts repeated day in and day out.",
    "Your only limit is your mind. Stay positive and productive!",
    "Great things happen to those who show up consistently.",
    "Every day is a new opportunity to excel at work.",
    "Consistency is the key to achieving your professional goals.",
    "Be present, be productive, be proud of your work.",
    "Your dedication today shapes your success tomorrow.",
    "Small daily improvements lead to stunning results.",
    "Show up with energy and enthusiasm every day!",
    "Excellence is not a skill, it's an attitude."
  ];

  // Get a consistent quote for a specific date
  const getMotivationalQuote = (dateStr) => {
    const hash = dateStr.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    return motivationalQuotes[Math.abs(hash) % motivationalQuotes.length];
  };
  
  // Get attendance data for current month
  const attendanceData = useMemo(() => {
    return getSampleAttendanceData(currentYear, currentMonth);
  }, [currentYear, currentMonth]);

  // Generate years for dropdown (current year ± 2 years)
  const availableYears = useMemo(() => {
    const years = [];
    const baseYear = new Date().getFullYear();
    console.log(baseYear, "New Date ==> Full Year")
    for (let i = baseYear - 5; i <= baseYear + 2; i++) {
      years.push(i);
    }
    return years;
  }, []);

  // Navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      console.log(newDate, "New Month")
      newDate.setMonth(prev.getMonth() - 1);
      return newDate;
    });
    setSelectedDate(null);
  };

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + 1);
      return newDate;
    });
    setSelectedDate(null);
  };

  // Handle month dropdown change
  const handleMonthChange = (e) => {
    const newMonth = parseInt(e.target.value);
    setCurrentDate(prev => new Date(prev.getFullYear(), newMonth, 1));
    setSelectedDate(null);
  };

  // Handle year dropdown change
  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value);
    setCurrentDate(prev => new Date(newYear, prev.getMonth(), 1));
    setSelectedDate(null);
  };

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const year = currentYear;
    const month = currentMonth;
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      const prevDate = new Date(year, month, 1 - (firstDay - i));
      days.push({
        date: prevDate.getDate(),
        isCurrentMonth: false,
        fullDate: `${year}-${String(month).padStart(2, '0')}-${String(prevDate.getDate()).padStart(2, '0')}`
      });
    }

    // Add all days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      const fullDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      days.push({
        date: day,
        isCurrentMonth: true,
        fullDate: fullDate,
        status: attendanceData[fullDate]
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handleDateClick = (day) => {
    if (day.isCurrentMonth) {
      setSelectedDate(day.fullDate);
    }
  };

  // Get info for selected date or today
  const getSelectedDateInfo = () => {
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    
    let targetDate = selectedDate;
    
    // If no date selected and we're viewing current month, use today
    if (!targetDate && currentYear === today.getFullYear() && currentMonth === today.getMonth()) {
      targetDate = todayStr;
    }
    
    if (!targetDate) return null;
    
    const dateObj = new Date(targetDate);
    const status = attendanceData[targetDate] || "unmarked";
    const isToday = targetDate === todayStr;
    const isFuture = dateObj > today;
    const isPast = dateObj < today && !isToday;
    
    return {
      date: targetDate,
      dateObj,
      status,
      isToday,
      isFuture,
      isPast,
      formattedDate: dateObj.toLocaleDateString('en-GB', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
      })
    };
  };

  const selectedDateInfo = getSelectedDateInfo();

  return (
    <div style={{ 
      maxWidth: '500px', 
      margin: '0px auto', 
      fontFamily: 'Arial, sans-serif',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      {/* Header */}
      <div style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '5px 20px', 
        borderBottom: '1px solid #e0e0e0'
      }}>
        {/* Month/Year with Navigation */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px'
        }}>
          <h2 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>
            {months[currentMonth].toUpperCase()} - {currentYear}
          </h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={goToPreviousMonth}
              style={{ 
                background: 'none', 
                border: 'none', 
                fontSize: '18px', 
                cursor: 'pointer',
                padding: '5px 8px',
                borderRadius: '4px'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#e0e0e0'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              ‹
            </button>
            <button 
              onClick={goToNextMonth}
              style={{ 
                background: 'none', 
                border: 'none', 
                fontSize: '18px', 
                cursor: 'pointer',
                padding: '5px 8px',
                borderRadius: '4px'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#e0e0e0'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              ›
            </button>
          </div>
        </div>

        {/* Dropdowns */}
        <div style={{ 
          display: 'flex', 
          gap: '15px', 
          alignItems: 'center' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* <label style={{ fontSize: '14px', fontWeight: '500' }}>Month:</label> */}
            <select 
              value={currentMonth} 
              onChange={handleMonthChange}
              style={{
                padding: '5px 10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              {months.map((month, index) => (
                <option key={index} value={index}>{month}</option>
              ))}
            </select>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* <label style={{ fontSize: '14px', fontWeight: '500' }}>Year:</label> */}
            <select 
              value={currentYear} 
              onChange={handleYearChange}
              style={{
                padding: '5px 10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              {availableYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div style={{ padding: '5px' }}>
        {/* Week days header */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(7, 1fr)', 
          gap: '2px',
          marginBottom: '5px'
        }}>
          {weekDays.map(day => (
            <div key={day} style={{ 
              textAlign: 'center', 
              fontWeight: 'bold', 
              padding: '5px 4px',
              fontSize: '14px',
              color: '#666'
            }}> 
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(7, 1fr)', 
          gap: '5px'
        }}>
          {calendarDays.map((day, index) => {
            const isToday = selectedDateInfo && day.fullDate === selectedDateInfo.date;
            const isSelected = selectedDate === day.fullDate;
            
            return (
              <div
                key={index}
                onClick={() => handleDateClick(day)}
                style={{
                  minHeight: '35px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: day.isCurrentMonth ? 'pointer' : 'default',
                  position: 'relative',
                  fontSize: '14px',
                  fontWeight: day.isCurrentMonth ? 'normal' : '300',
                  color: day.isCurrentMonth ? '#333' : '#ccc',
                  border: day.status ? `2px solid ${borderColors[day.status]}` : '2px solid transparent',
                  borderRadius: '6px',
                  backgroundColor: isSelected ? '#e3f2fd' : (isToday ? '#ffeb3b20' : 'transparent'),
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (day.isCurrentMonth) {
                    e.target.style.backgroundColor = isSelected ? '#e3f2fd' : (isToday ? '#ffeb3b40' : '#f0f8ff');
                  }
                }}
                onMouseLeave={(e) => {
                  if (day.isCurrentMonth) {
                    e.target.style.backgroundColor = isSelected ? '#e3f2fd' : (isToday ? '#ffeb3b20' : 'transparent');
                  }
                }}
              >
                {day.date}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          flexWrap: 'wrap', 
          // marginTop: '0px',
          fontSize: '12px'
        }}>
          {Object.entries(borderColors).map(([status, color]) => (
            <div key={status} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '5px',
              margin: '2px'
            }}>
              <div style={{ 
                // width: '16px', 
                // height: '16px', 
                border: `5px solid ${color}`, 
                borderRadius: '50%' 
              }}></div>
              <span style={{ textTransform: 'capitalize' }}>{status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Date Info Card */}
      {selectedDateInfo && (
        <div style={{ 
          padding: '10px 20px', 
          borderTop: '1px solid #e0e0e0',
          backgroundColor: '#f9f9f9'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '5px'
          }}>
            <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
              {selectedDateInfo.formattedDate}
            </span>
            <span style={{ 
              backgroundColor: (() => {
                if (selectedDateInfo.isFuture) return '#2196F3';
                if (selectedDateInfo.status === 'absent' || selectedDateInfo.status === 'unmarked') return '#F44336';
                return borderColors[selectedDateInfo.status] || '#9e9e9e';
              })(),
              color: 'white',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              textTransform: 'capitalize'
            }}>
              {selectedDateInfo.isFuture ? 'Upcoming' : 
               selectedDateInfo.status === 'unmarked' ? 'Absent' : selectedDateInfo.status}
            </span>
          </div>
          
          {/* Dynamic Content Based on Date Status */}
          {selectedDateInfo.isFuture ? (
            // Future dates - Show motivational quote
            <div>
              <p style={{ 
                margin: '8px 0 8px 0', 
                color: '#2196F3', 
                fontSize: '14px',
                fontStyle: 'italic',
                textAlign: 'center',
                // padding: '10px',
                backgroundColor: '#e3f2fd',
                borderRadius: '8px',
                border: '1px solid #bbdefb'
              }}>
                💡 "{getMotivationalQuote(selectedDateInfo.date)}"
              </p>
              
              <div style={{ 
                display: 'flex', 
                gap: '10px', 
                justifyContent: 'center' 
              }}>
                <button style={{
                  backgroundColor: '#9C27B0',
                  color: 'white',
                  border: 'none',
                  padding: '5px 8px',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  APPLY LEAVE
                </button>
              </div>
            </div>
          ) : selectedDateInfo.status === 'present' ? (
            // Present - No action needed
            <div style={{ textAlign: 'center' }}>
              <p style={{ 
                margin: '0', 
                color: '#4CAF50', 
                fontSize: '14px',
                fontWeight: '500'
              }}>
                ✅ Great! You were present on this day. Keep up the good work!
              </p>
            </div>
          ) : selectedDateInfo.status === 'holiday' ? (
            // Holiday - No action needed
            <div style={{ textAlign: 'center' }}>
              <p style={{ 
                margin: '0', 
                color: '#2196F3', 
                fontSize: '14px',
                fontWeight: '500'
              }}>
                🏖️ This was a holiday. Enjoy your well-deserved rest!
              </p>
            </div>
          ) : selectedDateInfo.status === 'leave' ? (
            // Leave - Already applied
            <div style={{ textAlign: 'center' }}>
              <p style={{ 
                margin: '0', 
                color: '#9C27B0', 
                fontSize: '14px',
                fontWeight: '500'
              }}>
                📋 Leave was already applied for this day.
              </p>
            </div>
          ) : selectedDateInfo.status === 'late' ? (
            // Late - Can apply leave OR regularise
            <div>
              <p style={{ 
                margin: '0 0 15px 0', 
                color: '#FF9800', 
                fontSize: '14px' 
              }}>
                ⏰ You were late on this day. You can apply leave or regularise your attendance.
              </p>
              
              <div style={{ 
                display: 'flex', 
                gap: '10px', 
                justifyContent: 'center' 
              }}>
                <button style={{
                  backgroundColor: '#F44336',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  APPLY LEAVE
                </button>
                <button style={{
                  backgroundColor: '#FF9800',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  REGULARISE
                </button>
              </div>
            </div>
          ) : (
            // Absent or unmarked - Can regularise (not apply leave for past dates)
            <div>
              <p style={{ 
                margin: '0 0 15px 0', 
                color: '#F44336', 
                fontSize: '14px' 
              }}>
                {selectedDateInfo.isToday 
                  ? "You have not marked yourself as present today. Please apply leave or regularise your attendance."
                  : "You were absent on this day. You can regularise your attendance."
                }
              </p>
              
              <div style={{ 
                display: 'flex', 
                gap: '10px', 
                justifyContent: 'center' 
              }}>
                {selectedDateInfo.isToday && (
                  <button style={{
                    backgroundColor: '#F44336',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}>
                    APPLY LEAVE
                  </button>
                )}
                <button style={{
                  backgroundColor: '#FF9800',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  REGULARISE
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

