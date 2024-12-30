import React from "react";

function BillingDetails(){
    return(
        <div>
            <form className="billingDetailsForm">
                <div className="firstNameAndSurname">
                    <input type="text" id="firstName" name="firstName" placeholder="" required/>
                    <input type="text" id="surname" name="surname" placeholder=""/>
                </div>
                <input type="email" id="email" name="email" required/>
                <input type="text" id="address" name="address"  required/>
                <input type="number" id="number" name="number" required/>

            </form>
        </div>
    )
}
export default BillingDetails