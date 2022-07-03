import KnightCup from "../components/KnightCup";
import register_page from "../assets/images/register_page.png";
import Pager from "../components/Pager";
import { Link } from "react-router-dom";
import next_icon from "../assets/icons/next_icon.svg";
import Input from "../components/Input";

const Register = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 relative">
        <KnightCup />
        <img
          src={register_page}
          alt="register_page"
          className="object-cover w-full h-screen"
        />
        <div className="absolute top-64 left-28 text-xl [&>*]:mb-3">
          <p className="uppercase text-[#212529] font-nunitoExtraBold">
            “When you see a good move,
          </p>
          <p className="uppercase text-[#212529] font-nunitoExtraBold">
            look for a better one.”
          </p>
          <p className="uppercase text-[#E5E6E8]">-Emanuel Lasker</p>
        </div>
      </div>
      <div className="w-1/2">
        <div className="w-full h-[84px] border border-b flex items-center px-10">
          <p className="font-openSansSemiBold text-base">Start Creating Your Account</p>
        </div>

        <div className="pl-10 pr-40 mt-12">
          <Pager />
          <div className="mt-20 border">
            <h1 className="font-openSansSemiBold text-3xl">Personal Information</h1>
            <span className="font-openSansSemiBold text-xs text-[#95939A]">
              This is Basic Information Fields
            </span>
          </div>

          <div className="mt-20 h-64 flex flex-col gap-4 font-openSans">
            <Input type="text" placeholder="Name" required={true} />

            <div className="flex justify-between mt-16">
              <Link
                to="/"
                className="px-4 py-2 border border-[#212529] rounded-lg bg-white hover:bg-gray-300"
              >
                Back
              </Link>

              <button className="px-4 py-2 rounded-lg bg-[#212529] text-white flex gap-2 w-fit hover:outline outline-purple-400">
                <p>Next</p>
                <img
                  src={next_icon}
                  alt="next-btn"
                  className="w-[24px] h-[24px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
