function taAberto(date) {
    if (date.getDay() === 0 || date.getDay() === 6) {
        console.log(false)
        return false;
    } else {
        if (date.getHours() > 8 && date.getHours() < 18) {
            console.log(true)
            return true;
        } else {
            console.log(false)
            return false
        }
    }

    
}

taAberto(new Date(2021,3,25,12)); // deve retornar false, pois é um domingo

taAberto(new Date(2021,3,26,12)); // deve retornar true, pois é uma segunda

taAberto(new Date(2021,3,26,7,59)); // deve retornar false, pois é muito cedo (7h59)