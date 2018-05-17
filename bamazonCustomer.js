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
    displayProducts();
});
function run() {
    inquirer
        .prompt([
            {
            type: "input",
            name: "itemID",
            message: "What is the item_Id of the item you are interested?"
            },
            {
            type: "input",
            name: "quantity",
            message: "How many of this product are you interested in buying?",
            }
        ])
        .then(function (answer) {
            var itemID = answer.itemID;
            var quantity = answer.quantity;

            connection.query("SELECT item_Id,product_name,price,stock_quantity FROM products WHERE item_Id = "+itemID, function(err,res){
                if (res === undefined || res.length ===0){
                    console.log("Sorry you have entered an incorrect itemID please try again")
                }else if (quantity > res[0].stock_quantity){
                    console.log("You have requested to purchase the following quantity: " + quantity + ".  We only have " + res[0].stock_quantity + " in stock.\nPlease try again.");
                    displayProducts();
                }else {
                    var newQuantity = Number(res[0].stock_quantity)-Number(quantity);
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: newQuantity
                            },
                            {
                                item_Id: item_ID
                            }
                        ]
                    )
                 var total = Number(quantity)*Number(res[0].price);
                 //console.log(sprintf("Your total is: $%.2f", total));
                    displayProducts();
                }
                
            });
        });
}
function displayProducts(){
    console.log("PRODUCTS FOR SALE\n");
    connection.query("SELECT item_Id, product_name, price FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            //console.log(sprintf("Item ID: %-8i Product: %-25s Price: $%-10.2f", res[i].item_ID, res[i].product_name, res[i].price));   
        }
        run();
    });

}