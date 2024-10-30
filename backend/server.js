//this file is the entry point of the server
//it will be broken down into smaller files later on
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbURI =
  'mongodb+srv://gathrBongi:W2GvNl6RwSo6iii8@cluster0.f8soy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 

try {
  mongoose.connect(dbURI, { dbName: 'gathr' });
  console.log('MongoDB connected');
}
catch (error) {
  console.error(error);
}

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('user', UserSchema);

app.post('/api/users', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const newUser = new User({ email, password });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

export default app;