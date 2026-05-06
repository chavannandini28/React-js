import "./HeroSection.css";
import imgOne from "../assets/imgOne.jpeg";

function HeroSection() {
  return (
    <div className="hero">
      <h1>Welcome to My Website</h1>
      <img src={imgOne} alt="Hero" width="300" />
    </div>
  );
}

export default HeroSection;