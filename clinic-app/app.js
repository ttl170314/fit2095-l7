const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const clinicRoutes = require('./routes/clinicRoutes');


const app = express();

// Bodyparser middleware
app.use(bodyParser.json());
app.use('/', clinicRoutes);

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));



// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/clinicDb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
