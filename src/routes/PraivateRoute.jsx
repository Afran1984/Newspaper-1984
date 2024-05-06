// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
// import { Navigate, useLocation } from "react-router-dom";


// const PraivateRoute = ({children}) => {
//     const {user, loading} = useContext(AuthContext);

//     const location = useLocation();
//     console.log(location);

//     if(loading){
//         return <span className="loading loading-bars loading-lg"></span>
//     }

//     if(user){
//         return children
//     }
//     return <Navigate state={location.pathname} to="/login"></Navigate>
// };

// export default PraivateRoute;

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>;
    }

    if (user) {
        return children;
    }
    
    // Pass the current location as state when redirecting to login
    return <Navigate state={{ from: location }} to="/login" />;
};

export default PrivateRoute;
