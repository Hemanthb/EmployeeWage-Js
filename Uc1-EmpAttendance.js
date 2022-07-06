{
    var IS_ABSENT = 0, IS_PART_TIME = 1, IS_FULL_TIME = 2;
    const WAGE_PER_HRS = 20;
    
    let empWage = WAGE_PER_HRS * GetWorkingHrs();
    console.log("Emp Wage for a day is -> Rs. "+empWage);
    
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