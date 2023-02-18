import React from 'react'
import './Form.css'

export default function Form() {
  return ( 
    <div className='content-padding formDiv'>
          <form className='registerForm'>
              <div className="row">
                <div className="col">
                    <div class="mb-3 ">
                    <label class="form-label">First Name</label>
                    <input type="text" class="form-control"  />
                        
                    </div>
                </div>
                <div className="col">
                    <div class="mb-3 ">
                    <label class="form-label">Last Name</label>
                    <input type="text" class="form-control"  />
                        
                    </div>
                </div>
               
              </div>
              <div className="row">
                <div class="mb-3 ">
                    <label class="form-label">Startup Name</label>
                    <input type="text" class="form-control"  />
                        
                </div>
                <div class="mb-3 ">
                    <label class="form-label">Startup Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        
                </div>
                
                
                <button type="submit" class="btn btn-danger">Submit</button>
              </div>
          </form>
    </div>
  )
}
