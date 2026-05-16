const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

// middleware
app.use(express.json());

// routes
app.user("/users", userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
