const accountId = 14453
let accountEmail = "moosa0939@gmail.com";
var accountPassword = "12345";
accountCity = "karachi"

// accountId = 2; // not Allowed 
accountEmail = "atta@gmail.com";
accountPassword = "456777node";
accountCity = "Lahore";

console.log(accountId);
/*
prefer not to use var 
because of issue in block and functional scope 
*/
console.table([accountId, accountPassword, accountCity, accountEmail]);
