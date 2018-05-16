var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_DB"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected");
    runSearch();
});
function runSearch() {
    inquirer
        .prompt([
            {
            name: "productID",
            type: "input",
            message: "What is the product_ID of the item you are interested?"
            },
            {
            name: "amount",
            type: "input",
            message: "How many of this product are you interested in buying?",
            }
        ])
        .then(function (answer) {
           
        });
}