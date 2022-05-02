let getdata = async (url) => {
    let res = await fetch (url);
    let data = await res.json();

    return data;
}

let append = (data,container) =>{
  data.forEach(({image}) => {
    let Image = document.createElement("img")
    Image.src = image;

    container.append(Image);
  })
}
export{getdata,append};