function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
app.get('/room', (req, res) => {

    server: {

        room:
        [
            {
                user_id: generateRandomIntegerInRange(1000, 10000),
                parameters: [
                    {
                        user_action: 'action',
                    }
                ],
                balance: 1000,
                net_worth: 1000,
                stocks: {
                    "stock 1": 0,
                    "stock 2": 0,
                    "stock 3": 0,
                    "stock 4": 0
                }

            },
            {
                user_id: generateRandomIntegerInRange(1000, 10000),
                parameters: [
                    {
                        user_action: 'action',
                    }
                ],
                balance: 1000,
                net_worth: 1000,
                stocks: {
                    "stock 1": 0,
                    "stock 2": 0,
                    "stock 3": 0,
                    "stock 4": 0
                }

            }, {
                user_id: generateRandomIntegerInRange(1000, 10000),
                parameters: [
                    {
                        user_action: 'action',
                    }
                ],
                balance: 1000,
                net_worth: 1000,
                stocks: {
                    "stock 1": 0,
                    "stock 2": 0,
                    "stock 3": 0,
                    "stock 4": 0
                }


            }, {
                user_id: generateRandomIntegerInRange(1000, 10000),
                parameters: [
                    {
                        user_action: 'action',
                    }
                ],
                balance: 1000,
                net_worth: 1000,
                stocks: {
                    "stock 1": 0,
                    "stock 2": 0,
                    "stock 3": 0,
                    "stock 4": 0
                }

            },
        ]

        if (time == 0) {
            if (user_id == userid) {
                if (user_action == 'sell') {
                    balance: balance + changed_balance
                    net_worth: net_worth - changed_stock
                }
                if (user_action == 'buy') {
                    balance: balance - changed_balance_balance
                    net_worth: net_worth + changed_stock
                }
            }
        }
    }
    room:
    [
        {
            user_id: generateRandomIntegerInRange(1000, 10000),
            parameters: [
                {
                    user_action: 'action',
                }
            ],
            balance: 1000,
            net_worth: 1000,
            stocks: {
                "stock 1": 0,
                "stock 2": 0,
                "stock 3": 0,
                "stock 4": 0
            }

        },
        {
            user_id: generateRandomIntegerInRange(1000, 10000),
            parameters: [
                {
                    user_action: 'action',
                }
            ],
            balance: 1000,
            net_worth: 1000,
            stocks: {
                "stock 1": 0,
                "stock 2": 0,
                "stock 3": 0,
                "stock 4": 0
            }

        }, {
            user_id: generateRandomIntegerInRange(1000, 10000),
            parameters: [
                {
                    user_action: 'action',
                }
            ],
            balance: 1000,
            net_worth: 1000,
            stocks: {
                "stock 1": 0,
                "stock 2": 0,
                "stock 3": 0,
                "stock 4": 0
            }


        }, {
            user_id: generateRandomIntegerInRange(1000, 10000),
            parameters: [
                {
                    user_action: 'action',
                }
            ],
            balance: 1000,
            net_worth: 1000,
            stocks: {
                "stock 1": 0,
                "stock 2": 0,
                "stock 3": 0,
                "stock 4": 0
            }

        },
    ]

    if (time == 0) {
        if (user_id == userid) {
            if (user_action == 'sell') {
                balance: balance + changed_balance
                net_worth: net_worth - changed_stock
            }
            if (user_action == 'buy') {
                balance: balance - changed_balance_balance
                net_worth: net_worth + changed_stock
            }
        }
    }
    room:
    [
        {
            user_id: generateRandomIntegerInRange(1000, 10000),
            parameters: [
                {
                    user_action: 'action',
                }
            ],
            balance: 1000,
            net_worth: 1000,
            stocks: {
                "stock 1": 0,
                "stock 2": 0,
                "stock 3": 0,
                "stock 4": 0
            }

        },
        {
            user_id: generateRandomIntegerInRange(1000, 10000),
            parameters: [
                {
                    user_action: 'action',
                }
            ],
            balance: 1000,
            net_worth: 1000,
            stocks: {
                "stock 1": 0,
                "stock 2": 0,
                "stock 3": 0,
                "stock 4": 0
            }

        }, {
            user_id: generateRandomIntegerInRange(1000, 10000),
            parameters: [
                {
                    user_action: 'action',
                }
            ],
            balance: 1000,
            net_worth: 1000,
            stocks: {
                "stock 1": 0,
                "stock 2": 0,
                "stock 3": 0,
                "stock 4": 0
            }


        }, {
            user_id: generateRandomIntegerInRange(1000, 10000),
            parameters: [
                {
                    user_action: 'action',
                }
            ],
            balance: 1000,
            net_worth: 1000,
            stocks: {
                "stock 1": 0,
                "stock 2": 0,
                "stock 3": 0,
                "stock 4": 0
            }

        },
    ]

    if (time == 0) {
        if (user_id == userid) {
            if (user_action == 'sell') {
                balance: balance + changed_balance
                net_worth: net_worth - changed_stock
            }
            if (user_action == 'buy') {
                balance: balance - changed_balance_balance
                net_worth: net_worth + changed_stock
            }
        }
    }
    room:
    [
        {
            user_id: generateRandomIntegerInRange(1000, 10000),
            parameters: [
                {
                    user_action: 'action',
                }
            ],
            balance: 1000,
            net_worth: 1000,
            stocks: {
                "stock 1": 0,
                "stock 2": 0,
                "stock 3": 0,
                "stock 4": 0
            }

        },
        {
            user_id: generateRandomIntegerInRange(1000, 10000),
            parameters: [
                {
                    user_action: 'action',
                }
            ],
            balance: 1000,
            net_worth: 1000,
            stocks: {
                "stock 1": 0,
                "stock 2": 0,
                "stock 3": 0,
                "stock 4": 0
            }

        }, {
            user_id: generateRandomIntegerInRange(1000, 10000),
            parameters: [
                {
                    user_action: 'action',
                }
            ],
            balance: 1000,
            net_worth: 1000,
            stocks: {
                "stock 1": 0,
                "stock 2": 0,
                "stock 3": 0,
                "stock 4": 0
            }


        }, {
            user_id: generateRandomIntegerInRange(1000, 10000),
            parameters: [
                {
                    user_action: 'action',
                }
            ],
            balance: 1000,
            net_worth: 1000,
            stocks: {
                "stock 1": 0,
                "stock 2": 0,
                "stock 3": 0,
                "stock 4": 0
            }

        },
    ]

    if (time == 0) {
        if (user_id == userid) {
            if (user_action == 'sell') {
                balance: balance + changed_balance
                net_worth: net_worth - changed_stock
            }
            if (user_action == 'buy') {
                balance: balance - changed_balance_balance
                net_worth: net_worth + changed_stock
            }
        }
    }
    room:
    [
        {
            user_id: generateRandomIntegerInRange(1000, 10000),
            parameters: [
                {
                    user_action: 'action',
                }
            ],
            balance: 1000,
            net_worth: 1000,
            stocks: {
                "stock 1": 0,
                "stock 2": 0,
                "stock 3": 0,
                "stock 4": 0
            }

        },
        {
            user_id: generateRandomIntegerInRange(1000, 10000),
            parameters: [
                {
                    user_action: 'action',
                }
            ],
            balance: 1000,
            net_worth: 1000,
            stocks: {
                "stock 1": 0,
                "stock 2": 0,
                "stock 3": 0,
                "stock 4": 0
            }

        }, {
            user_id: generateRandomIntegerInRange(1000, 10000),
            parameters: [
                {
                    user_action: 'action',
                }
            ],
            balance: 1000,
            net_worth: 1000,
            stocks: {
                "stock 1": 0,
                "stock 2": 0,
                "stock 3": 0,
                "stock 4": 0
            }


        }, {
            user_id: generateRandomIntegerInRange(1000, 10000),
            parameters: [
                {
                    user_action: 'action',
                }
            ],
            balance: 1000,
            net_worth: 1000,
            stocks: {
                "stock 1": 0,
                "stock 2": 0,
                "stock 3": 0,
                "stock 4": 0
            }

        },
    ]

    if (time == 0) {
        if (user_id == userid) {
            if (user_action == 'sell') {
                balance: balance + changed_balance
                net_worth: net_worth - changed_stock
            }
            if (user_action == 'buy') {
                balance: balance - changed_balance_balance
                net_worth: net_worth + changed_stock
            }
        }
    }
})



*/

function Game(Room_ID) {
    this.Room_ID = Room_ID
    this.User_Array = []
    this.Company_Name = []
    this.Current_Round_Stocks = []
}
// Game.prototype.add_user = function (){
//     if(this.User_Array.length < 4)
// }

function Whichstock (Company_Name){
    parameters: {companychoice : 'company'
    }
    let which_stock
        for (let i = 0; i<4 ; i++){
            if (companychoice == Company_Name [i]){
                which_stock = i
            }
}
return which_stock
}

Game.prototype.buy_stock = function (externalID, numStocks, Whichstock) {
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
    user.balance = user.balance - this.Current_Round_Stocks[WhichStock] * numStocks
    user.Stock_Value = user.Stock_Value + this.Current_Round_Stocks[WhichStock] * numStocks
}

Game.prototype.sell_stock = function (externalID) {
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
    user.balance = user.balance + this.Current_Round_Stocks[call(Whichstock)] * numStocks
    user.Stock_Value = user.Stock_Value - this.Current_Round_Stocks[call(Whichstock)] * numStocks
}


function User(Balance) {
    this.Balance = Balance
    this.Stock_Value = 0
    this.stocks = [0, 0, 0, 0]
    this.user_id = generateRandomIntegerInRange(1000, 10000)
}

function NetWorth (balance,Stock_Value){
     
    for (let i = 0; i < 4; i++) {
        this.User_Array[i].NetWorth = User.Balance + User.Stock_Value
}
}


function leaderboard (User_Array){

const leaderboardScore = this.User_Array.NetWorth;
leaderboardScore.sort();
console.log(leaderboardScore);

let leaderboardNames = []

for ( let i = 0; i<4; i++){
    for ( let j = 0; i<4; j++){
    if (leaderboardScore[i] == this.User_Array[j].NetWorth ){
        leaderboardNames[i] = this.User_Array[j].user_id
    }
}
} 
}
