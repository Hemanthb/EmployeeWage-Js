{
    var IS_ABSENT = 0, IS_PART_TIME = 1, IS_FULL_TIME = 2;
    const WAGE_PER_HRS = 20;
    const TOTAL_WORKING_DAYS = 20;
    let totalWorkHrs = 0;
    for(let i =1;i<=TOTAL_WORKING_DAYS;i++){
        let dayWorkHrs = GetWorkingHrs();
        let DailyWage = WAGE_PER_HRS * dayWorkHrs;
        totalWorkHrs += dayWorkHrs;
        console.log("Day -"+i+" wage is - Rs. "+DailyWage);
    }
    let empWage = WAGE_PER_HRS * totalWorkHrs;
    console.log("Emp Wage for a Month is -> Rs. "+empWage+" and total work hrs is "+totalWorkHrs+"hrs");
    
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