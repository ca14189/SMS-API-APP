import express from 'express';
import cors from 'cors';
import db from './app/models/index.js';
import tutorialRoutes from './app/routes/turorial.routes.js';
import countryRoutes from './app/routes/country.routes.js';
import authRoutes from './app/routes/user.routes.js';
import getUserRoleRoutes from './app/routes/userRole.routes.js';
import saas_cust_routes from './app/routes/saas_cust_route.js'
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



app.use('/api/tutorials', tutorialRoutes);
app.use('/api/countries', countryRoutes);
app.use('/saas/user-login', authRoutes);
app.use('/saas/create-user-role', getUserRoleRoutes);


//for saas_cust routers
app.use('/saas', saas_cust_routes)


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ errorMessage: message });
};
app.use(errorHandler);