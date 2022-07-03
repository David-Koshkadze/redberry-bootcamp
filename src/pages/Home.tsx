import { Link } from "react-router-dom";
import KnightCup from "../components/KnightCup";
import img_landing from "../assets/images/landing_page.png";
import next_icon from "../assets/icons/next_icon.svg";

const Home = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 bg-slate-500">
        <KnightCup />
        <img
          src={img_landing}
          alt="img_landing"
          className="object-contain h-screen"
        />
      </div>

      <div className="w-1/2 bg-[#FD5334] pl-12">
        <div className="text-white mt-44 uppercase">
          <div className="flex items-center font-nunitoBold mb-8">
            <h1 className="text-6xl">chess says</h1>
            <span className="text-lg text-[#212529] ml-4">a lot about</span>
          </div>
          <h1 className="text-6xl font-nunitoExtraBold">who we are</h1>
        </div>

        <Link
          to="/register"
          className="mt-20 px-4 py-2 rounded-lg bg-[#212529] text-white flex gap-2 w-fit hover:outline outline-purple-400"
        >
          <p>Get Started</p>
          <img src={next_icon} alt="next-btn" className="w-[24px] h-[24px]" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
