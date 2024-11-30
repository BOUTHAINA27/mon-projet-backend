const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const homeRouter = require('./routes/home');
const signinRouter = require('./routes/signin');
const signupRouter = require('./routes/signup');
const aboutUsRouter = require('./routes/aboutus');
const latestNewsRouter = require('./routes/latestnews');
const contactUsRouter = require('./routes/contactus');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.use('/home', homeRouter);
app.use('/signin', signinRouter);
app.use('/signup', signupRouter);
app.use('/aboutus', aboutUsRouter);
app.use('/latestnews', latestNewsRouter);
app.use('/contactus', contactUsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
