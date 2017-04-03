'use strict';

document.querySelector('button').addEventListener('click', function () {
  var val = document.querySelector('input').value;
  var payload = JSON.stringify({ value: val });

  //make request. 
  var myInit = {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: payload,
    mode: 'cors',
    cache: 'default'
  };
  fetch('/api', myInit).then(function (res) {
    return res.text();
  }).then(function (text) {
    console.log(text);
    document.getElementById('server-result').innerText = text;
  });
});

var socket = io.connect('http://localhost:3000');
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});
//# sourceMappingURL=app.js.map
