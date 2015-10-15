var File = require('fs');
module.exports = {
  templates: function(name) {
    if(name)  {
      var path = __dirname + '/templates/' + name + '.hbs';
      return File.readFileSync(path).toString();
    }
    return false;
  }
}
