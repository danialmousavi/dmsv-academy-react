// import App from "./App";
import Courses from "./components/Courses/Courses";
import MainCourse from "./components/Courses/MainCourse";
import Home from "./components/Home";
import MainPodcast from "./components/podcasts/MainPodcast";
import Podcasts from "./components/podcasts/Podcasts";
import Register from "./components/register/Register";

const routes=[
    {path:'/',element:<Home/>},
    {path:'/courses',element:<Courses/>},
    {path:'/courses/:Id',element:<MainCourse/>},
    {path:'/podcasts',element:<Podcasts/>},
    {path:'/podcasts/:Id',element:<MainPodcast/>},
    {path:'/register',element:<Register/>}

]
export default routes