import React from 'react'

export default function Colors() {
  return (
    <div className='colors'>
          <input type="radio" name="color" id="red" value="red" />
          <label for="red"><span class="red"></span></label>

          <input type="radio" name="color" id="green" />
          <label for="green"><span class="green"></span></label>

          <input type="radio" name="color" id="yellow" />
          <label for="yellow"><span class="yellow"></span></label>

          <input type="radio" name="color" id="olive" />
          <label for="olive"><span class="olive"></span></label>

          <input type="radio" name="color" id="orange" />
          <label for="orange"><span class="orange"></span></label>

          <input type="radio" name="color" id="teal" />
          <label for="teal"><span class="teal"></span></label>

          <input type="radio" name="color" id="blue" />
          <label for="blue"><span class="blue"></span></label>

          <input type="radio" name="color" id="violet" />
          <label for="violet"><span class="violet"></span></label>

          <input type="radio" name="color" id="purple" />
          <label for="purple"><span class="purple"></span></label>

          <input type="radio" name="color" id="pink" />
          <label for="pink"><span class="pink"></span></label>
        </div>
  )
}
