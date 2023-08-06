/**
 * Return the difference between a birthdate and an optional "now" date, in years
 * 
 * @param {Date} birthDate
 * @param {Date} nowDate
 * @return  {Number}
 */
function getAge(date1, date2) {
    if (date2 == undefined) date2 = new Date();

    let diff = (date2.getDate() - date1.getDate()) / 30 +
        date2.getMonth() - date1.getMonth() +
        (12 * (date2.getFullYear() - date1.getFullYear()));
    return Math.floor(diff / 12)
}

console.log(getAge(new Date('1976/11/19')))