import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";
import { useEffect, useState } from "react";
import Button from "@Ui/Button";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const handleNext = () => {
    if (currentSlide >= sliderData?.length - 1) {
      //3
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide <= 0) {
      //2
      setCurrentSlide(sliderData?.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(handleNext, intervalTime);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, slideInterval, autoScroll]);

  return (
    <div className="w-full h-full ">
      <AiOutlineArrowLeft className="arrow prev " onClick={handlePrev} />
      <AiOutlineArrowRight className="arrow next" onClick={handleNext} />
      {sliderData?.map((e, i) => {
        const { image, heading, desc } = e;
        return (
          <div
            key={i}
            // className={i === currentSlide ? "slide current" : "slide"}
          >
            {i === currentSlide && (
              <>
                <img src={image} alt="" />
                <div className="absolute flex gap-2 justify-center items-center left-[50%] px-14 py-8 top-[16rem] bg flex-col opacity-1">
                  <h2 className="text-white font-bold text-4xl">{heading}</h2>
                  <p className="text-white text-md">{desc}</p>
                  <hr className="bg-white w-[250px] h-[2px]" />
                  <Button
                    text="Shop Now"
                    className="bg-light_blue p-2 text-white border-none rounded-sm"
                  />
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
