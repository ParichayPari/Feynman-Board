import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

// import Dashboard from "./Dashboard";

const LogIn = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `Dashboard`; 
    navigate(path);
  }
  return (
   
        <form>
          <input type="text" placeholder="Username" required />

          <Button color="primary" className="px-4"
            onClick={routeChange}
              >
              Login
            </Button>
        </form>
    
  );
};

export default LogIn;
