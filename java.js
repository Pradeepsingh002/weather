let form = document.querySelector("form");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let sp1 = document.querySelector("#sp1");
let sp2 = document.querySelector("#sp2");
let img = document.querySelector("img");
let h3 = document.querySelector("h3");

const get_weather = async (e) => {
  e.preventDefault();
  if (input.value === "") {
    window.alert("Please enter city !");
  } else {
    try {
      let response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=53bfe13598b6452c981131953241006&q=${input.value}&aqi=yes`
      );
      let data = await response.json();
      sp1.innerText = data.current.temp_c;
      sp2.innerText = data.current.condition.text;
      img.setAttribute("src", data.current.condition.icon);
      h3.innerText = data.location.name;
      console.log(data);
      form.reset();
    } catch (error) {
      window.alert("Something went wrong!");
    }
  }
};

btn.addEventListener("click", get_weather);


