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
//using foreach to calculate total wage by iterating over daily wage array
let totWage = 0;
empDailyWageArray.forEach(wageCalculate);
function wageCalculate(wage){
    totWage += wage
}
console.log("Total wage calculated using sum of daily wage array --> Rs."+totWage);

//UC-7a -> Calculate wage using reduce function
function FindTotalWage(dailyWage,totalWage){
    return totalWage=totalWage+dailyWage;
}
console.log("UC - 7(a) Total Wage calculated using reduce function --> Rs."+empDailyWageArray.reduce(FindTotalWage,0));

//Uc-7b -> Using Array Map Function to display day and wage
let dayCount = 0;
function MapDayAndWage(wage){
    dayCount++;
    return dayCount+" = "+wage;
}
let empDailyWageMapArray = empDailyWageArray.map(MapDayAndWage);
console.log("UC - 7(b) ->> Mapping of Day and DailyWage:")
empDailyWageMapArray.forEach(element =>
    console.log(element));

//UC - 7(c) - Filter out only Fulltime wage
function FilterFullTimeWage(wage){
    return wage.includes("160");
}
let fullTimeWagesArray = empDailyWageMapArray.filter(FilterFullTimeWage) 
console.log("UC - 7(c) - Using Filter function to get full time wage")
console.log(fullTimeWagesArray);

//UC - 7(d) - Find first occurence Of Full time wage
let firstFullTimeWagePos = empDailyWageMapArray.find(FilterFullTimeWage);
console.log("UC - 7(d) - 1st Full time Daily Wage occurence is at - "+firstFullTimeWagePos);

//UC - 7(e) - Check every value of fullTimewagearray is full time wage
let checkFullTimeWage = fullTimeWagesArray.every(FilterFullTimeWage);
console.log("UC - 7(e) - Every value of Full time wage array is rightly full time wage :"+checkFullTimeWage);

//UC - 7(f) - Checks for Part Time wages in EmpEageArray
function FindPartTimeWage(wage){
    return wage.includes("80");
}
let isPartTimeWageExist = empDailyWageMapArray.some(FindPartTimeWage);
console.log("UC - 7(f) - Does Part Time wage found in EmpWageArray? - "+isPartTimeWageExist);

//UC - 7(g) - Finding the No of Days Employee Worked
function EmployeeWorkedDays(noOfDays,wage){
    if(wage > 0){
        return noOfDays+1;
    }
    return noOfDays;
}
let empWorkedDays = empDailyWageArray.reduce(EmployeeWorkedDays,0)
console.log("UC - 7(g) - Number Of days Employee was present are -");
console.log(empWorkedDays);

//UC -8 - storing Day->DailywAge->TotalWageTillDate
 let day_count = 0;
 let empSalaryForAMonth = 0;
 function DailyAndTotalWage(wage)
 {
     day_count++;
     empSalaryForAMonth += wage;
     return day_count + " = " + wage + " = " + empSalaryForAMonth;
 } 
 let dailyAndTotalWageArray = empDailyWageArray.map(DailyAndTotalWage);
 console.log(dailyAndTotalWageArray);
console.log("UC - 8 - Map of Day->DailywAge->TotalWageTillDate :")
console.log(Array.from(empDailyWageMapArray.values()).reduce(FindTotalWage,0))

//UC -9 - Arrow Function
const findTotal = (totalValue,dailyValue) => {
    return totalValue+dailyValue;
}
let totalHrsWorked = Array.from(empWorkHrsMapArray.values()).filter(empHrs=>empHrs!="0").reduce(findTotal,0);
console.log("UC - 9(a) - Total Hrs Worked found using Arrow function -> "+totalHrsWorked);
let totalWages = empDailyWageArray.filter(empwage=>empwage>0).reduce(findTotal,0);
console.log("UC - 9(a) - Total wage for the month found using Arrow function -> "+totalWages);

//UC - 9(b)
let fullWorkingDays = new Array();
let PartWorkingDays = new Array();
let noWorkingDays = new Array();

empWorkHrsMapArray.forEach((value, key, map) =>{
    if(value == 8)
    {
        fullWorkingDays.push(key);
    }
    else if(value == 4)
    {
        PartWorkingDays.push(key);
    }
    else
    {
        noWorkingDays.push(key);
    }
});
console.log("Days Employee worked Full Time:");
console.log(fullWorkingDays);
console.log("Days Employee worked Part Time: ");
console.log(PartWorkingDays);
console.log("Days Employee Absented: ");
console.log(noWorkingDays);
