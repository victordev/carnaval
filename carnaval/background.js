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
var days = Math.floor(distance / _day);

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

var url = "https://www.victormartins.com.br/carnaval/";
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
