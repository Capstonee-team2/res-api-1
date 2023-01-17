import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { delete_food } from "../redux/Action/FoodAction";
const FoodCard = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://thumbs.dreamstime.com/b/fast-food-concept-greasy-fried-restaurant-take-out-as-onion-rings-burger-hot-dogs-fried-chicken-french-fries-31114163.jpg"
        />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            variant="danger"
            onClick={() => dispatch(delete_food(el._id))}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodCard;
