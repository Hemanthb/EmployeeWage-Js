{
    const IS_ABSENT = 0, IS_PART_TIME = 1, IS_FULL_TIME = 2;
    const WAGE_PER_HRS = 20;
    let random = Math.floor(Math.random() * 10) % 3;
    let empHrs = 0;
    switch(random){
        case IS_ABSENT:
            console.log("Employee is Absent hence wage is Rs.0");
            return;
        case IS_PART_TIME:
            empHrs = 4;
            break;
        case IS_FULL_TIME:
            empHrs = 8;
            break;
    }
    let empWage = empHrs * WAGE_PER_HRS;
    console.log("Emp Wage for a day is -> Rs. "+empWage);
    
}