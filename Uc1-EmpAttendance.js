{
    const IS_ABSENT = 0;
    let random = Math.floor(Math.random() * 10) % 2;
    if(random == IS_ABSENT)
    {
        console.log("Employee is Absent");
        return;
    }
    console.log("Employee is Present");
}