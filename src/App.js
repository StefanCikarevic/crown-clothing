import './App.css';
import Home from "./routes/home/home.component";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/sign-in/auth.component";


function App() {

    return <Routes>
        <Route path='/' element={<Navigation></Navigation>}>
            <Route index={true} element={<Home></Home>}></Route>
            <Route path='shop' element={<Shop></Shop>}></Route>
            <Route path='auth' element={<Authentication></Authentication>}></Route>
        </Route>
    </Routes>

}

export default App;
