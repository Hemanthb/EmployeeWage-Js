const IS_ABSENT = 0, IS_PART_TIME = 1, IS_FULL_TIME = 2, TOTAL_WORKING_HRS = 160;
const WAGE_PER_HRS = 20;
const TOTAL_WORKING_DAYS = 20;
let empDailyWageArray = new Array();
let empWorkHrsMapArray = new Map();
{
    
    let totalWorkHrs = 0;
    let i = 0;
    while(i < TOTAL_WORKING_DAYS && TOTAL_WORKING_HRS > totalWorkHrs){
        i++;
        let dayWorkHrs = GetWorkingHrs();
        let DailyWage = CalculateWage(dayWorkHrs);
        totalWorkHrs += dayWorkHrs;
        console.log("Day -"+i+" wage is - Rs. "+DailyWage);
        empDailyWageArray.push(DailyWage);
        empWorkHrsMapArray.set(i,dayWorkHrs);
        
    }
    let empWage = CalculateWage(totalWorkHrs);
    console.log("Emp Wage for a Month is -> Rs. "+empWage+" and total work hrs is "+totalWorkHrs+"hrs");
    
}
function CalculateWage(totalWorkingHrs){
    return WAGE_PER_HRS*totalWorkingHrs;
}
function GetWorkingHrs(){
    let random = Math.floor(Math.random() * 10) % 3;
    
    switch(random){
        case IS_ABSENT:
            console.log("Employee is Absent");
            return 0;
        case IS_PART_TIME:
            console.log("Employee worked Part time.")
            return 4;
        case IS_FULL_TIME:
            console.log("Employee worked Full time.")
            return 8;
    }
}

{
    let empSalaryForAMonth = 0,employeeWageForADay = 0,empHours = 0,totalEmpHours = 0,noOfWorkingDays = 1;
    let empDailyHrsAndWageArray = new Array();
    while(totalEmpHours < TOTAL_WORKING_HRS && noOfWorkingDays <= TOTAL_WORKING_DAYS)
    {
        empCheck = Math.floor(Math.random() * 10) % 3;
        empHours = GetWorkingHrs(empCheck);  
        employeeWageForADay = CalculateWage(empHours);
        empDailyHrsAndWageArray.push(
            {
                dayNum: noOfWorkingDays,
                dailyHours: empHours,
                dailyWage: employeeWageForADay,
                toString()
                {
                    return "\nDay: " + this.dayNum + "\t\tDaily Hours: " + this.dailyHours + "\t\tDailyWage: " + this.dailyWage;
                }
            });
        empSalaryForAMonth += employeeWageForADay;
        totalEmpHours = totalEmpHours + empHours;
        noOfWorkingDays++;
    }
    console.log("Hours Worked and Wages Earned by an Employee: " + empDailyHrsAndWageArray);
    console.log("Employee Wage for a Month: " + empSalaryForAMonth);
}
