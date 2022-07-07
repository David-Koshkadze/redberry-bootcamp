import { Link } from "react-router-dom";
import KnightCup from "../components/KnightCup";
import img_landing from "../assets/images/landing_page.png";
import next_icon from "../assets/icons/next_icon.svg";

const Home = () => {
  return (
    <div className="w-full h-screen flex font-openSans">
      <div className="w-1/2 h-full bg-slate-500">
        <KnightCup />
        <img
          src={img_landing}
          alt="img_landing"
          className="object-cover h-screen w-full"
        />
      </div>

      <div className="w-1/2 h-screen bg-[#FD5334] pl-16 fixed" style={{marginLeft: '50%'}}>
        <div className="text-white mt-64 uppercase">
          <div className="flex items-center font-nunitoExtraBold mb-4">
            <h1 className="text-[80px]">chess says</h1>
            <span className="text-lg text-[#212529] ml-4">a lot about</span>
          </div>
          <h1 className="text-[80px] font-nunitoExtraBold" style={{fontWeight: '900'}}>who we are</h1>
        </div>

        <Link
          to="/register"
          className="mt-20 px-[24px] py-[13px] rounded-lg bg-[#212529] text-white flex items-center gap-3 w-fit hover:outline outline-purple-400"
        >
          <p className="text-[20px]">Get Started</p>
          <img src={next_icon} alt="next-btn" className="w-[24px] h-[24px]" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
