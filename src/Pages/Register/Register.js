import React, { useState } from 'react';
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




const Register = () => {
  const [error,setError]= useState('');

 const {createUser,updateUserProfile} = useContext(AuthContext);
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);

    createUser(email,password)
    .then(result =>{
      const user = result.user;
      setError('');
      form.reset();
      handleUpdateUserProfile(name,photoURL)

    })
    .catch(error =>{
      console.error(error)
      setError(error.message);
    })
  }

  const handleUpdateUserProfile =(name,photoURL) =>{
    const profile = {
      displayName : name,
      photoURL : photoURL
    }
    updateUserProfile(profile)
    .then(() =>{ })
    .catch(error =>console.error(error));
  }
  return (
    <Form onSubmit={handleSubmit}>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50 border rounded">
        <h2> Register</h2>

        <MDBInput wrapperClass='mb-4' name='name' label='User Name' id='form1' type='text' required />
        <MDBInput wrapperClass='mb-4' name='photoURL' label='photoURL' id='form1' type='text' required />

        <MDBInput wrapperClass='mb-4' name='email' label='Email address' id='form1' type='email' required />
        <MDBInput wrapperClass='mb-4' name='password' label='Password' id='form2' type='password' required />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBBtn className="mb-4">Register</MDBBtn>

        </div>


        <div className="text-center">
          <p className='text-danger'>{error}</p>
          <p>Not a member? <Link to='/login'>Sign in</Link> </p>
       
         

          {/* <div className='d-flex justify-content-center  mx-auto' >

            <MDBBtn tag='a' color='none' className='m-1 ' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="lg" />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="lg" />
            </MDBBtn>

          </div> */}
        </div>

      </MDBContainer>
    </Form>

  );
};

export default Register;