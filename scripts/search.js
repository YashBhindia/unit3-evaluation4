// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();


let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;
let container = document.getElementById("results");

import {getdata,append} from "./fetch.js";

getdata(url).then((res) => {
    append(res,container);
})
