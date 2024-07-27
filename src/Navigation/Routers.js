import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../component/Header";
import SideBar from "../component/SideNav";
import Footer from "../component/Footer";
import Default from "../screens/Dashboard";
import User from "../screens/Users/index";
import EditUser from "../screens/Users/EditUser";
import ViewUser from "../screens/Users/ViewUser";
import AddNewUser from "../screens/Users/AddNewUser";
import EditCategories from "screens/Categories/EditCategories";
import Subjects from "screens/Categories";
import SubjectsListing from "screens/Categories/AddNewSubjects";
import Study from "screens/Studymaterial";
import AddStudysMaterial from "screens/Studymaterial/AddNewStudys";
import StudyVideoList from "screens/Studyvideo";
import AddStudyVideo from "screens/Studyvideo/AddNewVideo";
import CurrentAffairsList from "screens/Currentaffairs";
import AddCurrentAffairs from "screens/Currentaffairs/AddNewAffairs";
import Blog from "screens/blog";
import AddBlogs from "screens/blog/AddNewBlogs";
import EditNewStudys from "screens/Studymaterial/EditNewStudys";
import EditStudyVideo from "screens/Studyvideo/EditNewVideo";
import EditCurrentAffairs from "screens/Currentaffairs/EditAffairs";
import Signin from "screens/SignIn/login";
import WhatsNew from "screens/Whatsnew";
import AddWhatsNew from "screens/Whatsnew/AddNewWhatsNew";
import EBook from "screens/E-book";
import AddEBook from "screens/E-book/AddNewEbook";
import Job from "screens/Job";
import AddNewJob from "screens/Job/AddNewJob";
import DailyVocab from "screens/DailyVocab";
import AddNewDailyVocab from "screens/DailyVocab/AddNewDailyVocabs";
import Reviews from "screens/Review";
import ReviewsListing from "screens/Review/AddNewReview";

function DefaultRouters() {
  return (
    <div className="App">
      <Fragment>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Signin />} />
          <Route path={`${process.env.PUBLIC_URL}/login`} element={<Signin />} />
        </Routes>
      </Fragment>
    </div>
  );
}
function Routers() {
  return (

    <div class="page-wrapper">
      <Header />
      <div className="page-body-wrapper">
        <SideBar />
        <Routes>
          <Route
            path={`${process.env.PUBLIC_URL}/`}
            element={<Default />}
          />
          {/* <Route path={`${process.env.PUBLIC_URL}/user/*`} element={<User />}>
        <Route path={`edituser`} element={<EditUser />} />
        <Route path={`viewuser`} element={<ViewUser />} />
        <Route path={`addnewuser`} element={<AddNewUser />} />
        </Route> */}
          {/*<Route path={`${process.env.PUBLIC_URL}/login/*`} element={<Signin />} />*/}
          <Route path={`${process.env.PUBLIC_URL}/user/*`} element={<User />} />
          <Route
            path={`${process.env.PUBLIC_URL}/edituser`}
            element={<EditUser />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/viewuser`}
            element={<ViewUser />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/addnewuser`}
            element={<AddNewUser />}
          />
        // Categories

          <Route path={`${process.env.PUBLIC_URL}/subjects/*`} element={<Subjects />} />
          <Route path={`${process.env.PUBLIC_URL}/studys/*`} element={<Study />} />
          <Route path={`${process.env.PUBLIC_URL}/studyvideo/*`} element={<StudyVideoList />} />
          <Route path={`${process.env.PUBLIC_URL}/currentaffairs/*`} element={<CurrentAffairsList />} />
          <Route path={`${process.env.PUBLIC_URL}/blog/*`} element={<Blog />} />
          <Route
            path={`${process.env.PUBLIC_URL}/addnewstudy`}
            element={<AddStudysMaterial />}
          />
          <Route path={`${process.env.PUBLIC_URL}/editStudys/:id`} element={<EditNewStudys />} />
          <Route
            path={`${process.env.PUBLIC_URL}/addnewstudyvideo`}
            element={<AddStudyVideo />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/editstudyvideo/:id`}
            element={<EditStudyVideo />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/addnewcurrentaffairs`}
            element={<AddCurrentAffairs />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/editcurrentaffairs/:id`}
            element={<EditCurrentAffairs />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/addEditblogs`}
            element={<AddBlogs />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/editcategories/:id`}
            element={<EditCategories />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/addnewsubjects/`}
            element={<SubjectsListing />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/whatsnew/`}
            element={<WhatsNew />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/addwhatsnew/`}
            element={<AddWhatsNew />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/ebook/`}
            element={<EBook />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/addebook/`}
            element={<AddEBook />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/job/`}
            element={<Job />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/addjob/`}
            element={<AddNewJob />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/dailyvocab/`}
            element={<DailyVocab />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/adddailyvocab/`}
            element={<AddNewDailyVocab />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/review/`}
            element={<Reviews />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/addreview/`}
            element={<ReviewsListing />}
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
export default Routers;
