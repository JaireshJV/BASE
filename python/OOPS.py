
no_of_wheels = 4
mileage = 27 
no_of_airbags = 5

def moveForward() :
    print("Moving forward")

def moveBackward() :
    print("Moving backward") 

moveForward()

class Car :
    no_of_wheels = 0
    mileage = 25
    no_of_airbags = 0

    def moveForward(self) :
        print("Moving forward")

    def moveBackward(self) :
        print("Moving backward") 

Car1 = Car()

print("Before :" ,Car1.no_of_wheels)

Car1.no_of_wheels = 6 

print("After :" ,Car1.no_of_wheels)

Car2 = Car()

Car2.moveBackward()

