import "./home.css";
import hero_img from '../../assets/img_1.webp';
import Products from "../product";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src={hero_img} className="card-img" alt="hero image" height="550px" />
      </div>
      <Products />
    </div>
  );
};

export default Home;
