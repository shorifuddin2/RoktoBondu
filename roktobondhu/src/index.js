import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Anuperona from "./components/Blogs/Anuperona";
import Blogs_Details from "./components/Blogs/Blogs_Details";
import Campaigns from "./components/Blogs/Campaign/Campaigns";
import First_roktodan from "./components/Blogs/Category/First-roktodan/First-roktodan";
import First_roktodan_Details from "./components/Blogs/Category/First-roktodan/First-roktodan_Details";
import Roktototthyo from "./components/Blogs/Category/Roktototthyo/Roktototthyo";
import Roktototthyo_Details from "./components/Blogs/Category/Roktototthyo/Roktototthyo_Details";
import Kobitas from "./components/Blogs/Kobita/Kobitas";
import RoktodanExpreience from "./components/Blogs/RoktodanExperience/RoktodanExperience";
import RoktodanStory from "./components/Blogs/RoktodanStory/RoktodanStory";
import "./index.css";
import Blog from "./Pages/Blog";
import GalleryBlog from "./Pages/GalleryBlog/GalleryBlog";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/Login";
import NewsBlog from "./Pages/NewsBlog/NewsBlog";
import Platelet from "./Pages/platelet/Platelet";
import LastDonate from "./Pages/Profile/LastDonate";
import PasswordChange from "./Pages/Profile/PasswordChange";
import Profile from "./Pages/Profile/Profile";
import ProfileSideNavbar from "./Pages/Profile/ProfileSideNavbar";
import Registration from "./Pages/Registration";
import Sohojogi from "./Pages/Sohojogi";
import Thalassemia from "./Pages/Thalassemia";
import ThalassemiaDetails from "./Pages/ThalassemiaDetails";
import Volunteers from "./Pages/Volunteers/Volunteers";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/platelet",
    element: <Platelet />,
  },
  {
    path: "/thalassemia",
    element: <Thalassemia />,
  },
  {
    path: "/thalassemia-details",
    element: <ThalassemiaDetails />,
  },
  {
    path: "/volunteers",
    element: <Volunteers />,
  },
  {
    path: "/sohojogi",
    element: <Sohojogi />,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blogs/অনুপ্রেরণা",
    element: <Anuperona />,
  },
  {
    path: "/blogs/:id",
    element: <Blogs_Details />,
  },
  {
    path: "/blogs/কবিতা",
    element: <Kobitas />,
  },
  {
    path: "/blogs/ক্যাম্পেইন-নিউজ",
    element: <Campaigns />,
  },
  {
    path: "/blogs/প্রথম-রক্তদান",
    element: <First_roktodan />,
  },
  {
    path: "/blogs/category/First-roktodan/:id",
    element: <First_roktodan_Details />,
  },
  {
    path: "/blogs/রক্ততথ্য",
    element: <Roktototthyo />,
  },
  {
    path: "/blogs/category/roktototthoy/:id",
    element: <Roktototthyo_Details />,
  },
  {
    path: "/blogs/রক্তদানের-অভিজ্ঞতা",
    element: <RoktodanExpreience />,
  },
  {
    path: "/blogs/রক্তদানের-গল্প",
    element: <RoktodanStory />,
  },
  {
    path: "/blogs/রক্তবন্ধু-গ্যালারি",
    element: <GalleryBlog />,
  },
  {
    path: "/blogs/সংবাদ",
    element: <NewsBlog />,
  },
  {
    path: "/profile-sideNavbar",
    element: <ProfileSideNavbar />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/lastDonate",
    element: <LastDonate />,
  },
  {
    path: "/change-password",
    element: <PasswordChange />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
