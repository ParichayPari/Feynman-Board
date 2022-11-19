import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Dashboard = () => {
  let navigate = useNavigate(); 
  const routeChangeToAddItemPage = () =>{ 
    let path = `AddTopic`; 
    navigate(path);
  }
  
  return (
    <>
      <h2> Hello, Username</h2>
      <Form>
        <input type="text" placeholder="Enter Topic name" required />
        <Button color="success" className="px-4"
            onClick={routeChangeToAddItemPage}
              >
              Add Topic
            </Button>
      </Form>
    </>
  );
};

export default Dashboard;
