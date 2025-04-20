import { format } from "date-fns";

const WEATHERAPIKEY = "LQ65VR2DXK3HW3WHAJTRRWQ4L";

export async function getWeather(
  location = "Malaysia",
  date = format(new Date(), "yyyy-MM-dd")
) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}?key=${WEATHERAPIKEY}`
  );
  const weatherData = await response.json();
  return weatherData.currentConditions.conditions;
}
