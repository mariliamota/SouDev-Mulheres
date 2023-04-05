const express = require('express');
const categoryRoutes = require("./resources/category/routes");
const bannerRoutes = require("./resources/banner/routes");
const userRoutes = require("./resources/user/routes");
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());
app.use(categoryRoutes);
app.use(bannerRoutes);
app.use(userRoutes);

app.listen(8000, () => {
    console.log('ok');
});