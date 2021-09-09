const disjuntores = [false, false, true, false, false, true, false, false];
let pos = []

for(let i = 1; i < disjuntores.length; i++) {
    if(disjuntores[i]) pos.push(i) 
}



console.log(pos)