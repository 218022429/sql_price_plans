import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
    filename:  './data_plan.db',
    driver:  sqlite3.Database
});

export async function get_price_plans () {
    const sql = await db.all (`select * from price_plan`)
    return sql 
}

export async function get_specific_plan (plan_name) {
    const sql = `select * from price_plan where plan_name = ?`
    return db.all(sql, plan_name)
}

export async function adds_price_plan (plan_name, sms_price, call_price) {
    const sql = `insert into price_plan (plan_name, sms_price, call_price) values (?,?,?)`
    await db.run(sql, [plan_name, sms_price, call_price])
}
export async function delete_plan_by_name (plan_name) {
    const sql = `delete from price_plan where plan_name = ?`
    await db.run(sql, plan_name)
}

export async function delete_by_id (id) {
    const sql = `delete from price_plan where id = ?`
    await db.run(sql, id)
}
export async function updateprice_plan_by_plan_name (sms_price, call_price, plan_name) {
    const sql = `update price_plan set sms_price =?, call_price =? where plan_name=?`
    await db.run(sql, [sms_price, call_price, plan_name])
}