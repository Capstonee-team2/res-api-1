import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_food } from '../redux/Action/FoodAction'


export default function FoodList() {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(get_food())
    }, [dispatch])
    const foods = useSelector(state=>console.log(state))
  return (
    <div>
      
    </div>
  )
}
