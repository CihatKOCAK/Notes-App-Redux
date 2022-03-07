import React from 'react'

export default function Colors() {
  return (
    <div className='colors'>
          <input type="radio" name="color" id="red" value="red" />
          <label htmlFor="red"><span className="red"></span></label>

          <input type="radio" name="color" id="green" />
          <label htmlFor="green"><span className="green"></span></label>

          <input type="radio" name="color" id="yellow" />
          <label htmlFor="yellow"><span className="yellow"></span></label>

          <input type="radio" name="color" id="olive" />
          <label htmlFor="olive"><span className="olive"></span></label>

          <input type="radio" name="color" id="orange" />
          <label htmlFor="orange"><span className="orange"></span></label>

          <input type="radio" name="color" id="teal" />
          <label htmlFor="teal"><span className="teal"></span></label>

          <input type="radio" name="color" id="blue" />
          <label htmlFor="blue"><span className="blue"></span></label>

          <input type="radio" name="color" id="violet" />
          <label htmlFor="violet"><span className="violet"></span></label>

          <input type="radio" name="color" id="purple" />
          <label htmlFor="purple"><span className="purple"></span></label>

          <input type="radio" name="color" id="pink" />
          <label htmlFor="pink"><span className="pink"></span></label>
        </div>
  )
}
