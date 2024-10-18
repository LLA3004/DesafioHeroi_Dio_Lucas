//Coded by: Lucas Lyra 



function mostraPersonagem(){
let nomeHeroi = "Testor"
let expHeroi = 0
let nivel;

while(expHeroi < 12000){
    if(expHeroi < 1000){
    //Nivel Ferro
        nivel = "Ferro"
    }else if(expHeroi >=1001 && expHeroi <=2000){
        //Nivel Bronze
        nivel = "Bronze"
    }else if(expHeroi >=2001 && expHeroi <=5000){
        //Nivel Prata
        nivel = "Prata"
    }else if(expHeroi >=5001 && expHeroi <=7000){
        //Nivel Ouro
        nivel = "Ouro"

    }else if(expHeroi >=7001 && expHeroi <=8000){
        //Nivel platina
        nivel = "Platina"
    }else if(expHeroi >=8001 && expHeroi <=9000){
        //Nivel Ascendente
        nivel = "Ascendente"

    }else if(expHeroi >=9001 && expHeroi <=10000){
        //Nivel Imortal
        nivel = "Imortal"

    }else if(expHeroi >=10001){
        //Nivel Radiante
        nivel = "Radiante"
    }
    expHeroi +=1000


    console.log("O heroi de nome: " + nomeHeroi +  " e experiencia: " + expHeroi + " Pertence ao nivel:" + nivel)
}
}
mostraPersonagem()

