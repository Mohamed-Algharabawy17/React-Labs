import { useEffect, useState } from 'react';
import './index.css'
import Button from '../button/Button';
import { CheckCheck, StepBack, StepForward } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

interface IProps {
  images: string[];
}

const Slider = ({ images }: IProps) => {


  /**
  * States & Hooks
  */
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderStarted, setSliderStarted] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(nextSlide, 1000);
      return () => clearInterval(timer);
    }
  }, [isPlaying]);

  /**
  * Handlers
  */

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const stopSlideShow = () => {
    setIsPlaying(false);
    if(sliderStarted) {
        setSliderStarted(false);
        toast(`Your slider stopped now`, {icon: <CheckCheck />, style: {backgroundColor: "#FF6347", color: "white", fontWeight: "bold"},});
    } else {
        toast(`Your slider already not working !`, {icon: <CheckCheck />, style: {backgroundColor: "#FF6347", color: "white", fontWeight: "bold"},});
    }
  };

  const startSlideShow = () => {
    setIsPlaying(true);
    if (!sliderStarted) {
      setSliderStarted(true);
      toast(`Your slider started now`, {icon: <CheckCheck />, style: {backgroundColor: "#90EE90", color: "white", fontWeight: "bold"},});
    } else {
        toast(`Your slider alrady works !`, {icon: <CheckCheck />, style: {backgroundColor: "#FF6347", color: "white", fontWeight: "bold"},});
    }
  };


  return (
    <div className="relative w-full max-w-2xl mx-auto mt-20">
        <Toaster />
      <div className="overflow-hidden rounded-lg flex justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-96 transition-transform duration-500 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-96 object-center rounded-xl"
            />
          </div>
        ))}
      </div>
      <div>
        <Button className='bg-red-400 focus:outline-none' onClick={stopSlideShow}>
            STOP
        </Button>
        <Button
            onClick={prevSlide}
            className="bg-inherit focus:outline-none text-black mt-10 w-15"
        >
            <StepBack />        
        </Button>
        <Button
            onClick={nextSlide}
            className="bg-inherit focus:outline-none text-black mt-10"
        >
            <StepForward />
        </Button>
        <Button className='bg-green-400 focus:outline-none' onClick={startSlideShow}>
            START
        </Button>
      </div>
    </div>
  );
};

export default Slider;
