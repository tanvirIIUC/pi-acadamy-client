import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Topics from "../../Pages/Topics/Topices/Topics";
import TopicsView from "../../Pages/TopicsView/TopicsView";

export const routes = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element : <Home></Home>
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