let userName = prompt('Adınız nedir?');
let title = document.querySelector('#title');

if (userName.length > 1) {

    title.innerHTML = `Merhaba, ${userName}! Hoş geldin!`;

} else {
    title.innerHTML = 'Lütfen bilgilerinizi kontrol edin';
}


function time() {

    let dayNow = new Date().toLocaleDateString('tr-tr', {
        weekday: "long",
        month: "long",
        day: "numeric"
    });
    let day = document.querySelector('#day');
    day.innerHTML = dayNow;

    var times = new Date();
    var time = times.getHours() + ":" + times.getMinutes() + ":" + times.getSeconds();

    let timeToday = document.querySelector('#timeToday');

    timeToday.innerHTML = time;

}

setInterval(time, 1000);