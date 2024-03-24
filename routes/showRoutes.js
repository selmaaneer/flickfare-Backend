const express = require('express')
const Show =require('../models/show')
const router = express.Router()

router.get('/', async(req, res, next) => {
    try{
      const shows = await Show.find({});
      res.status(200).json(shows)
  
  
    }
    catch(error){
      res.status(500).send('Error occured')
  
    }
  })

  router.get('/:showId', async(req, res, next) => {
    try{
      const shows = await Show.findById(req.params.showId).populate('screen');
      res.status(200).json(shows)
  
  
    }
    catch(error){
      res.status(500).send('Error occured')
  
    }
  })

    
 router.post('/', async(req, res, next) => {
    try{
     const show = new Show(req.body);
     await show.save()
     res.status(201).json(show)
  
    }
    catch(error){
      res.status(500).send('Error occured')
  
    }
  })
module.exports = router