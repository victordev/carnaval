// ------------------------------------------------------------------------------
// COUNTDOWN --------------------------------------------------------------------
var end = new Date(2017,01,23);

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;
var now = new Date();
var distance = end - now;

var date = {
  days: Math.floor(distance / _day),
  hours: Math.floor((distance % _day) / _hour),
  minutes: Math.floor((distance % _hour) / _minute),
  seconds: Math.floor((distance % _minute) / _second)
}

function showRemaining() {
  if (distance < 0) {
    clearInterval(timer);
    console.log('Já é Carnaval!!!');

    return;
  }

  date;
}


timer = setInterval(showRemaining);

// ------------------------------------------------------------------------------
// NOTIFICATIONS ----------------------------------------------------------------
var url = "https://victormartins.com.br/carnaval/";
var notifyMe = function() {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Faltam ' + date.days + ' dias para o carnaval!', {
      icon: 'icon128.png',
      body: "aaaaaaaaaaaa",
    });
    notification.onclick = function () {
      window.open(url, "_blank");
    };
  }
}

chrome.windows.onCreated.addListener(notifyMe);
