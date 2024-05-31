import express from 'express';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});