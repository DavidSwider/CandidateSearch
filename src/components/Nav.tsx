import { Link } from "react-router-dom";
const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div>Nav
      <Link to="/">
      <button>Home</button>
      </Link>
      <Link to="/SavedCandidates">
      <button>Potential Candidate</button> </Link></div>
  )
};

export default Nav;
