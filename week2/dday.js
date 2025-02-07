function fn_dday(start, days){
    console.log(start, days);
    let startDay = new Date(start);
    let startTime = startDay.getTime();
    let dDay = startTime + (days * (24 * 60 * 60 * 1000));
    let dDate = new Date(dDay);
    console.log(dDate);
    let year = dDate.getFullYear();
    let month = String(dDate.getMonth()+1).padStart(2,'0');
    let day = String(dDate.getDate()).padStart(2,'0');
    return `${year}-${month}-${day}`;
}
