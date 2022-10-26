import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
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
                path:'/top',
                element : <PrivatRoute><TopicHome></TopicHome></PrivatRoute>
            },
            
            {
                path:'/topics/:id',
                element: <Topics></Topics>
            },
            {
                path: '/topicsview/:id',
                element:<TopicsView></TopicsView>
            }

        ]
    }
])