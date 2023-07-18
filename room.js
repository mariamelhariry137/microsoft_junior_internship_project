function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/room',(req,res)=>{


config.room = 
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

      },{
        user_id: generateRandomIntegerInRange(1000, 10000),
        parameters: [
            {
              user_action: 'action',
            }
          ],
        balance: 1000,
        net_worth: 1000,
        

      },{
        user_id: generateRandomIntegerInRange(1000, 10000),
        parameters: [
            {
              user_action: 'action',
            }
          ],
        balance: 1000,
        net_worth: 1000,

      },
    ]

if (time==0){
    if (user_id == userid){
        if (user_action == 'sell'){
            balance : balance + changed_balance
            net_worth: net_worth - changed_stock
        }
        if (user_action == 'buy'){
            balance : balance - changed_balance_balance
            net_worth: net_worth + changed_stock
        }
    }
}

})
