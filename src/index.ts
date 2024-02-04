import express from 'express';
import bodyParser from 'body-parser';
import levellineRoutes from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/levelline', levellineRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to LevelLine API');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
