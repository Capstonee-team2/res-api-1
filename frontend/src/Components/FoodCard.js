import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delete_food, edit_food } from "../redux/Action/FoodAction";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const FoodCard = ({ el }) => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name,setName] = useState(el.name)
    const [description, setDescription] = useState(el.description)
    const [price, setPrice] = useState(el.price)
    const [recette, setRecette] = useState(el.recette)
    const handleSubmit= ()=>{
        dispatch(edit_food(el._id,{name,description,price,recette}), handleClose())
    }
  
  return (
    <div>
      <Card style={{ width: "18rem" }} key={el._id} >
        <Card.Img
          variant="top"
          src="https://thumbs.dreamstime.com/b/fast-food-concept-greasy-fried-restaurant-take-out-as-onion-rings-burger-hot-dogs-fried-chicken-french-fries-31114163.jpg"
        />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
           {el.description}{el.price}{el.recette}
          </Card.Text>
          <Button
            variant="danger"
            onClick={() => dispatch(delete_food(el._id))}
          >
            Delete
          </Button>
          <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Food</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text "
                value={name}
                autoFocus
                onChange={(e)=>setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3}
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
                              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label>Price</Form.Label>
              <Form.Control id="price"
                type="Number"
                value={price}
                autoFocus
                onChange={(e)=>setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Recette</Form.Label>
              <Form.Control
                type="text "
                autoFocus
                onChange={(e)=>setRecette(e.target.value)}
                value={recette}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </Card.Body>
      </Card>


    </div>
  );
};

export default FoodCard;
