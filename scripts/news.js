// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();


let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;
let container = document.getElementById("detailed_news");

import {getdata,append} from "./fetch.js";

getdata(url).then((res) => {
    append(res,container);
})
