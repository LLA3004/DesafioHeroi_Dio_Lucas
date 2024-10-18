//Coded by: Lucas Lyra 
/***O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"*/


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

