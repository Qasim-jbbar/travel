
import { travel } from "../../../fake";
import styles from"@/app/trips/page.module.css"
import AppContainer from "../components/AppContaner/AppContaner";
import { Link, avatar } from "@nextui-org/react";
import 'bootstrap/dist/css/bootstrap.css'




 const Page =() =>{
   

    return( 
       
     <div className="container mx-auto  w-50 " >
      <div className="form-row">
         <div className="form-group col-md-6">
           <label htmlFor="inputEmail4">Email</label>
           <input type="email" className="form-control" id="inputEmail4" placeholder="examble@gmail.com"/>
         </div>
         <div className="form-group col-md-6">
           <label htmlFor="Phone">Phone</label>
           <input type="number" className="form-control" id="inputPassword4" placeholder="phone..."/>
         </div>
      </div>
      <div className="form-group">
         <label htmlFor="inputAddress">Address</label>
         <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
      </div>
      <div className="form-group">
         <label htmlFor="inputAddress2">Address 2</label>
         <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
      </div>
      <div className="form-row">
         <div className="form-group col-md-6">
           <label htmlFor="inputCity">City</label>
           <input type="text" className="form-control" id="inputCity"/>
         </div>
         <div className="form-group col-md-4">
           <label htmlFor="inputState">State</label>
           <select id="inputState" className="form-control">
             <option selected>Choose...</option>
             <option>...</option>
            
           </select>
         </div>
         <div className="form-group col-md-2">
           <label htmlFor="inputZip">Zip</label>
           <input type="text" className="form-control" id="inputZip"/>
         </div>
      </div>
      <div className="form-group">
         <div className="form-check">
           <input className="form-check-input" type="checkbox" id="gridCheck"/>
           <label className="form-check-label" htmlFor="gridCheck">
             Check me out
           </label>
         </div>
      </div>

      <button type="submit" className="btn btn-primary mx-40 w-50">submit</button>
    

      </div>
            
     
    )


};

export default Page;
    