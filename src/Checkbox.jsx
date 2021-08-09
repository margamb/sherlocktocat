import React from 'react';
import './Checkbox.css';

function switchTheme(mode) {
  document.body.setAttribute("data-color-mode", mode)
}

function Checkbox() {
  function handleChange(e) {
    console.log(e.target.checked)
    if (e.target.checked) {
      console.log("tema oscuro")
      switchTheme("dark")
    } else {
      switchTheme("")
    }
  }
  
  return (
    <div>
      <input type="checkbox" className="circle-check" id="" onChange={handleChange} />
      <label htmlFor="" className=""></label>
    </div>
  );
}

export default Checkbox;