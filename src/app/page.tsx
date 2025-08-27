import "@fontsource/inter";
import  SignupPage  from "./signup/page";
import NewArrivals from "./homePage/components/NewArrival/index";
import  ExploreProducts  from "./homePage/components/ExploreProducts/index";
import BestSellingProducts from "./homePage/components/BestSellingProducts/index";
import BrowseByCategory from "./homePage/components/BrowseByCategory/index";
import FreshSales from "./homePage/components/FreshSales/index";
import AdsBanner from "./homePage/components/AdsSection/index";
import SalesAds from "./sharedComponents/SalesAds/index";
import NavBar from "./sharedComponents/Header/index";
import  Footer from "./sharedComponents/Footer/index";

export default function HomePage(){

  return(
    <>
     {/* <SignupPage/> */}
    {/* <SalesAds/> */}
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