import React from "react";

// Northern Hemisphere
// W    W   W   S   S   S   S   S   S     W   W   W
// 0    1   2   3   4   5   6   7   8     9   10  11
// Jan  Feb Mar Apr May Jun Jul Aug Sept  Oct Nov Dec

// Southern Hemisphere
// S    S   S   W   W   W   W   W   W     S   S   S
// 0    1   2   3   4   5   6   7   8     9   10  11
// Jan  Feb Mar Apr May Jun Jul Aug Sept  Oct Nov Dec

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summery";
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  return (
    <div>
      <h1>
        {season === "winter" ? "Burr, it is chilly" : "Lets hit the beach"}
      </h1>
    </div>
  );
};

export { SeasonDisplay as default };
