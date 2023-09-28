import { Route } from "react-router-dom";
import Register from "../pages/users/Register";
import Login from "../pages/users/Login";


export default

    <>
        <Route>
            <Route path="register" element={<Register></Register>} ></Route>
            <Route path="login" element={<Login></Login>} ></Route>
        </Route>
    </>