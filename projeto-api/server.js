const express = require('express');
const categoryRoutes = require("./resources/category/routes");
const bannerRoutes = require("./resources/banner/routes");
const userRoutes = require("./resources/user/routes");
const cors = require('cors');
const swagger = require('swagger-ui-express');
const docs = require('./docs.json')

const app = express();
app.use(cors());
//criando rota da documentação
app.use('/docs', swagger.serve, swagger.setup(docs));

app.use(express.json());
app.use(categoryRoutes);
app.use(bannerRoutes);
app.use(userRoutes);

app.listen(8000, () => {
    console.log('ok');
});