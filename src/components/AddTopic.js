import { useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTopic = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3>Topic Name</h3>
      <Form>
        <div>
        <FloatingLabel controlId="floatingTextarea2" label="Description">
          <Form.Control
            as="textarea"
            placeholder="Write description here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        </div>
        <Button onClick={() => navigate(-1)}>Save</Button>
      </Form>
    </>
  );
};

export default AddTopic;
