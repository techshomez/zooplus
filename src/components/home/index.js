import "./home.css";
import hero_img from '../../assets/img_1.webp';

const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img src={hero_img} class="card-img" alt="hero image" height="550px" />
      </div>
    </div>
  );
};

export default Home;
