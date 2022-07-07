class EmployeePayroll
{
    id; 
    salary;
    gender;
    startDate;

    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name() 
    {
        return this._name;
    }
    set name(name)
    {
        let checkName = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
        if(checkName.test(name))
        {
            this._name = name;
        }
        else
        {
            throw "Incorrect!! Name should start with a capital letter & must have atleast 3 letters";
        }
    }

    ToString()
    {
        return "Id: " + this.id + "\t\tEmpName: " + this.name + "\t\tSalary: " + this.salary +
        "\t\tGender: " + this.gender + "\t\tStartDate: "+ this.startDate;
    }
}
let empPayroll = new EmployeePayroll(1,"Asha",25000,"F");
console.log(empPayroll.ToString());
try{
empPayroll.id = 2;
empPayroll.name = "bharathan";
empPayroll.gender = "M";
}
catch(msg){
    console.error(msg);
}
console.log(empPayroll.ToString());
const date = new Date();
let empPayroll1 = new EmployeePayroll(3, "Saneesh", 22000, "M", date.toLocaleDateString());
console.log(empPayroll1.ToString());