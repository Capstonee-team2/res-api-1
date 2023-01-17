import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_food } from "../redux/Action/FoodAction";
import FoodCard from "./FoodCard";

export default function FoodList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_food());
  }, [dispatch]);
  const foods = useSelector((state) => state.foods);
  return (
    <div>
      {foods.map((el) => (
        <FoodCard el={el} />
      ))}
    </div>
  );
}
