import { getWeather } from "./getWeather";

const img = document.querySelector("img");
const loader = document.querySelector('.loader');


export async function fetchimg(q = "weather") {
  try {
    const inp = document.querySelector("input").value;
    console.log(inp.length);
    loader.style.display = 'block';
    if (inp.length > 0) {
      q = await getWeather(inp);
    } else {
      q = await getWeather();
    }

    console.log(q);
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=SByTIjRrrZOyB9QBQrE7YXmaSw8eCN1C&s=${q}`,
      { mode: "cors" }
    );

    const giphydata = await response.json();
    
    img.src = giphydata.data.images.original.url;
    setTimeout(() => loader.style.display = 'none', 500);

  } catch (error) {

    console.log(error);
    document.querySelector("#err-msg").innerHTML = "No giphy found";
    
  }
}
