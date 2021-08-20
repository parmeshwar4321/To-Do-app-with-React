const knex = require('knex')({

    client:'mysql',
    connection: {
        host:'localhost',
        user:'root',
        password:'Anand@18',
        database:'demo'
    }
})  
knex.schema.createTable('users',(table)=>{
table.increments("id").primary()
table.string('name')
table.string('email')
table.string('password')

})
.then((data)=>{
    console.log(`tables Created`);
})
.catch((er)=>{
    console.log(`tables already exists !`);
})
module.exports=knex;
