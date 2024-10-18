//Coded By Lucas Lyra -- Essa versão do código original com uso de Switch-Case
function mostraPersonagem() {
    let nomeHeroi = "Testor";
    let expHeroi = 0;
    let nivel;

    while (expHeroi < 12000) {
        switch (true) {
            case (expHeroi < 1000):
                nivel = "Ferro";
                break;
            case (expHeroi >= 1001 && expHeroi <= 2000):
                nivel = "Bronze";
                break;
            case (expHeroi >= 2001 && expHeroi <= 5000):
                nivel = "Prata";
                break;
            case (expHeroi >= 5001 && expHeroi <= 7000):
                nivel = "Ouro";
                break;
            case (expHeroi >= 7001 && expHeroi <= 8000):
                nivel = "Platina";
                break;
            case (expHeroi >= 8001 && expHeroi <= 9000):
                nivel = "Ascendente";
                break;
            case (expHeroi >= 9001 && expHeroi <= 10000):
                nivel = "Imortal";
                break;
            case (expHeroi >= 10001):
                nivel = "Radiante";
                break;
            default:
                nivel = "Desconhecido";
                break;
        }

        expHeroi += 1000;

        console.log("O herói de nome: " + nomeHeroi + " e experiência: " + expHeroi + " pertence ao nível: " + nivel);
    }
}

mostraPersonagem();
