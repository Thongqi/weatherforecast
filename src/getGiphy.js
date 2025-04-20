import { getWeather } from "./getWeather";

const img = document.querySelector("img");
export async function fetchimg(q = "weather") {
  try {
    const inp = document.querySelector("input").value;
    if (inp.length > 0) {
      q = inp;
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
  } catch (error) {
    console.log(error);
    document.querySelector("#err-msg").innerHTML = "No giphy found";
  }
}
