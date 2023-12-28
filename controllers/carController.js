const Car = require("../models/carModel");
    //POST
    //http://localhost:5000/api/car/
    
    const createCar = async (req, res) => {
        try {
          const result = await Car.create(req.body);
          res.status(200).json({ result });
        } catch (error) {
          console.error(error);
          res.status(500).json({ msg: 'Internal Server Error' });
        }
      };
      
    //GET
    //http://localhost:5000/api/car/
    const getCars = async (req, res) => {
      try {
        const cars = await Car.find({});
        res.status(200).json(cars);
      } catch (error) {
        console.error('Error fetching cars:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };
    //GET
    //http://localhost:5000/api/car/CarID
    const getCar = async (req, res) => {
      try {
        const car = await Car.findOne({ _id: req.params.id });
        if (!car) {
          return res.status(404).json({ msg: 'Car not found' });
        }
        res.status(200).json(car);
      } catch (error) {
        console.error('Error fetching car:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };

    //PUT
    //http://localhost:5000/api/car/CarID
    const updateCar = async (req, res) => {
      try {
        const car = await Car.findOneAndUpdate(
          { _id: req.params.id },
          req.body,
          { new: true, runValidators: true }
        );
        if (!car) {
          return res.status(404).json({ msg: 'Car not found' });
        }
        res.status(200).json(car);
      } catch (error) {
        console.error('Error updating car:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };

    //DELETE
    //http://localhost:5000/api/car/CarID

    const deleteCar = async (req, res) => {
      try {
        const car = await Car.findOneAndDelete({ _id: req.params.id });
        if (!car) {
          return res.status(404).json({ msg: 'Car not found' });
        }
        res.status(200).json(car);
      } catch (error) {
        console.error('Error deleting car:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };
    
  module.exports = { createCar ,getCars , getCar , deleteCar, updateCar };
 
