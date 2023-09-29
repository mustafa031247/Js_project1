import React from 'react';
import '../Components/asf.css';

const Clickons = () => {
  function multiple_buttons() {
    let abc = document.createElement('button');
    abc.textContent = "New Button";
    abc.className = 'new_buttons_design';
    abc.onclick = function () {
      const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randoms_color = `rgb(${r},${g},${b})`;
    let backgr_changeer = document.getElementById('background_changer')
      backgr_changeer.style.backgroundColor = randoms_color;
      const r_1 = Math.floor(Math.random() * 150);
      const g_1 = Math.floor(Math.random() * 150);
      const b_1 = Math.floor(Math.random() * 150);
      const randoms_color1 = `rgb(${r_1},${g_1},${b_1})`;
      backgr_changeer.style.color = randoms_color1;
    };
    let buttonContainer = document.getElementById('button-container');
    buttonContainer.appendChild(abc); 
  } 
  function Bulb_OnClick() {
    let qwe = document.getElementById('my_image');
    qwe.src = 'https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg';
    
  }
  function Blub_OffClick() {
    let we = document.getElementById('my_image');
    we.src = 'https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg';
  }


  return (
    <div>
      <h1 className='heading_1'>Turning On & Off the Light</h1>
      <div class="container">
        <div class="image-container">
          <img id="my_image" src="https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg" alt="awe" />
        </div>
        <div class="buttons-container">
          <button className='buttons_m' onClick={() => { Bulb_OnClick(); alert('The Blulb is On !!!'); }}>Turn On The Bulb</button><br/>
          <button className='buttons_m' onClick={() => { Blub_OffClick(); alert('The Blulb is Off !!!'); }}>Turn Off The Bulb</button>
        </div>
        </div>

      <button className='adding_buttons' onClick={() => { alert('Adding new Button'); multiple_buttons(); document.body.style.backgroundColor = 'red' }}>More Buttons</button>
      <div id="button-container" onDoubleClick={() => { alert('Dobule Clicked!!'); document.body.style.backgroundColor = 'white'}}></div>
      <div id="background_changer"><h1>Hello Everyone!!!</h1></div>
    </div>
  );
}
  export default Clickons;
