//1

class Employee{

    constructor(id, firstName, lastName, taxID, salary) {
        this.id = id,
        this.firstName = firstName,
        this.lastName = lastName,
        this.taxID = taxID,
        this.salary = salary
    }

    generatePaySlip(){
        console.log(`Employee ID: ${this.id} 
Name: ${this.firstName} ${this.lastName}
Tax ID: ${this.taxID}
Pay: ${(this.salary/12).toFixed(2)} €`)
    }
}

const emp1 = new Employee(1, "Walter", "White", 54617, 65000)
console.log("-------------")
const emp2 = new Employee(2, "Thomas", "Müller", 324234, 80000)

emp1.generatePaySlip()

2

class Manager extends Employee {

    constructor(id, firstName, lastName, taxID, salary) {
        super (id, firstName, lastName, taxID, salary)
        this.managedEmployees = []
    }

    addManagedEmployee(newEmp){
       return this.managedEmployees.push(newEmp);

    }

    removeManagedEmployee(removeEmp) {
      const idx = this.managedEmployees.findIndex(
        (item) => item.id === removeEmp.id
      );
      return this.managedEmployees.splice(idx, 1);
    }


}

const manager = new Manager(3, "Robert", "Lewandowski", 464846, 90000)

console.log("-------------")
emp2.generatePaySlip()
console.log("-------------")
manager.generatePaySlip()
// emp1.addManagedEmployee()

console.log("-------------")
console.log(manager.addManagedEmployee(emp1))
console.log("-------------")
console.log(manager.addManagedEmployee(emp2))
console.log(manager);
console.log("-------------")
console.log(manager.removeManagedEmployee(emp1))
console.log("-------------")
console.log(manager);