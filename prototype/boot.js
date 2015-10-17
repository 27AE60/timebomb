var App = require('app');
var BrowserWindow = require('browser-window');


App.on('ready', function()  {
  var mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });


  mainWindow.loadUrl('file://' + __dirname + '/index.html');
});
