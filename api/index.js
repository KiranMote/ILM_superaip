import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  city: String,
  role: String,
  program: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// API Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    // Try MongoDB connection if not already connected
    const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ilm_academy';
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGO_URI).catch(e => console.error("Mongo Connect Error:", e));
    }

    const { name, email, phone, city, role, program, message } = req.body;
    
    // Attempt Mongoose Save if connected
    if (mongoose.connection.readyState === 1) {
      const newContact = new Contact({ name, email, phone, city, role, program, message });
      await newContact.save();
    } else {
      // Fallback: save to temporary /tmp file on Vercel
      const data = { name, email, phone, city, role, program, message, date: new Date() };
      fs.appendFileSync('/tmp/contacts_fallback.json', JSON.stringify(data) + '\n');
    }

    res.status(201).json({ success: true, message: 'Message received successfully' });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

export default app;
