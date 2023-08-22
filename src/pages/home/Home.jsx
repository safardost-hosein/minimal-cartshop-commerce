import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ImageSlider from "../../components/slider/ImageSlider";
import dataSlides from '../../assets/data/dataSlides';
import Category from "../../components/category/Category";
import dataCategory from "../../assets/data/dataCategory";
import dataBestSelling from "../../assets/data/dtaBestSelling";
import Footer from "../../components/footer/Footer";
import dataOffers from "../../assets/data/dataOffers";
import Offers from "../../components/offers/Offers";

function Home() {
  return (
    <>
      <Navbar />

      <ImageSlider dataSlides={dataSlides} />

      <div className="home-container">
        <p className="titles"> دسته بندی محصولات</p>
        <Category dataCategory={dataCategory} />

        <p className="titles"> پرفروش ترین ها</p>
        <Offers
          showMoreButton={true}
          discountSection={false}
          data={dataBestSelling}
          NumberOfCards={0}
        />
        <p className="titles"> تخفیف دار </p>
        <Offers
          showMoreButton={true}
          discountSection={true}
          data={dataOffers}
          NumberOfCards={0}
        />
      </div>
      <Footer />
    </>
  );
}
export default Home;
