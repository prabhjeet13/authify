const User =   require('../Models/User');
exports.add = async(req,res) => {
    try {
       const {
            firstname,
            lastname,
            age,
            phoneNo,
            email,
            role,
            salary,
        } = req.body;
        if(!firstname || !lastname || !email || !age || !salary || !role || !phoneNo)
        {   
            return res.status(404).json({
                success : false,
                message : 'enter your details',
             }); 
        }
    
        // check user is registered ?
        const exitUser = await User.findOne({email : email});
    
        if(exitUser)
        {
            return res.status(401).json({
                success : false,
                message : 'User is already registered',
             }); 
        }
    
        //verify password and confirm password
        if(password !== confirmPassword)
        {
            return res.status(400).json({
                success : false,
                message : 'password and confirm-password does not match',
             }); 
        }
    
        // create the user
        const userdetails = await User.create({
            firstname,
            lastname,
            age,
            phoneNo,
            email,
            role,
            salary,
        });
    
        return res.status(200).json({
            success : true,
            message : 'registration successfull',
            userdetails,
        });
      }catch(error)
      {
        return res.status(500).json({
            success: false,
            message : 'error at registration side'
    
        })
      }
}

exports.edit = async(req,res) => {
    try {
        const {
             firstname,
             lastname,
             age,
             phoneNo,
             email,
             role,
             salary,
             userId,
         } = req.body;

    
         if(!firstname || !lastname || !email || !age || !salary || !role || !phoneNo || !userId)
         {   
             return res.status(404).json({
                 success : false,
                 message : 'enter your details',
              }); 
         }
    
         // edit the user
         const updatedUser = await User.findByIdAndUpdate(
            {_id:userId},
            {
                firstname : firstname,
                lastname : lastname,
                age : age,
                phoneNo : phoneNo,
                email : email,
                role : role,
                salary : salary,
            },
            {new:true}
            )
     
         return res.status(200).json({
             success : true,
             message : 'edit successfull',
             updatedUser,
         });
       }catch(error)
       {
         return res.status(500).json({
             success: false,
             message : 'error at editing side'
     
         })
       }
}

exports.deleteUser = async(req,res) => {
    try {
        const { userId } = req.body;
         if(!!userId)
         {   
             return res.status(404).json({
                 success : false,
                 message : 'enter your details',
              }); 
         }
    
         // edit the user
         const deletedUser = await User.findByIdAndDelete(
            {_id:userId});     
         return res.status(200).json({
             success : true,
             message : 'edit successfull',
             deletedUserUser,
         });
       }catch(error)
       {
         return res.status(500).json({
             success: false,
             message : 'error at editing side'
     
         })
       }
} 