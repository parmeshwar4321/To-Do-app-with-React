const express = require('express')
const router = express.Router()
const knex = require('../db/db')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swaggerDoc/swagger.json');
const swaggerOptions = {
    swaggerOptions: {
        validatorUrl: null
    }
    , customCss: '.swagger-ui .topbar { display: none }'
};
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));
router.use(express.json())


router.get('/hello', (req, res) => {
    res.json({ message: "hello brother !" })
})

router.get('/users', (req, res) => {
    knex.select("*")
        .from('users')
        .then((data) => {
            res.json({ users: data })
        }
        )
        .catch((er) =>
            res.json({ errMessage: er }))

});

router.get('/users/:id', (req, res) => {
    knex.select("*")
        .from('users')
        .where('id', req.params.id)
        .then((data) => {
            res.json({ user: data })
        }
        )
        .catch((er) =>
            res.json({ errMessage: er }))
});

router.post('/post', async (req, res) => {
    console.log(req.query);

    const userdata = await {
        name: req.query.name,
        email: req.query.email,
        password: req.query.password
    }

    knex('users').insert(userdata)
        .then((data) => {
            console.log(data);
            res.send("user  created successfully")
        })
        .catch((er) => {
            console.log(er);
            res.json({ "message": er })
        });
})

router.put('/update/:id', (req, res) => {
    // res.send(req.params.id)
    knex('users').
        where('id', req.params.id)
        .update({
            id: req.params.id,
            name: req.query.name,
            email: req.query.email,
            password: req.query.password
        })
        .then((data) => {
            console.log(data);
            res.send("updated successfully")
        })
        .catch((er) => {
            console.log(er);
            res.json({ "message": er })
        });
})

router.delete('/delete/:id', (req, res) => {
    knex('users')
        .where('id', req.params.id)
        .del()
        .then((data) => {
            console.log(data);
            res.send("deleted successfully")
        })
        .catch((er) => {
            console.log(er);
            res.json({ "message": er })
        });
})
module.exports = router;