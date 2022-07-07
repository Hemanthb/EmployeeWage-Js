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
        this.email = params[5];
        this.zipCode = params[6];
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
    get id() 
    {
        return this._id;
    }
    set id(id)
    {
        let checkId = RegExp('^[1-9]{1}([0-9]*)$')
        if(checkId.test(id))
        {
            this._id = id;
        }
        else
        {
            throw "Employee ID should be  a non zero positive number";
        }
    }
    get salary() 
    {
        return this._salary;
    }
    set salary(salary)
    {
        let checkSalary = RegExp('^[1-9]{1}([0-9]{3,})$')
        if(checkSalary.test(salary))
        {
            this._salary = salary;
        }
        else
        {
            throw "Employee salary should be a +ve non-zero number";
        }
    }
    get gender() 
    {
        return this._gender;
    }
    set gender(gender)
    {
        let checkGender = RegExp('^[M|F]{1}$')
        if(checkGender.test(gender))
        {
            this._gender = gender;
        }
        else
        {
            throw "Employee gender should be either M or F";
        }
    }
    get startDate() 
    {
        return this._startDate;
    }
    set startDate(startDate)
    {
        let today = new Date();
        let dateCheck = RegExp("^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$");
        if(startDate <= today.toLocaleDateString())
        {
            if(dateCheck.test(startDate))
            {
                this._startDate = startDate;
            }
            else
            {
                throw "Format Mismatch";
            }
        }
        else
        {
            throw "Employee Start Date should  be less than or equal to current Date";
        }
    }
    get email() 
    {
        return this._email;
    }
    set email(email)
    {
        let checkEmail = RegExp('^[0-9a-z]{1,}([.+-]?)[0-9a-z]{1,}(@)[a-z0-9]{1,}(.)(com|co|net)((.in|.com|.au)*)$')
        if(checkEmail.test(email))
        {
            this._email = email;
        }
        else
        {
            throw "Invalid Email ID";
        }
    }
    get zipCode() 
    {
        return this._zipCode;
    }
    set zipCode(zipCode)
    {
        let checkZipcode = RegExp('^[0-9]{6}$')
        if(checkZipcode.test(zipCode))
        {
            this._zipCode = zipCode;
        }
        else
        {
            throw "Invalid zipCode";
        }
    }

    ToString()
    {
        return "Id: " + this.id + "\t\tEmpName: " + this.name + "\t\tSalary: " + this.salary +
        "\t\tGender: " + this.gender + "\t\tStartDate: "+ this.startDate +"\t\tEmailId: "+this.email+
        "\t\tZipcode: "+this.zipCode;
    }
}
let empPayroll = new EmployeePayroll(1,"Asha",25000,"F","25/05/2020","asha@gmail.com",670001);
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
let empPayroll1 = new EmployeePayroll(3, "Saneesh", 22000, "M", date.toLocaleDateString(),"sa.s@gg.co.in",567098);
console.log(empPayroll1.ToString());