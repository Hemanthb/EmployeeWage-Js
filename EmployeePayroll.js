class EmployeePayroll
{
    id; 
    salary;

    constructor(id, name, salary)
    {
        this.id = id;
        this.name = name
        this.salary = salary;
    }

    get name() 
    {
        return this._name;
    }
    set name(name)
    {
        this._name = name;
    }

    ToString()
    {
        return "Id: " + this.id + "\t\tEmpName: " + this.name + "\t\tSalary: " + this.salary;
    }
}
let empPayroll = new EmployeePayroll(1,"Asha",25000);
console.log(empPayroll.ToString());
empPayroll.id = 2;
empPayroll.name = "Bharathan";
console.log(empPayroll.ToString());