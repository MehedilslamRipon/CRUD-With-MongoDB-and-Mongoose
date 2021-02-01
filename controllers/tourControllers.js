const Tour = require("./../model/tourModel");

/* const tours = JSON.parse(
   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
); */

// tours handlers
// get all tours data
exports.getAllTours = async (req, res) => {
   try {
      const allTourData = await Tour.find();

      res.status(200).json({
         status: "success",
         data: {
            allTourData,
         },
      });
   } catch (err) {
      res.status(404).json({
         status: "failed",
         message: err,
      });
   }
};

// get single tour data
exports.getSingleTourData = async (req, res) => {
   try {
      const singleTourData = await Tour.findById(req.params.id);

      res.status(200).json({
         status: "success",
         data: {
            singleTourData,
         },
      });
   } catch (err) {
      res.status(404).json({
         status: "failed",
         message: "Data not found",
      });
   }
};

// write data
exports.writeData = async (req, res) => {
   try {
      const newTour = await Tour.create(req.body);

      res.status(201).json({
         status: "success",
         data: {
            newTour,
         },
      });
   } catch (err) {
      res.status(400).json({
         status: "failed",
         message: "Invalid data set !!!",
      });
   }
};

// update data
exports.updateData = async (req, res) => {
   try {
      const updatedData = await Tour.findByIdAndUpdate(
         req.params.id,
         req.body,
         {
            runValidators: true,
            new: true,
         }
      );

      res.status(200).json({
         status: "success",
         data: {
            updatedData,
         },
      });
   } catch (err) {
      res.status(404).json({
         status: "failed",
         message: "Invalid ID or this data doesn't exist",
      });
   }
};

// delete data
exports.deleteData = async (req, res) => {
   try {
      const deletedData = await Tour.findByIdAndDelete(req.params.id);

      res.status(204).json({
         status: "success",
         data: null,
      });
   } catch (err) {
      res.status(404).json({
         status: "failed",
         message: err,
      });
   }
};
