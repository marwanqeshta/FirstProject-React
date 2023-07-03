import AboutSection from "./Component/AboutSection";
import BlogsSection from "./Component/BlogsSection";
import ChefSection from "./Component/ChefSection";
import ContactSection from "./Component/ContactSection";
import CookingSection from "./Component/CookingSection";
import DiscountSection from "./Component/DiscountSection";
import Footer from "./Component/Footer";
import HomeSection from "./Component/HomeSection";
import MenuSection from "./Component/MenuSection";
import ReviewsSection from "./Component/ReviewsSection";
import SpecialSection from "./Component/SpecialSection";
import FormSection from "./Component/FormSection";


function App() {
  return (
    <div className="App">
      <HomeSection/>
      <AboutSection/>
      <SpecialSection/>
      <MenuSection/>
      <DiscountSection/>
      <CookingSection/>
      <ChefSection/>
      <ReviewsSection/>
      <BlogsSection/>
      <ContactSection/>
      <FormSection/>
      <Footer/>
    </div>
  );
}

export default App;
