import express from 'express';
import { get_price_plans, get_specific_plan, adds_price_plan,delete_plan_by_name, delete_by_id, updateprice_plan_by_plan_name } from './db.js';
import totalPhoneBill from './total-phone-bill.js'

const app = express();
app.use(express.static('public'))
app.use(express.json())

app.post('/api/phonebill/', function(req, res){
//    const price_plan = req.body.price_plan
   const actions = req.body.actions
   //const total = totalPhoneBill(actions)
    res.json({
        status: "success",
        total
    })
})



const results = await get_price_plans()
//await adds_price_plan('sms', 0.20, 1)
//await delete_plan_by_name('sms')
// await delete_by_id (4)
//await updateprice_plan_by_plan_name (0.75, 2.5, 'call 101')
console.log (results) 

const results2 = await get_specific_plan("call 201")
console.log (results2)


console.log('Brenda')
const PORT = process.env.PORT || 4011;
app.listen(PORT, () => `Server started ${PORT}`)
