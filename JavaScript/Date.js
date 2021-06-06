formatDate = (date) => {
    let newDate = date.toString().split("")
    newDate.splice(6, 0, '-')
    newDate.splice(4, 0, '-')
    let formatDate = new Date(newDate.join(""))
    let month = formatDate.toLocaleString('default', { month: 'long' });
    let day = formatDate.getUTCDate();
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    console.log(`${days[formatDate.getDay()]}, ${month} ${day}`)
    return (`${days[formatDate.getDay()]}, ${month} ${day}`)
}

formatDate(20210606)




let today1 = new Date()
let today2 = new Date('June 06, 2021 00:00:00')
let today3 = new Date('2021-06-17T00:00:00')
let today4 = new Date(2021, 05, 06)            // date alone
let today5 = new Date(2021, 05, 06, 0, 00, 0)  // date with time (set to midnight)
let today6 = new Date("06/06/2021");
let long2 = new Date("06 Jun 2021");
let long3 = new Date("June 06 2021");
let long4 = new Date("Jun 06 2021");
let long5 = new Date("JUNE, 06, 2021");