import React from "react";
import Footer from "../../Components/Footer/Footer";
import ItemFilter from "../../Components/itemsFiltered/itemFiltered";
import "./Items.css"
function Items(){
    return(
    <div className="itemFilter">
        <ItemFilter />
        <Footer />
    </div>
    )
}

export default Items