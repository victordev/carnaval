// ------------------------------------------------------------------------------
// COUNTDOWN --------------------------------------------------------------------
function showRemaining() {
  var end = new Date(2017,01,23);

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;
  var now = new Date();
  var distance = end - now;

  if (distance < 0) {
    clearInterval(timer);
    console.log('Já é Carnaval!!!');

    return;
  }
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);
}

timer = setInterval(showRemaining);
// ------------------------------------------------------------------------------
// NOTIFICATIONS ----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.');
    return;
  }
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

var url = "https://victormartins.com.br/carnaval/";
var notifyMe = function() {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Faltam ' + days + ' dias para o carnaval!', {
      icon: 'icon128.png',
      body: "aaaaaaaaaaaa",
    });
    notification.onclick = function () {
      window.open(url, "_blank");
    };
  }
}

chrome.windows.onCreated.addListener(notifyMe);


function cb() {
  console.log(days)
}
setInterval(cb, 1000)
