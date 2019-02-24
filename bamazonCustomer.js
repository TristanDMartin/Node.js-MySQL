var mysql = require('mysql');
var inquirer = require('inquirer');

// mySQL connection
var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Knuckie23",
    database: "bamazon_db"
});

connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log("Item    Product \t\tDepartment \tPrice\t Stock");
    console.log("--");
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].ItemID + " \t" + res[i].ProductName + "\t" + res[i].DepartmentName + "\t" + res[i].Price + " \t " + res[i].StockQuantity);
    }
    console.log("--");

    inquirer.prompt([{
        name: "product",
        type: "input",
        message: "Choose between 1-10 of the product that works best for you? [If you changed your mind? Press Y]"
    },
    {
        name: "qty",
        type: "input",
        message: "Looking at the Quanity of the stock, how many of this product did you want to purchase?"

    }]).then(function (productObj) {
        if (productObj.product.toUpperCase() == "Y") {
            connection.end();
        } else {
            connection.query('SELECT * FROM products WHERE ?', { ItemID: productObj.product }, function (err, res) {
                if (err) throw err;
                // console.log(res)
                if (res[0].StockQuantity > productObj.qty) {

                    var cost = res[0].Price * productObj.qty
                    console.log("--");
                    console.log("Your order is validated! \nThe total cost is $" + cost.toFixed(2) + "\nThank you for ordering")

                    var newQty = res[0].StockQuantity - productObj.qty

                    connection.query("UPDATE products SET ? WHERE ?", [{
                        StockQuantity: newQty
                    },
                    {
                        ProductName: productObj.product
                    }],

                        function (err, res) {
                        });
                }
                else {
                    console.log("--");
                    console.log("Sorry, we do not have enough in stock. \nWe only have " + res[0].StockQuantity + " units of " + ansProd.product + ". \nPlease retry your order. \nThank you!")
                }
            })
        }
    })
});