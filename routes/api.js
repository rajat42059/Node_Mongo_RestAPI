const express = require("express");
const Ninja = require('../models/ninja');
const router =express.Router();



// router.get('/ninjas',(req,res,next)=>{
// // Ninja.find().then((ninjas)=>{
// //     maxDistance: 100000, spherical: truemaxDistance: 100000, spherical: true

// // })

// Ninja.aggregate().near({ near: [parseFloat(req.query.lng), parseFloat(req.query.lat)], maxDistance: 100000, spherical: true, distanceField: "dist.calculated" }).then((ninjas)=>{
//     res.send(ninja);
// });

// });

router.get('/ninjas', function(req, res, next){ //
    Ninja.find({}).then(function(ninjas){ // 
        res.send(ninjas); // 
    }); Ninja.aggregate().near(
        { near: { 'type': 'Point', 'coordinates':
         [parseFloat(req.query.lng), parseFloat(req.query.lat)] },
          maxDistance: 10000, spherical: true, distanceField: "dis" } )
          .then(function(ninjas){ res.send(ninjas); }); });


//Add ninja
router.post('/ninjas',(req,res,next)=>{
Ninja.create(req.body).then(function(ninja){
res.send(ninja);
}).catch(next)


});

//Remove ninja
router.delete('/ninjas/:id',(req,res,next)=>{
var id=req.params.id;
Ninja.remove({_id:id}).then((ninja)=>{
res.send(ninja);
})

});

//Update ninja
router.put('/ninjas/:id',(req,res,next)=>{
var id=req.params.id;
Ninja.findByIdAndUpdate({_id:id},req.body).then((ninja)=>{

Ninja.findOne({_id:id}).then((ninja)=>{
res.send(ninja);
})
})

});

module.exports=router;
