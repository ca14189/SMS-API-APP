import express from 'express';
import cors from 'cors';
import db from './app/models/index.js'; // Ensure correct path and extension

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
};

app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync()
  .then(() => {
    console.log('Connected to db.');
  })
  .catch((err) => {
    console.log('Failed to connect with db: ' + err.message);
  });

// Simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to kaunsa coder application.' });
});

// Import and use routes
import tutorialRoutes from './app/routes/turorial.routes.js';
import countryRoutes from './app/routes/country.routes.js';
import authRoutes from './app/routes/user.routes.js';
import getUserRoleRoutes from './app/routes/userRole.routes.js';

app.use('/api/tutorials', tutorialRoutes);
app.use('/api/countries', countryRoutes);
app.use('/saas/user-login', authRoutes);
app.use('/saas/create-user-role', getUserRoleRoutes);

// Set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


