import { Component, input, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})




export class App {

  
  constructor(
    private employeeService: EmployeeService,
    private alert: SweetAlertService,
    public modalService: ModalService,
    private sharedService: SharedService,
    public paginationService: PaginationService<Employee>,
    private aadhaarService: AadhaarService,
    private bankService: BankService,
    private exportService: ExportService,
    private employeeFilterService: EmployeeFilterService,
    private router: Router
  ) { }

  protected readonly title = 'Reshhhhh' ;
  // title = 'Reshhhhh'
  input = '' 
}










import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Employee } from '../models/employee.model';
import { esiCard} from '../models/esicard.model';
import { environment } from '../../../environments/environment';

export interface EmployeeResponse {
  success?: boolean;
  message: string;
  insertId?: number;
  employee_id?: string;
  profile_image?: string;
  esi_card?: string;
  voter_id_card?: string;
  pan_card?: string;
  driving_license_card?: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  private readonly baseUrl = `${environment.apiUrl}/employees`;

   private httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true
    };

     private FormhttpOptions = {
      headers: new HttpHeaders({  }),
      withCredentials: true
    };

  constructor(private http: HttpClient) {}

  addEmployee(formData: FormData): Observable<EmployeeResponse> {
    return this.http.post<EmployeeResponse>(this.baseUrl, formData,this.FormhttpOptions).pipe(
      catchError((error) => this.handleError('Adding Employee', error))
    );
  }

getAllEmployees(): Observable<Employee[]> {
  const prefix = sessionStorage.getItem('selectedCompany') || 'SFM'; // default if null
  const url = `${this.baseUrl}?prefix=${prefix}`;
  return this.http.get<Employee[]>(url, this.httpOptions).pipe(
    catchError((error) => this.handleError('Fetching Employees', error))
  );
}


    getEmployeeStats(): Observable<any> {
  const prefix = sessionStorage.getItem('selectedCompany') || 'SFM';
  return this.http.get<any>(`${this.baseUrl}/employeestats?prefix=${prefix}`,this.httpOptions).pipe(
    catchError(error => this.handleError('Fetching Employee Stats', error))
  );
}

  getEmployeeById(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`,this.httpOptions).pipe(
      catchError((error) => this.handleError('Fetching Employee Details', error))
    );
  }

  updateEmployee(id: string, formData: FormData): Observable<EmployeeResponse> {
    return this.http.put<EmployeeResponse>(`${this.baseUrl}/${id}`, formData,this.FormhttpOptions).pipe(
      catchError((error) => this.handleError('Updating Employee', error))
    );
  }

  deleteEmployeeById(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/${id}`,this.httpOptions).pipe(
      catchError((error) => this.handleError('Deleting Employee', error))
    );
  }

checkAadhaar(aadhaarNumber: string): Observable<{ exists: boolean; message: string }> {
  return this.http.post<{ exists: boolean; message: string }>(`${this.baseUrl}/check-aadhaar`,
    { aadhaar_number: aadhaarNumber } ,this.httpOptions// 👈 match backend expected key
  ).pipe(
    catchError(error => {
      console.error('❌ Error Checking Aadhaar Number:', error);
      return throwError(() => error);
    })
  );
}

checkEmployeeId(employeeId: string): Observable<{ exists: boolean; message: string }> {
  return this.http.post<{ exists: boolean; message: string }>(
    `${this.baseUrl}/checkEmployeeId`,
    { employee_id: employeeId }, this.httpOptions
  ).pipe(
    catchError(error => {
      console.error('❌ Error Checking Employee ID:', error);
      return throwError(() => error);
    })
  );
}

checkEmployeePhones(
  contact_mobile_no: string,
  emergency_contact_phone: string
): Observable<{ exists: boolean; message: string }> {
  return this.http.post<{ exists: boolean; message: string }>(
    `${this.baseUrl}/checkEmployeePhone`,
    {
      contact_mobile_no,
      emergency_contact_phone
    }, this.httpOptions
  ).pipe(
    catchError(error => {
      console.error('❌ Error Checking Phone Numbers:', error);
      return throwError(() => error);
    })
  );
}

 getAllEmployeesWithESICard(): Observable<esiCard[]> {
  const prefix = sessionStorage.getItem('selectedCompany') || 'SFM';
  return this.http.get<{ data: esiCard[] }>(
    `${this.baseUrl}/esicard?prefix=${prefix}`,
    this.httpOptions
  ).pipe(
    map(response => response.data),
    catchError(error => this.handleError('Fetching ESI Card Employees', error))
  );
}


getTotalEsiCard(): Observable<{
  status: boolean;
  total_employees: number;
  totalEsiCard: number;
  withoutEsiCard: number;
}> {
  const prefix = sessionStorage.getItem('selectedCompany') || 'SFM';
  return this.http.get<{
    status: boolean;
    total_employees: number;
    totalEsiCard: number;
    withoutEsiCard: number;
  }>(`${this.baseUrl}/totalesicard?prefix=${prefix}`, this.httpOptions).pipe(
    map(res => ({
      status: res.status,
      total_employees: res.total_employees,
      totalEsiCard: res.totalEsiCard,
      withoutEsiCard: res.withoutEsiCard,
    })),
    catchError(error => this.handleError('Fetching Total ESI Cards', error))
  );
}


getReportingManagers(): Observable<Employee[]> {
    // return this.http.get<Employee[]>('/api/employees/reporting-options');
    return this.http.get<Employee[]>(`${this.baseUrl}/reporting-options`, this.httpOptions);
}



getEmployeePublicView(id: string): Observable<any> {
  return this.http.get<any>(
    `${this.baseUrl}/public/${id}`,
    this.httpOptions
  ).pipe(
    catchError(error => this.handleError('Fetching Employee Public View', error))
  );
}

  /** Centralized error handler */
private handleError(action: string, error: any): Observable<never> {
  console.error(`❌ ${action} failed`, error);
  const message = error?.error?.message ?? `Failed ${action}. Please try again.`;
  const statusSuffix = error?.status ? ` (Status ${error.status})` : '';

  // 👇 Return the full original error, wrapped in a plain object
  return throwError(() => ({
    message: `${message}${statusSuffix}`,
    original: error
  }));
}
}
