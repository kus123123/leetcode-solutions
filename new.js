const fs = require("fs");

function generateDate() {
  return new Date();
}
function savedatetofile() {
  let date = generateDate();
  fs.appendFileSync("date.txt", date);

    console.log("Date saved to file");
}
savedatetofile();