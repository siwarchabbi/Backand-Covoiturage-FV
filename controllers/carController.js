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
  const  getCarById= async (req, res) => {
      const carId = req.params.id;
  
      try {
        const car = await Car.findById(carId);
        if (!car) {
          return res.status(404).json({ error: 'Car not found' });
        }
        res.json(car);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };

    //PUT
    //http://localhost:5000/api/car/CarID
    const updateCar = async (req, res) => {

        const carId = req.params.id;
        const updatedCarData = req.body;
    
        try {
          const updatedCar = await Car.findByIdAndUpdate(carId, updatedCarData, { new: true });
          if (!updatedCar) {
            return res.status(404).json({ error: 'Car not found' });
          }
          res.json(updatedCar);
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };

    //DELETE
    //http://localhost:5000/api/car/CarID

    const deleteCar = async (req, res) => {
      const carId = req.params.id;
  
      try {
        const deletedCar = await Car.findByIdAndDelete(carId);
        if (!deletedCar) {
          return res.status(404).json({ error: 'Car not found' });
        }
        res.json({ message: 'Car deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };
  module.exports = { createCar ,getCars , getCarById , deleteCar, updateCar };
 
