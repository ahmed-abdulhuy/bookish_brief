import express from 'express';
import bodyParser from 'body-parser';
// import routesHandler from './handlers/handler';
import book_routes from './handler.js';
import cors from "cors"

const app = express();

app.use(
    cors({
        origin: 'http://localhost:3000'
    })
)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// app.use('/', routesHandler);
// routesHandler(app)
book_routes(app)


const PORT = 5000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});