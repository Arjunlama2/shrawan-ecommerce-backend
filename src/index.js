
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
dotenv.config({ quiet: true });

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("DB connected");
    app.listen(process.env.PORT, () => {
        console.log(`App is running on port ${process.env.PORT}`);
    })


}).catch((err) => {
    console.log(err);
});
