// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
import sidebar from "../components/sidebar.js";


document.getElementById("navbar").innerHTML=navbar();
document.getElementById("sidebar").innerHTML=sidebar();


let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country`;
let container = document.getElementById("results");

import {getdata,append} from "./fetch.js";

getdata(url).then((res) => {
    append(res,container);
})


// let getdata =async (India) => {
//     try{
//         let res =await fetch (`https://masai-mock-api.herokuapp.com/news/top-headlines?country`);
//         let data = res.json();
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }
// getdata();