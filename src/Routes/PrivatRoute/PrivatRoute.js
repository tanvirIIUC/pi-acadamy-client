import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivatRoute = ({children}) => {

    const {user,loading}= useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return  <Spinner animation="border" variant="primary" />
    }
    
    if(!user){
        return <Navigate to='/' state ={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivatRoute;