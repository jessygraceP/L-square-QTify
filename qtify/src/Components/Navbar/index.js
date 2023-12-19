
import Button from "../Button"
import Searchbox from "../Searchbox"
import './Navbar.css'
 const Navbar = () =>  {
    return (
    <div className="navbar">
        <img src="Logo.PNG" alt="Logo" width={80} height={40} />
        
      
        <Searchbox />
        <Button>Give Feedback</Button>
    </div>)
}
export default Navbar;