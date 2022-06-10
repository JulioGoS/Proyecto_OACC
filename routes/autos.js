const express = require('express');
const async = require('hbs/lib/async');
const router = express.Router();
const Autos = require('../modelos/autos');
const Auto = require('../modelos/autos');

/* GET users listing. 
router.get('/autos', (req, res, )=> {
  res.send('respond with a resource');
});
 
 
 */
router.get('/add',(req,res)=>{
  
  res.render('autos/newauto');
});

router.post('/newauto',async(req,res )=>{
  const aut = Auto({
   
    marca: req.body.marca,
    modelo: req.body.modelo,
    transmision: req.body.transmision,
    color: req.body.color,
    precio: req.body.precio,
    
});
    await aut.save();
    res.redirect('/autos');
  });

  router.get('/',async(req,res)=>{
  const autos = await Auto.find();
  res.render('autos/all-autos', {autos});
  });

  router.get('/editar/:id',async(req,res)=>{
    const aut= await Auto.findById(req.params.id);
      res.render('autos/editar-auto' , {aut});
  });

  router.post('/nota-editada/:id',async(req,res)=>{
    const aut = Auto({
   
      marca: req.body.marca,
      modelo: req.body.modelo,
      transmision: req.body.transmision,
      color: req.body.color,
      precio: req.body.precio
      
  });
 await Auto.findByIdAndUpdate(req.params.id,{marca: aut.marca , modelo: aut.modelo, transmision: aut.transmision, color: aut.color, precio: aut.precio});
 res.redirect('/autos');
  });

  router.delete('/eliminar/:id',async(req,res)=>{
     await Auto.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    res.redirect('/autos');

  });
module.exports = router;
