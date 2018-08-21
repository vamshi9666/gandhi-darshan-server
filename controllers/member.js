const Member = require('../models/member')

exports.member_add = (req,res,next) => {
  const member = new Member({
    name:req.body.name,
    age:req.body.age,
    mobile:req.body.mobile,
    email:req.body.email
  })
  member
    .save()
    // .exec()
    .then(result => {
        res.status(200).json({
          message:"Added member successfully !",
          data:result
        })
    })
    .catch(err=>{
      console.log(err);
      res.status(303).json(err)
    })
}

exports.member_remove = (req,res,next) => {
  const id = req.params.id;
  Member
    .remove({_id:id})
    .then(result=>{
      console.log(result);
      res.status(200).json(result)
    })
    .catch(err=>{
      console.log(err);
      res.status(303).json(err)
    })
}

exports.member_update = (req,res,next) => {
  const id = req.params.id;
  Member.findOneAndUpdate({_id:id},req.body)
        .then(result => {
          console.log(result);
          res.status(200).json({
            message:'update action successfull',
            data:result
          })
        })
        .catch(err=>{
          console.log(err);
          res.status(303).json(err)
        })
}

exports.member_get_one  = (req,res,next) => {
  const id = req.params.id;
  Member.findOne({_id: id})
        .then(result => {
          console.log(result);
          res.status(200).json(result)
        })
        .catch(err=>{
          console.log(err);
          res.status(303).json(err)
        })
}
exports.member_get_all = (req,res,next) => {
  Member
    .find({ })
    .exec()
    .then(result=> {
      console.log(result);
      const response = {
        count:result.length,
        data:result
      }
      res.status(200).json(response)
    })
    .catch(err=>{
      console.log(err);
      res.status(303),json(err)
    })
}
