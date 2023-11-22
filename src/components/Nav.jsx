
import { Link } from "react-router-dom";

function Nav (props) {
  return (

    <div className="nav"  style={{position:'fixed',top:'0',left:'0',right:'0', border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' , backgroundColor:'gray',textAlign:'center'}}>
    <Link to="/">
      <div>Home</div>
    </Link>
    <Link to="/About">
      <div>About</div>
    </Link>
    <Link to="/SrchNasaList">
      <div>SearchNasalist</div>
    </Link>

   </div>
   );
};

export default Nav