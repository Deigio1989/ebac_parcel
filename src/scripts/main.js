AOS.init();

const eventDate = new Date("Apr 29, 2024 16:00:00");
const eventTimeStamp = eventDate.getTime();

const count = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = eventTimeStamp - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs =1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs );
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs); 
    const minutosAteOEvento =  Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segunndosAteOEvento =  Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);


    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segunndosAteOEvento}s `;
    
    if (distanciaAteOEvento<0){
        clearInterval(count);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }

},1000);





