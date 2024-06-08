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

    let agora = new Date();
    let segundo = agora.getSeconds();
    let minuto = agora.getMinutes();
    let hora = agora.getHours();
   
    
    

  


    txtsegundos.innerHTML = segundo;
    txtminutos.innerHTML = minuto;
    txthora.innerHTML = hora;
    if(segundo < 10){txtsegundos.innerHTML = '0' + segundo};
}
    setInterval(relogio, 1000);
