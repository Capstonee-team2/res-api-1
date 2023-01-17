import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_food } from "../redux/Action/FoodAction";

const AddFood = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [name,setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [recette, setRecette] = useState("")
    const handleSubmit= ()=>{
        dispatch(add_food({name,description,price,recette}), navigate("/foods"))
    }
  return (
    <div>
      <Card style={{ width: "18rem", margin: "5rem" }}>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>price</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Enter price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>recette</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter recette"
                onChange={(e) => setRecette(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddFood;
