const express = require('express');
const categoryRoutes = require("./resources/category/routes");
const bannerRoutes = require("./resources/banner/routes");
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());
app.use(categoryRoutes);
app.use(bannerRoutes);

app.listen(8000, () => {
    console.log('ok');
});