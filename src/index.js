import { fetchimg } from "./getGiphy";
import "./style.css";

fetchimg();
const searchBtn = document.querySelector('#search');
searchBtn.addEventListener('click', fetchimg);
