import { useState } from "react";
export default function TemperatureIndicator() {
  const [temp, setTemp] = useState(18);
  return (
    <div className="wrapper">
      <p class={getTempColor(temp)}>{temp}&#176; C</p>
      <div class="btn-wrapper">
        <button
          onClick={() => {
            setTemp((prev) => prev + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setTemp((prev) => prev - 1);
          }}
        >
          -
        </button>
      </div>
      <span>{getInfo(temp)}</span>
    </div>
  );
}

function getTempColor(temp) {
  if (temp < -20) return "very-cold";
  else if (temp < 0) return "cold";
  else if (temp < 20) return "warm";
  else if (temp < 30) return "hot";
  else return "very-hot";
}

function getInfo(temp) {
  if (temp >= 30) return "Компонент сгорел";
}
