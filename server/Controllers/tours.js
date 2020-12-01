const Tours =require('../models/tours');

module.exports.getTours=(req,res,next)=>{
    Tours.find()
    .then((tour) => {
      if (!tour) {
        res.status(422).json({ message: "no tour exists" });
      } else {
        res.status(200).json({ tours: tour });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports.getByIdTour=(req,res,next)=>{
    const _id = req.params.id;
    Tours.findById(_id)
    .then((tour) => {
      if (!tour) {
        res.status(422).json({ message: "no tour exists" });
      } else {
        res.status(200).json({ tours: tour });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports.AddTours=(req,res,next)=>{
    const { shortDesc, title } = req.body;
    if (!shortDesc || !title) {
      res.status(422).json({ err: "all fields are required to fill" });
    } else {
      Tours.findOne({ title: title })
        .then((pinexists) => {
          if (pinexists) {
            console.log(pinexists);
            return res.status(422).json({ err: "tour title alredy exist" });
          }
          const tour = new Tours({
            ...req.body
          });
          tour
            .save()
            .then((tour) => {
              res.status(200).json({ message: "saved successfully", tour: tour });
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
}
module.exports.EditTours=(req,res,next)=>{
    const _id = req.params.id;
  Tours.findById(_id)
    .then((tour) => {
      if (!tour) {
        res.status(422).json({ err: "tour not exists" });
      } else {
        Tours.findByIdAndUpdate(_id, req.body, {
          new: true,
          runValidators: true,
        })
          .then((result) => {
            res.status(200).json({ result: result });
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
}
module.exports.DeleteTours=(req,res,next)=>{
    const _id = req.params.id;
    Tours.find({ _id: _id })
      .then((tourexists) => {
        if (!tourexists) {
          res.status(422).json({ err: "not exists" });
        } else {
          Tours.findByIdAndDelete(_id)
            .then((result) => {
              res.status(200).json({ message: "successfully deleted" });
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
}