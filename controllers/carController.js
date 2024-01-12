const Car = require("../models/carModel");
const asyncHandler = require("express-async-handler");
    //POST
    //http://localhost:5000/api/car/
    const createCar = asyncHandler(async (req, res) => {
    
      try {
        const { user, destinationLocation, departureDateTime, departureLocation, seatPrice , seatAvailable , model , matricule, status} = req.body;
        const image = req.file ? req.file.filename : null;

    
        console.log('Creating car with data:', req.body);
    
        const result = await Car.create({ 
          user, 
          destinationLocation, 
          departureDateTime, 
          departureLocation, 
          seatPrice, 
          seatAvailable,
          model,
          matricule, 
          status, 
          image});
    
        console.log('Car created successfully:', result);
    
        res.status(200).json({ result });
      } catch (error) {
        console.error('Error creating car:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
      }
    });
        
      
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
  
    const updateCar = asyncHandler(async (req, res) => {
      try {
        const carId = req.params.id;
        const { departureDateTime, departureLocation, destinationLocation, seatPrice, seatAvailable, model, matricule, status, user } = req.body;
        const image = req.file ? req.file.filename : null;
    
        console.log('Updating car with data:', req.body);
    
        // Check if the car exists
        const existingCar = await Car.findById(carId);
        if (!existingCar) {
          return res.status(404).json({ msg: 'Car not found' });
        }
    
        // Update the car data
        existingCar.departureDateTime = departureDateTime;
        existingCar.departureLocation = departureLocation;
        existingCar.destinationLocation = destinationLocation;
        existingCar.seatPrice = seatPrice;
        existingCar.seatAvailable = seatAvailable;
        existingCar.model = model;
        existingCar.matricule = matricule;
        existingCar.status = status;
        existingCar.image = image || existingCar.image;
        existingCar.user = user; // Set the user field
    
        const updatedCar = await existingCar.save();
    
        console.log('Car updated successfully:', updatedCar);
    
        res.status(200).json({ updatedCar });
      } catch (error) {
        console.error('Error updating car:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
      }
    });
    
    
    
    
     

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
    }
  

    
  module.exports = { createCar ,getCars , getCarById , deleteCar, updateCar };
 
