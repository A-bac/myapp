import React from 'react'
import showtext from './submit'


const Form = (props) => {
  return (
    <div className='design'>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                    <form>
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Type you name.."></input>
        
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Type you last name"></input>
        
                    <label for="occ">Occupation</label>
                    <input type="text" name="Occupation" id="occ" placeholder="Type you Occu[atopm.."></input>
        
                    <label for="country">Country</label>
                    <select name="country" id="country">
                        <option value="Australia">Australia</option>
                        <option value="USA">USA</option>
                        <option value="canada">Canada</option>
                    </select>
        
                    <input type="button" value="Submit" onclick="showtext()"></input>
        
                </form>
                    </div>
                </div>
            </div>


    </div>
  )
}

export default Form