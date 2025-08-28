"use client"
import NewArrivals from "./components/NewArrival/index";
import  ExploreProducts  from "./components/ExploreProducts/index";
import BestSellingProducts from "./components/BestSellingProducts/index";
import BrowseByCategory from "./components/BrowseByCategory/index";
import FreshSales from "./components/FlashSales/index";
import AdsBanner from "./components/AdsSection/index";
import SalesAds from "../sharedComponents/SalesAds";
import NavBar from "../sharedComponents/Header";
import  Footer from "../sharedComponents/Footer";

export default function HomePage(){
  return(
    <>
    <SalesAds/>
    <NavBar/>

     <AdsBanner/>
      <FreshSales/>
      <BrowseByCategory/>
      <BestSellingProducts/>
      <ExploreProducts/>
      <NewArrivals/>
      <Footer/>
  
   
  
    
    
    </>


  )
 
}