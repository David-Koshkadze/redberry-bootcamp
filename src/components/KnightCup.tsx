import chess_icon from "../assets/icons/chess_icon.svg";

const KnightCup = () => {
  return (
    <div className="h-[84px] w-full bg-[#7025FB] flex items-center pl-10">
      <div className="text-white text-lg flex gap-2">
          <img src={chess_icon} alt="chess_icon" />
          <p>Redberry Knight Cup</p>
      </div>
    </div>
  );
};

export default KnightCup;
