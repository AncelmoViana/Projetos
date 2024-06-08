function createStars(){
    const container = document.querySelector("body");
    for(let i=0; i < 1000; i++){
        const star = document.createElement("div");
        star.className = "star";
        star.style.width = ".1px";
        star.style.height = ".1px";

        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";

        container.appendChild(star);

    }
}
createStars();


function relogio(){
    
    let txtsegundos = document.getElementById('segundos');
    let txtminutos = document.getElementById('minutos');
    let txthora = document.getElementById('hora');
  
    let txtsaudacao = document.getElementById('txtsaudacao');
    let txtdia = document.getElementById('txtdia');
    let txtmes = document.getElementById('txtmes');
    let txtano = document.getElementById('txtano');
    let txtdiasemana = document.getElementById('txtdiasemana');

    let agora = new Date();
    //variaveis do relogio
    let segundo = agora.getSeconds();
    let minuto = agora.getMinutes();
    let hora = agora.getHours();
    //variavis do dia mes e ano.
    let dia = agora.getDate();
    let mes = agora.getMonth();
    let ano = agora.getFullYear();
    //variavel dia da semana.
    let diasemana = agora.getDay();


 
   
    
    txtsegundos.innerHTML = segundo;
    txtminutos.innerHTML = minuto;
    txthora.innerHTML = hora;
    txtdia.innerHTML = dia;
    txtmes.innerHTML = mes + 1;
    

    //condicões para adicionar um 0 quando o numero for menor que 10.
    if(segundo < 10){txtsegundos.innerHTML = '0' + segundo};
    if(minuto < 10){txtminutos.innerHTML = '0' + minuto};
    if(hora < 10){txthora.innerHTML = '0' + hora};

  

    //condiçoes da saudação
    if(hora >= 6 && hora < 12){txtsaudacao.innerHTML = 'Bom Dia!'}
    if(hora >= 12 && hora < 18){txtsaudacao.innerHTML = 'Boa Tarde!'}
    if(hora >= 18 && hora < 0){txtsaudacao.innerHTML = 'Boa Noite!'}
    if(hora >= 0 && hora < 6){txtsaudacao.innerHTML = ' Madrugou!'}

    //condiçoes dia do ano
    if(dia < 10){txtdia.innerHTML = '0' + dia }
    if(mes < 10){txtmes.innerHTML = '0' + mes}


     
    //condiçoes para os dias da semana
    switch(diasemana){
        case 0:
            txtdiasemana.innerHTML = `<br>Domingo`;
    
            break;
        case 1:
            txtdiasemana.innerHTML = `<br>Segunda-Feira`;
            break;
        case 2:
            txtdiasemana.innerHTML = `<br>Terça-Feira`;
            break;
        case 3:
            txtdiasemana.innerHTML = `<br>Quarta-Feira`;
            break;
        case 4:
            txtdiasemana.innerHTML = `<br>Quinta-Feira`;
            break;
        case 5:
            txtdiasemana.innerHTML = `<br>Sexta-Feira`;
            break;
        case 6:
            txtdiasemana.innerHTML = `<br>Sábado`;
            break;
    }
}
    setInterval(relogio, 1000);
