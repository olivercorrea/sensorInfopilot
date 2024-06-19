const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/microcontroller', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Create a schema for the counter data
const CounterSchema = new mongoose.Schema({
  contadorAcertado: Number,
  timestamp: { type: Date, default: Date.now }
});

// Create a model
const Counter = mongoose.model('Counter', CounterSchema);

// Create an Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// * Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.json());
app.use(cors());

// API endpoint to save the counter data
app.post('/save-counter', async (req, res) => {
  const { contadorAcertado } = req.body;

  const limaTimezone = 'America/Lima';
  const currentTimestamp = new Date().toLocaleString('en-US', { timeZone: limaTimezone });

  // const currentTimestamp = new Date();

  // Create a new counter document
  const newCounter = new Counter({ contadorAcertado, timestamp: new Date(currentTimestamp) });

  try {
    // Save the counter data to MongoDB
    await newCounter.save();
    res.status(200).json({ message: 'Counter data saved successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// * API endpoint para obtener los datos del contador
app.get('/api/counters', async (req, res) => {
  try {
    const counters = await Counter.find();
    res.json(counters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
