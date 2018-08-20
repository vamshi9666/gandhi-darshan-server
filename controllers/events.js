const Event = require('../models/event');

exports.get_all_events = (req,res,next) => {
  Event.find()
    .exec()
    .then(result=>{
      console.log(result);
      const response = {
        length:result.length,
        data:result
      }
      res.status(200).json(response)
    })
    .catch(err=>{
      console.log(err);
      res.status(303).json(err)
    })
}

exports.get_one_event= (req,res,next) => {
  const id  = req.params.id
  Event.findOne({_id:id})
       .then(result=>{
         console.log(result);
         res.status(200).json(result)
       })
       .catch(err=>{
         console.log(err);
         res.status(303).json(err)
       })
}
exports.add_event = (req,res,next) => {
  const event = new Event({
    name:req.body.name,
    date:req.body.date,
    venue:req.body.venue
  })
  event
    .save()
    .then(result => {
      console.log(result);
      res.status(400).json(result)
    })
    .catch(err=>{
      console.log(err);
      res.status(303).json(err)
    })
}

exports.update_event = (req,res,next) => {
  const id = req.params.id;
  Event.findOneAndUpdate({_id:id},req.body)
       .then(result => {
         console.log(result);
         res.status(200).json(result)
       })
       .catch(err=>{
         console.log(err);
         res.status(303).json(err)
       })
 };

exports.delete_event = (req,res,next) => {
  const id = req.params.id;
  Event.remove({_id:id})
       .then(result=>{
         console.log(result);
         res.status(200).json(result)
       })
       .catch(err=>{
         console.log(err);
         res.status(303).json(err)
       })
}
