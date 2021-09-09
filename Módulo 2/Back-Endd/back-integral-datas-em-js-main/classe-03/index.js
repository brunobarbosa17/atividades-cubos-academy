function taAberto(date) {
    if (date.getHours() > 8 && date.getHours() < 18) {
        console.log(true)
        return true;
    } else {
        console.log(false)
        return false
    }
}

taAberto(new Date(2015,1,1,2))