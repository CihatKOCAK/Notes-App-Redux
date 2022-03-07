import React from 'react'

export default function Colors({setColor}) {
  
  return (
    <div className='colors'>
          <input type="radio" onChange={ () =>setColor("#d63030")} name="color" id="red" value="red" />
          <label htmlFor="red"><span className="red"></span></label>

          <input type="radio"  onChange={() =>setColor("#21ba45")} name="color" id="green" />
          <label htmlFor="green"><span className="green"></span></label>

          <input type="radio" onChange={() =>setColor("#fbbd08")} name="color" id="yellow" />
          <label htmlFor="yellow"><span className="yellow"></span></label>

          <input type="radio" onChange={() =>setColor("#b5cc18")} name="color" id="olive" />
          <label htmlFor="olive"><span className="olive"></span></label>

          <input type="radio" onChange={() =>setColor("#f2711c")} name="color" id="orange" />
          <label htmlFor="orange"><span className="orange"></span></label>

          <input type="radio" name="color" onChange={() =>setColor("#00b5ad")} id="teal" />
          <label htmlFor="teal"><span className="teal"></span></label>

          <input type="radio" name="color"onChange={() =>setColor("#2185d0")} id="blue" />
          <label htmlFor="blue"><span className="blue"></span></label>

          <input type="radio" name="color" onChange={() =>setColor("#6435c9")} id="violet" />
          <label htmlFor="violet"><span className="violet"></span></label>

          <input type="radio" name="color" onChange={() =>setColor("#a333c8")} id="purple" />
          <label htmlFor="purple"><span className="purple"></span></label>

          <input type="radio" name="color" onChange={() =>setColor("#e03997")} id="pink" />
          <label htmlFor="pink"><span className="pink"></span></label>
        </div>
  )
}
