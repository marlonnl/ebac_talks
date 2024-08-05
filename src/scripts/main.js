AOS.init();

// criar uma variável com a data do evento (no futuro)
const eventDate = new Date("Dec 12 2024 19:00:00");
const timestampEvent = eventDate.getTime();

const timeCounter = setInterval(function() {
    let dateNow = new Date();
    let timeTo = timestampEvent - dateNow.getTime();

    //data convertions
    const dayMs = 1000 * 60 * 60 * 24;
    const hourMs = 1000 * 60 * 60;
    const minuteMs = 1000 * 60;

    let days = Math.floor(timeTo / dayMs);
    let hours = Math.floor((timeTo % dayMs) / hourMs);
    let minutes = Math.floor((timeTo % hourMs) / minuteMs);
    let seconds = Math.floor((timeTo % minuteMs) / 1000);

    document.getElementById('counter').innerHTML = `${days}d ${hours}h ${minutes}min ${seconds}s`;

    if (timeTo < 0) {
        clearInterval(timeCounter);
        document.getElementById('eventText').innerHTML = 'O maior evento de tecnologia do Brasil, em 12 de dezembro de 2024 às 19h'
    }

}, 1000);