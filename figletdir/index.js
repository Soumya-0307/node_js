var figlet = require("figlet");

figlet("Soumya Amogha", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});