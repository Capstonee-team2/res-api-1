import axios from "axios";
import { GET_FOOD } from "../ActionTypes/Foodtype";

export const add_food = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/add", data);
    dispatch(get_food());
  } catch (error) {
    console.log(error);
  }
};
export const delete_food = (id) => async (dispatch) => {
  try {
    await axios.delete(`/del/${id}`);
    dispatch(get_food());
  } catch (error) {
    console.log(error);
  }
};
export const edit_food = (id, data) => async (dispatch) => {
  try {
    await axios.put(`/edit/${id}`, data);
    dispatch(get_food());
  } catch (error) {
    console.log(error);
  }
};
export const get_food = () => async (dispatch) => {
  try {
    const res = await axios.get("/get");
    dispatch({ type: GET_FOOD, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
