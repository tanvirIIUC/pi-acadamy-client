import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import TopicDetails from "../../Pages/TopicDetails/TopicDetails";
import TopicHome from "../../Pages/TopicHome/TopicHome";
import Topics from "../../Pages/Topics/Topices/Topics";
import TopicsView from "../../Pages/TopicsView/TopicsView";
import PrivatRoute from "../PrivatRoute/PrivatRoute";

export const routes = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
              path:'/',
              element:<Home></Home>
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'/register',
              element:<Register></Register>
            },
            {
              path:'/blogs',
              element:<Blogs></Blogs>
            },
            {
              path:'/faq',
              element:<Faq></Faq>
            },
            
            
            {
                path:'/top',
                element : <PrivatRoute><TopicHome></TopicHome></PrivatRoute>
                
            },
            /* {
                path:'/details',
                
                
            }, */
            
            {
                path:'/details/:id',
                element : <PrivatRoute><TopicDetails></TopicDetails></PrivatRoute>,
                loader : ({params}) => fetch(`http://localhost:5000/topicsDetails/${params.id}`)
            },
          /*   {
                path: '/topicsview/:id',
                element:<TopicsView></TopicsView>
            } */

        ]
       
        
    },
    {path: '*',element: <div>Error 404 !</div>}
])