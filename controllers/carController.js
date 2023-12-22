const Car = require("../models/carModel");
    //POST
    //http://localhost:5000/api/car/
    const createCar = ((req, res) => {
        Car.create(req.body)
            .then(result => res.status(200).json({ result }))
            .catch((error) => res.status(500).json({msg:  error }))
    });
    //GET
    //http://localhost:5000/api/car/
    const getCars = ((req, res) => {
        Car.find({})
            .then(result => res.status(200).json({ result }))
            .catch(error => res.status(500).json({msg: error}))
    });

    //GET
    //http://localhost:5000/api/car/CarID
    const getCar = ((req, res) => {
        Car.findOne({ _id: req.params.CarID })
            .then(result => res.status(200).json({ result }))
            .catch(() => res.status(404).json({msg: 'Car not found'}))
    });

    //PUT
    //http://localhost:5000/api/car/CarID
    const updateCar = ((req, res) => {
        Car.findOneAndUpdate({ _id: req.params.CarID }, req.body, { new: true, runValidators: true })
            .then(result => res.status(200).json({ result }))
            .catch((error) => res.status(404).json({msg: 'Car not found' }))
    })

    //DELETE
    //http://localhost:5000/api/car/CarID

    const deleteCar = ((req, res) => {
        Car.findOneAndDelete({ _id: req.params.CarID })
            .then(result => res.status(200).json({ result }))
            .catch((error) => res.status(404).json({msg: 'Car not found' }))
    })
    
  module.exports = { createCar ,getCars , getCar , deleteCar, updateCar };
 
