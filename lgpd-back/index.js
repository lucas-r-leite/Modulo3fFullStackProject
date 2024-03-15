import express from "express";
import {pkg} from 'body-parser';
import { router } from "./router.js";

const app = express();
const {json, urlencoded} = pkg;

app.use(json());
app.use(urlencoded({extended: true}));

app.listen(3000, function(){
    console.log('Listening from 3000');
});

app.use("/",router);