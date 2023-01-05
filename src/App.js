import './App.css';
import Home from "./routes/home/home.component";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/sign-in/auth.component";
import SignIn from "./routes/sign-in/sign-in.component";
<<<<<<< HEAD
=======
import SignInForm from "./componets/sign-in-form/sign-in-form.component";
>>>>>>> 006588d3d0ef05704141520676dd0d95fdb27d1b


function App() {
    return <Routes>
        <Route path='/' element={<Navigation></Navigation>}>
            <Route index={true} element={<Home></Home>}></Route>
            <Route path='shop' element={<Shop></Shop>}></Route>
            <Route path='auth' element={<Authentication></Authentication>}></Route>
<<<<<<< HEAD
            <Route path='sign-in' element={<SignIn></SignIn>}></Route>
=======
            <Route path='sign-in' element={<SignInForm></SignInForm>}></Route>
>>>>>>> 006588d3d0ef05704141520676dd0d95fdb27d1b
        </Route>
    </Routes>
}

export default App;
