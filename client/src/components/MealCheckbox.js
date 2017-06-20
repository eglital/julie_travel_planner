import React from "react";

const MealCheckbox = ({onChange, checked}) => {
  return (
    <div>
      <label> Include Meals?
        <input type="checkbox" name="meals" onChange={onChange} checked={checked}/> 
      </label>
    </div>
  );
};

export default MealCheckbox;
