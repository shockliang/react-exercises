import React from "react";

// Northern Hemisphere
// W    W   W   S   S   S   S   S   S     W   W   W
// 0    1   2   3   4   5   6   7   8     9   10  11
// Jan  Feb Mar Apr May Jun Jul Aug Sept  Oct Nov Dec

// Southern Hemisphere
// S    S   S   W   W   W   W   W   W     S   S   S
// 0    1   2   3   4   5   6   7   8     9   10  11
// Jan  Feb Mar Apr May Jun Jul Aug Sept  Oct Nov Dec

const seasonConifg = {
  summer: {
    text: "Lets's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Burr it is cold!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summery";
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConifg[season];
  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export { SeasonDisplay as default };
