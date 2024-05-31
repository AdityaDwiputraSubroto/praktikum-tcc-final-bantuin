import express from 'express';
import cors from 'cors';
import SupplierRoute from './routes/SupplierRoute.js';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(SupplierRoute);

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});