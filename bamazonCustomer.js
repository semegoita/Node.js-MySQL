var mysql = require ("mysql");
var inquirer = require ("inquirer");

var connection = mysql.createConnection({
    host:"local host",
    port:3306,
    user:"semegoita",
    password:"Roseha1697",
    database:"bamazon_DB"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected");
    //start();
  });
//   function start(){
//       inquirer.prompt([
//           {
//           name:"item",
//           type:"input",
//           message:"what is the ID of the product you are looking for?"
//           },
//           {
//             name:"item",
//             type:"input",
//             message:"How many units of that item are you looking for?",
           
//           }
//       ])
//       .then(function(){
//         connection.
//       });
//   };