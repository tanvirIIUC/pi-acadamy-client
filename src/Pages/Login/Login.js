import React from 'react';


import {
  MDBContainer,
  MDBInput,
  
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Login = () => {

  const {signIn} = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();

   const from = location.state?.from?.pathname || '/';
    const [error,setError]= useState('');
    const {providerLogin,providerGithubLogin}= useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            navigate(from,{replace: true});
            // console.log(user);
        })
        .catch(error =>console.error(error))
    }

    const handleGithubSignin = ()=>{
      providerGithubLogin(githubProvider)
      .then(result =>{
        const user = result.user;
        navigate(from,{replace: true});
        // console.log(user);
    })
    .catch(error =>console.error(error))

    }

    const handleSubmit= event =>{
      event.preventDefault();
      const form =event.target;
      const email = form.email.value;
      const password = form.password.value;
      signIn(email,password)
      .then(result =>{
        const user = result.user;
        // console.log(user);
       
        form.reset();
        setError('');
        navigate('/top');

      })
      .catch(error =>{
        console.error(error)
        setError(error.message);
      })
    }

    return (
          <Form onSubmit={handleSubmit}>
              <MDBContainer className="p-3 my-5 d-flex flex-column w-50 border rounded">
            <h2> sign In</h2>

        <MDBInput wrapperClass='mb-4' name='email' label='Email address' id='form1' type='email' required/>
        <MDBInput wrapperClass='mb-4' name='password' label='Password' id='form2' type='password' required/>
  
        <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBBtn className="mb-4">Sign in</MDBBtn>
         <p className='text-danger'>{error}</p>
          <a href="!#">Forgot password?</a>
        </div>
  
  
        <div className="text-center">
          <p>Not a member? <Link to='/register'>Register</Link> </p>
          <p>or sign up with:</p>
  
          <div className='d-flex justify-content-center  mx-auto' style={{width: '40%'}}>
           
            <MDBBtn onClick={handleGoogleSignIn} tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="lg"/>
            </MDBBtn>
  
            <MDBBtn onClick={handleGithubSignin} tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="lg"/>
            </MDBBtn>
  
          </div>
        </div>
  
      </MDBContainer>
          </Form>
        


       
    );
};

export default Login;