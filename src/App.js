import './App.css';
import Home from "./routes/home/home.component";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";


function App() {

    return <Routes>
        <Route path='/' element={<Navigation></Navigation>}>
            <Route index={true} element={<Home></Home>}></Route>
            <Route path='shop' element={<Shop></Shop>}></Route>
        </Route>
    </Routes>

}

export default App;
