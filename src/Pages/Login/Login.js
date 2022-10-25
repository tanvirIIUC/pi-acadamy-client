import React from 'react';


import {
  MDBContainer,
  MDBInput,
  
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { Form, Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const {providerLogin}= useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            // console.log(user);
        })
        .catch(error =>console.error(error))
    }

    return (
          <Form>
              <MDBContainer className="p-3 my-5 d-flex flex-column w-50 border rounded">
            <h2> sign In</h2>

        <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' required/>
        <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' required/>
  
        <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBBtn className="mb-4">Sign in</MDBBtn>
          <a href="!#">Forgot password?</a>
        </div>
  
  
        <div className="text-center">
          <p>Not a member? <Link to='/register'>Register</Link> </p>
          <p>or sign up with:</p>
  
          <div className='d-flex justify-content-center  mx-auto' style={{width: '40%'}}>
           
            <MDBBtn onClick={handleGoogleSignIn} tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="lg"/>
            </MDBBtn>
  
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="lg"/>
            </MDBBtn>
  
          </div>
        </div>
  
      </MDBContainer>
          </Form>
        


       
    );
};

export default Login;