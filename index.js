import express from 'express';
import { createServer } from '@vue-storefront/middleware';
import '@vue-storefront/magento-api';
import '@vue-storefront/magento-api/server';
import config from './middleware.config.js';
// const app = express();
const app = await createServer({ integrations: config.integrations });

import product from './api/product.js';
// const product = require("./api/product");

app.use(express.json({ extended: false }));

app.use("/api/product", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
