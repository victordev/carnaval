// ------------------------------------------------------------------------------
// COUNTDOWN --------------------------------------------------------------------
var timeRemaining = {
  days: function() {
    var end = new Date(2017,01,24);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var now = new Date();
    var distance = end - now;


    var days = Math.floor(distance / _day);

    if (distance <= 0) {
      return 'JÁ É CARNAVAL!';
    } else {
      return 'Faltam ' + days + ' dias para o carnaval!';
    }
  }
}

var titleNotification = timeRemaining.days();

// ------------------------------------------------------------------------------
// NOTIFICATIONS ----------------------------------------------------------------
var options = {
  body: 'Clique aqui para saber mais.',
  icon: 'img/icon128.png',

  url: 'https://www.google.com.br/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=carnaval+2017&tbm=nws',
}

var notify = function() {
  var notification = new Notification(titleNotification, options);
  notification.onclick = function () {
    window.open(options.url, "_blank");
  };
}

chrome.windows.onCreated.addListener(notify);
