import React from "react";

const BabyName = ({ babyName, handleClick, }) => {
  return (
    <div onClick={handleClick} id={babyName} className="namebox">
      {babyName ? babyName + " Corbeil" : null}
    </div>
  );
};
export default BabyName;
