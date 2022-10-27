import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How can see courses?</Accordion.Header>
                    <Accordion.Body>
                       first register form then you can see courses. You can also sign in by google and 
                       github
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Register form?</Accordion.Header>
                    <Accordion.Body>
                        fill the form by name ,image,gmail,password.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="12">
                    <Accordion.Header>Login form?</Accordion.Header>
                    <Accordion.Body>
                        fill the form by valid email and password.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;