
import logo from "../assets/logo.jpg"

const Preloader = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white">
    <div className="relative w-32 h-32"> {/* Increased the spinner container size */}
      {/* Spinner */}
      <div className="absolute inset-0 w-full h-full border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-[#fd6035] z-0"></div> {/* z-0 to place it behind the image */}

      {/* Image inside the spinner */}
      <img
        src={logo}
        alt="Loading..."
        className="absolute inset-2 w-28 h-28 object-cover rounded-full z-10"  
      />
    </div>
  </div>
  );
};

export default Preloader;
