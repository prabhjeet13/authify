const express = require('express');
const router = express.Router();
const {add, deleteUser,edit,getAllusers,getUserById} = require('../Controllers/User');

const { auth, isAdmin} = require('../Middlewares/Authn');

router.post('/add',auth,isAdmin,add);
router.post('/edit',auth,isAdmin,edit);
router.post('/delete',auth,isAdmin,deleteUser);
router.post('/getUser',auth,isAdmin,getUserById);
router.get('/getallusers',auth,isAdmin,getAllusers);



module.exports = router;