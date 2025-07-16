function calculate() {
    const day = parseInt(document.getElementById('day').value);
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('mon').value);
    const today = new Date();

    const nyear = today.getFullYear();
    const nmonth = today.getMonth() + 1;
    const ndate = today.getDate();

    if(day > 31 || day < 0 ||  mon > 12 || mon < 0 || year < 1900 || year > 2024 || isNaN(day) || isNaN(mon) || isNaN(year)){
        alert("something entered is wrong ");
    }
else{
    let ageyear = nyear - year;
    let agemonth = nmonth - month;
    let ageday = ndate - day;

    if (ageday < 0) {
        agemonth--; // Adjust month if current day is before birth day
        ageday += daysInMonth(nmonth - 1, nyear); // Add days of previous month
    }
    if (agemonth < 0) {
        ageyear--; // Adjust year if current month is before birth month
        agemonth += 12; // Add 12 months to handle negative value
    }

    const changeyear = document.getElementById('nyear');
    const changemonth = document.getElementById('nmonth');
    const changeday = document.getElementById('nday');

    changeyear.textContent = ageyear;
    changemonth.textContent = agemonth;
    changeday.textContent = ageday;

}

// Function to get the number of days in a month
function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}
}
