import express from 'express';

import propertyRoutes from './routes/propertyRoutes';
import inquiryRoutes from './routes/inquiryRoutes';

import { setDefaultConnection } from './utils/mongoDB';

// Create a new express application instance
const app: express.Application = express();
const cors = require('cors');

setDefaultConnection('db1');

// The port the express app will listen on
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 4000;

app.use(cors())

// Mount the routers
app.use(express.json()); // for parsing application/json
app.use(propertyRoutes);
app.use(inquiryRoutes);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start listening on the specified port
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
