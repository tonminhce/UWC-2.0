import { auth } from "../../services/config";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {

    return auth.currentUser ? children : <Navigate to="/" replace={true} />;
}
export default PrivateRoute;