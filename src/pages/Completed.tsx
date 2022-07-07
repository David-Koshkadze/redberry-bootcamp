import KnightCup from "../components/KnightCup";
import onboarding_completed from "../assets/images/onboarding_completed.png";
import rocket_icon from "../assets/icons/rocket_icon.svg";

const Completed = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <KnightCup />
        <img className="w-full object-cover" src={onboarding_completed} />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="">
          <img src={rocket_icon} alt="rocket_icon" className="mx-auto my-4" />
          <h1 className="font-nunitoExtraBold text-[36px]">Onboarding Completed!</h1>
        </div>
      </div>
    </div>
  );
};

export default Completed;
