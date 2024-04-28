import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
const GoToTop = () => {
  // sets the back to top button visibility
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    // clean up function
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="flex justify-center items-center relative">
      {isVisible && (
        <button className="text-[1.4rem] w-[3rem] h-[3rem] bg-[#e5e5cb81] shadow-lg rounded-full fixed bottom-[4rem] right-[1rem] z-auto flex justify-center items-center cursor-pointer" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>
          <IoIosArrowUp className="text-black" />
        </button>
      )}
    </div>
  );
};

export default GoToTop;