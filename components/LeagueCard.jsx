import React from "react";

function LeagueCard({ image, title }) {
  return (
    <div className="cursor-pointer hover:opacity-[0.8] transition-all ease-in transition-duration: 200ms">
      <img src={image} />
      <p className="font-bold capitalize mt-3 text-sm">{title}</p>
    </div>
  );
}

export default LeagueCard;
