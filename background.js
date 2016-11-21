// ------------------------------------------------------------------------------
// COUNTDOWN --------------------------------------------------------------------
var end = new Date(2017,01,23);

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
  var now = new Date();
  var distance = end - now;
  if (distance < 0) {

    clearInterval(timer);
    // document.getElementById('countdown').innerHTML = 'Já é Carnaval!!!';

    return;
  }
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);

  // document.getElementById('countdown').innerHTML = days + 'd ';
  // document.getElementById('countdown').innerHTML += hours + 'h ';
  // document.getElementById('countdown').innerHTML += minutes + 'm ';
  // document.getElementById('countdown').innerHTML += seconds + 's';
}

timer = setInterval(showRemaining, 1000);

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

function notifyMe() {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Notification title', {
      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      body: "Hey there! You've been notified!",
    });
    notification.onclick = function () {
      window.open("http://stackoverflow.com/a/13328397/1269037");
    };
  }
}

chrome.browserAction.onClicked.addListener(function(tab) { //Fired when User Clicks ICON
 alert('icon clicked');
});
