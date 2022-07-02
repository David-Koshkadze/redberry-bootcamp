import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl">Home</h1>
      <Link to="/register">Get Started</Link>
    </div>
  )
}

export default Home