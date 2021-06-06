formatDate = (date) => {
    let newDate = date.toString().split("")
    newDate.splice(6, 0, '-')
    newDate.splice(4, 0, '-')
    let formatDate = new Date(newDate.join(""))
    let month = formatDate.toLocaleString('default', { month: 'long' });
    let day = formatDate.getUTCDate();
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    console.log(`${days[formatDate.getDay()]}, ${month} ${day}`)
    // return (`${days[formatDate.getDay()]}, ${month} ${day}`)
}

formatDate(20210606)