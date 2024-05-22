import Slider from "../components/slider/Slider";
import { images } from "../data";

const Home = () => {

  return (
    <div>
      <Slider images={images} />
    </div>
  );
}

export default Home;
