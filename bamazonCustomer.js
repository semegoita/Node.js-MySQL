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
            type: "input",
            name: "productID",
            message: "What is the product_ID of the item you are interested?"
            },
            {
            type: "input",
            name: "amount",
            message: "How many of this product are you interested in buying?",
            }
        ])
        .then(function (input) {
            var item = input.productID;
            var quantity = input.amount;
        });
}