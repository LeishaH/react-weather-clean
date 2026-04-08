import React from "react";

export default function FormattedDate(props) {
  const date = new Date((props.timestamp + props.timezone) * 1000);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = days[date.getUTCDay()];
  let hours = date.getUTCHours();
  let minutes = date.getUTCMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <span>
      {day} {hours}:{minutes}
    </span>
  );
}
