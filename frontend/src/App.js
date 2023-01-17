import "./App.css";
import AddFood from "./Components/AddFood";
import Navigation from "./Components/Navigation";
import {Route, Routes} from 'react-router-dom'
import FoodList from "./Components/FoodList";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/add' element={<AddFood></AddFood>}>
          
        </Route>
        <Route path="/foods" element={<FoodList/>}/>
      </Routes>
    </div>
  );
}

export default App;
