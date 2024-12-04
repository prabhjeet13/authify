const express = require('express');
const router = express.Router();
const {add, deleteUser,edit} = require('../Controllers/User');

const { auth, isAdmin} = require('../Middlewares/Authn');

router.post('/add',auth,isAdmin,add);
router.post('/edit',auth,isAdmin,edit);
router.post('/delete',auth,isAdmin,deleteUser);



module.exports = router;