// Game object
function Game(Room_ID) {
    this.Room_ID = Room_ID
    this.User_Array = []
    this.Current_Round_Stocks = []
    this.next_Round_Stocks = []
    this.Stock_Dates = [[], [], [], []]
    this.Rounds_Left = 10
    this.started = false
    const fs = require('fs')
    let MSFTdata = fs.readFileSync(`MSFT.json`)
    let MSFT = JSON.parse(MSFTdata)
    let IBMdata = fs.readFileSync(`IBM.json`)
    let IBM = JSON.parse(IBMdata)
    let AMZNdata = fs.readFileSync(`AMZN.json`)
    let AMZN = JSON.parse(AMZNdata)
    let AAPLdata = fs.readFileSync(`AAPL.json`);
    let AAPL = JSON.parse(AAPLdata);
    let stockJSON = [MSFT, IBM, AMZN, AAPL]
    for (var i = 0; i < 4; i++) {
        for (let j = 0; j < 10; j++) {
            let date = generateDateString()
            while (!stockJSON[i].hasOwnProperty(date)) {
                date = generateDateString()
            }
            this.Stock_Dates[i][j] = date
        }
    }
    this.set_current_stock_round(0)

}

// function Whichstock(Company_Name) {
//     parameters: {
//         companychoice: 'company'
//     }
//     let which_stock
//     for (let i = 0; i < 4; i++) {
//         if (companychoice == Company_Name[i]) {
//             which_stock = i
//         }
//     }
//     return which_stock
// }
Game.prototype.set_current_stock_round = function (index) {
    const fs = require('fs')
    let MSFTdata = fs.readFileSync(`MSFT.json`)
    let MSFT = JSON.parse(MSFTdata)
    let IBMdata = fs.readFileSync(`IBM.json`)
    let IBM = JSON.parse(IBMdata)
    let AMZNdata = fs.readFileSync(`AMZN.json`)
    let AMZN = JSON.parse(AMZNdata)
    let AAPLdata = fs.readFileSync(`AAPL.json`);
    let AAPL = JSON.parse(AAPLdata);
    let stockJSON = [MSFT, IBM, AMZN, AAPL]
    for (let i = 0; i < 4; i++) {
        this.Current_Round_Stocks[i] = stockJSON[i][this.Stock_Dates[i][index]]
    }
}
Game.prototype.buy_stock = function (externalID, numStocks, WhichStock) {
    if (!this.started) {
        return false
    }
    let userFound = false
    let userIndex
    for (let i = 0; i < 4; i++) {
        if (this.User_Array[i].user_id == externalID) {
            userFound = true
            userIndex = i
            break
        }
    }
    if (!userFound) {
        return false
    }
    let user = this.User_Array[userIndex]
    let old_price = user.Balance
    user.Balance = user.Balance - this.Current_Round_Stocks[WhichStock]["price"] * numStocks
    if (user.Balance < -500) {
        user.Balance = old_price
        return user
    }
    user.Stock_Value = user.Stock_Value + this.Current_Round_Stocks[WhichStock]["price"] * numStocks
    user.stocks[WhichStock] = user.stocks[WhichStock] + numStocks
    return user
}
Game.prototype.add_user = function (user) {
    if (this.User_Array.length == 4) {
        return false
    }
    this.User_Array[this.User_Array.length] = user
    if (this.User_Array.length == 4) {
        this.started = true
        const decrementInterval = setInterval(() => {
            if (this.Rounds_Left > 0) {
                this.Rounds_Left--;
                this.set_current_stock_round(10 - this.Rounds_Left)
            } else {
                clearInterval(decrementInterval);
            }
        }, 60000);
    }
    return true
}
Game.prototype.leaderboard = function () {
    function compareUsers(a, b) {
        const aSum = a.Balance + a.Stock_Value;
        const bSum = b.Balance + b.Stock_Value;
        if (aSum < bSum) {
            return 1; // b comes before a
        } else if (aSum > bSum) {
            return -1; // a comes before b
        } else {
            return 0; // no change in order
        }
    }
    this.User_Array.sort(compareUsers)
    return this.User_Array
}
Game.prototype.sell_stock = function (externalID, numStocks, WhichStock) {
    if (!this.started) {
        return false
    }
    let userFound = false
    let userIndex
    for (let i = 0; i < 4; i++) {
        if (this.User_Array[i].user_id == externalID) {
            userFound = true
            userIndex = i
            break
        }
    }
    if (!userFound) {
        return
    }
    let user = this.User_Array[userIndex]
    if (user.stocks[WhichStock] - numStocks < 0) {
        return user
    }
    user.Balance = user.Balance + this.Current_Round_Stocks[WhichStock]["price"] * numStocks
    user.Stock_Value = user.Stock_Value - this.Current_Round_Stocks[WhichStock]["price"] * numStocks
    user.stocks[WhichStock] = user.stocks[WhichStock] - numStocks
    return user
}

// User Object
function User(Balance, userid) {
    this.Balance = Balance
    this.Stock_Value = 0
    this.stocks = [0, 0, 0, 0]
    this.user_id = userid
}

// function NetWorth(balance, Stock_Value) {
//     for (let i = 0; i < 4; i++) {
//         this.User_Array[i].NetWorth = User.Balance + User.Stock_Value
//     }
// }


// function leaderboard(User_Array) {

//     const leaderboardScore = this.User_Array.NetWorth;
//     leaderboardScore.sort();
//     console.log(leaderboardScore);

//     let leaderboardNames = []

//     for (let i = 0; i < 4; i++) {
//         for (let j = 0; i < 4; j++) {
//             if (leaderboardScore[i] == this.User_Array[j].NetWorth) {
//                 leaderboardNames[i] = this.User_Array[j].user_id
//             }
//         }
//     }
// }
// Helper functions
function generateDateString() {
    const year = generateRandomIntegerInRange(1999, 2023);
    const month = generateRandomIntegerInRange(1, 12);
    const day = generateRandomIntegerInRange(1, 30);
    const monthString = (month < 10 ? '0' : '') + month;
    const dayString = (day < 10 ? '0' : '') + day;
    return `${year}-${monthString}-${dayString}`;
}
function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    game: Game,
    user: User,
}