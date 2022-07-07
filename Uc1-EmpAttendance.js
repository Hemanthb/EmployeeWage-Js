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

    //UC11(a) - Calculating Total Hours and Total Wage
    let totalWage = empDailyHrsAndWageArray.filter(x => x.dailyWage > 0).reduce((wage, x) => wage += x.dailyWage, 0);
    let totalHours  = empDailyHrsAndWageArray.filter(x => x.dailyHours > 0).reduce((hour, x) => hour += x.dailyHours, 0);
    console.log("Employee Worked for: " + totalHours + " Hours and Earned: " + totalWage);

    //UC11(b) - Checking Number of Full Working Hours
    let fullWorkHrsArray = new Array();
    //empDailyHrsAndWageArray.filter(x => x.dailyHours == 8).forEach(x => console.log(x.toString()));
    empDailyHrsAndWageArray.filter(x => x.dailyHours == 8).forEach(x => fullWorkHrsArray.push(x));
    console.log("\nNo. Of Days Employee Worked FullDay: " + fullWorkHrsArray.length);
    console.log(fullWorkHrsArray.toString());

     //UC11(c) - Finding Number of Part Time Working Hours
     console.log("\nNo. Of Days Employee Worked PartTime:");
     let partTimeDays = empDailyHrsAndWageArray.filter(x => x.dailyHours == 4).map(x => x.toString());
     console.log(partTimeDays);
 
     //UC11(d) - Finding Number of Non Working Hours
     console.log("\nDays Employee Absented :");
     let nonWorkingDays =  empDailyHrsAndWageArray.filter(x => x.dailyHours == 0).map(x => x.toString());
     console.log(nonWorkingDays);
 
     //UC11(e) - Finding First occurence of a Full Time Wage
     let firstFullTimeWage = empDailyHrsAndWageArray.find(x => x.dailyWage == 160)
     console.log("\nEmployee's First Full time Wage Occured at: " + firstFullTimeWage.toString());
 
     //UC11(f) - Checking no.of Days Employee Worked
     let workingDays = empDailyHrsAndWageArray.filter(x => x.dailyHours > 0);
     console.log("\nNumber of Days Employee Worked in a Month: " + workingDays.length);
}