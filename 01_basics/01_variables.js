const accountId = 144553
let accountEmail = "saggarwal@innow8apps.com"
var accountPassword = "12345"  /* prefer not/never to use var -- issue in block scope and functional scope */
accountCity = "Mohali"
let accountState;

// accountId = 11111                // not allowed 
accountEmail = "hc@hc.com"          
accountPassword = "54321"
accountCity = "Chandigarh"


console.log(accountId)
console.table([accountEmail, accountPassword, accountCity, accountState])