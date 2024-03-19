let hero_name = "Erick"

let xp_adquire = 14765

let level

if (xp_adquire <= 1000){
    level = "Ferro"
}else if(xp_adquire >= 1001 && xp_adquire <= 2000){
    level = "Bronze"
}else if(xp_adquire >= 2001 && xp_adquire <= 3000){
    level = "Prata"
}else if(xp_adquire >= 3001 && xp_adquire <= 4000){
    level = "Ouro"
}else if(xp_adquire >= 4001 && xp_adquire <= 5000){
    level = "Platina"
}else if(xp_adquire >= 5001 && xp_adquire <= 6500){
    level = "Diamante"
}else if(xp_adquire >= 6501 && xp_adquire <= 8000){
    level = "Acsendente"
}else if(xp_adquire >= 8001 && xp_adquire <= 10000){
    level = "Imortal"
}else if(xp_adquire >= 10001){
    level = "Radiante"
}

console.log("O heroi " + hero_name + " está no Nivel " + level)