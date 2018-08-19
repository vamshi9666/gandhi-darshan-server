const Event = require('../models/event');

exports.get_all_events = (req,res,next) => {
  Event.find()
    .exec()
    .then(result=>{
      console.log(result);
      return result
    })
}
