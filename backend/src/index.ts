// src/index.ts
import express from 'express';
import mainRouter from './routers/mainRouter';

const app = express();
const port = process.env.PORT || 3000;

// Use the main router for handling routes
app.use('/', mainRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
