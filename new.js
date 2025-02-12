function writefile(){
    var fs = require('fs');
    date = new Date();
    fs.appendFile('mynewfile3.txt', `\n ${date} \n`, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
}
writefile();