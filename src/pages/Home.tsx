import { Link } from "react-router-dom";
import KnightCup from "../components/KnightCup";

const Home = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 bg-slate-500">
        <KnightCup />
      </div>

      <div className="">
        <h1 className="text-4xl">Home</h1>
        <Link to="/register">Get Started</Link>
      </div>

    </div>
  );
};

export default Home;
