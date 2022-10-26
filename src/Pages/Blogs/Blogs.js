import React from 'react';
import Card from 'react-bootstrap/Card';

const Blogs = () => {
    return (
        <div className='p-5'>
            <h2 className='text-center'>Blogs</h2>
            <Card className='my-3'>
                <Card.Body>
                    <Card.Title>what is cors?</Card.Title>

                    <Card.Text>
                        Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.

                        A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy. CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request. It allows for more freedom and functionality than purely same-origin requests, but is more secure than simply allowing all cross-origin requests.

                        The specification for CORS is included as part of the WHATWG's Fetch Living Standard. This specification describes how CORS is currently implemented in browsers.An earlier specification was published as a W3C Recommendation.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='my-3'>
                <Card.Body>
                    <Card.Title>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>

                    <Card.Text>
                        Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.

                        FirebaseUI provides a customizable, open source, drop-in auth solution that handles the UI flows for signing in users. The FirebaseUI Auth component implements best practices for authentication on mobile devices and websites, which can maximize sign-in and sign-up conversion for your app.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='my-3'>
                <Card.Body>
                    <Card.Title>How does the private route work?</Card.Title>

                    <Card.Text>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                        If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='my-3'>
                <Card.Body>
                    <Card.Title>What is Node? How does Node work?</Card.Title>

                    <Card.Text>
                        Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.

                        In the traditional approach to creating web servers, for each incoming request or connection the server spawns a new thread of execution or even forks a new process to handle the request and send a response. Conceptually, this makes perfect sense, but in practice it incurs a great deal of overhead.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blogs;