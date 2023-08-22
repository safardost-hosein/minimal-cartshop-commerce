import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Offers from '../../components/offers/Offers';
import dataOffers from "../../assets/data/dataOffers";


function PageOffers(){
  return(
    <>
    <Navbar />
    <p className="titles"> تخفیف دار  </p>
     <Offers  showMoreButton={false} discountSection={true} data={dataOffers}  NumberOfCards={12} />
     <Footer />
     

    </>
   
  )
}
 
export default PageOffers;
