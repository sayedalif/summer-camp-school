import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

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
        <button className="text-[1.4rem] w-[3rem] h-[3rem] bg-purple-600 shadow-lg shadow-indigo-500/50 rounded-full fixed bottom-[2rem] right-[1rem] z-[999] flex justify-center items-center cursor-pointer" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>
          <FaArrowUp className="animate-[gototop_1.2s_linear_infinite_alternate-reverse] text-white" />
        </button>
      )}
    </div>
  );
};

export default GoToTop;