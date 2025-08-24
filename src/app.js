const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

/* Routes */
const authRoutes = require('./routes/auth.routes');
const chatRoutes = require("./routes/chat.routes");

const app = express();

/* using middlewares */
app.use(cors({
    origin:[ 'http://localhost:5173',"https://frolicking-dodol-47fdcb.netlify.app"]  // for dev
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

/* Using Routes */
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

// No need to serve index.html since frontend is on Netlify

app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

module.exports = app;
