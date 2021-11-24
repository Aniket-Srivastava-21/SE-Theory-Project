import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StudentDashboard from "./MyComponents/StudentDashboard";
import MentorDashboard from "./MyComponents/MentorDashboard";
import MentorFeedback from "./MyComponents/MentorFeedback";
import CourseDashboard from "./MyComponents/CourseDashboard";
import { ExamPage } from "./MyComponents/Exampage";
import { CoursePage } from "./MyComponents/CoursePage";
import { Login } from "./MyComponents/Login";
import { Register } from "./MyComponents/Register";
import { Footer } from "./MyComponents/Footer";
import { Header } from "./MyComponents/Header";
import { MainPage } from "./MyComponents/MainPage";
import DebitCard from "./MyComponents/DebitCard";
import Payment from "./MyComponents/Payment";
import InternetBanking from "./MyComponents/InternetBanking";
import CreditCard from "./MyComponents/CreditCard";
import PaymentSuccess from "./MyComponents/PaymentSuccess";
import Upi from "./MyComponents/Upi"
import ForgotPassword from './MyComponents/ForgotPassword';
import MentorForm from './MyComponents/MentorForm';
import MentorForm0 from './MyComponents/MentorForm0';
import AddExam from "./MyComponents/AddExam";
import TeacherDashboard from "./MyComponents/TeacherDashboard";
import Feedbacks from "./MyComponents/Feedbacks";
import { useState } from "react";



function App() {

  const [isAuthenticated, setAuthenticated] = useState(() => {
    const token = localStorage.getItem("token");
    return token !== null;
    });
  const [exam, setExam] = useState("");
  const [course, setCourse] = useState("");

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/exam">
          <ExamPage setCourse = {setCourse} />
        </Route>
        <Route exact path="/courses">
          <CoursePage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/mentordashboard">
        { isAuthenticated ? <MentorDashboard /> : <Login/> }
          
        </Route>
        <Route exact path="/studentdashboard">
          { isAuthenticated ? <StudentDashboard /> : <Login/> }
        </Route>
        <Route exact path="/courseDashboard">
        { isAuthenticated ? <CourseDashboard /> : <Login/> }
        </Route>
        <Route exact path="/feedbackform">
        { isAuthenticated ? <MentorFeedback /> : <Login/> } 
        </Route>
        <Route exact path="/feedbacks">
        { isAuthenticated ? <Feedbacks /> : <Login/> } 
        </Route>
        <Route exact path="/addexam">
        { isAuthenticated ? <AddExam /> : <Login/> } 
        </Route>
        <Route exact path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route exact path="/mentorform">
          <MentorForm exam = {exam} course = {course} />
        </Route>
        <Route exact path="/mentorform0">
          <MentorForm0/>
        </Route>

        <Route exact path="/">
          <MainPage setExam = {setExam}/>
        </Route>
        <Route exact path="/payment">
        { isAuthenticated ? <Payment /> : <Login/> } 
        </Route>
        <Route exact path="/debitcard">
        { isAuthenticated ?<DebitCard /> : <Login/> } 
        </Route>
        <Route exact path="/creditcard">
        { isAuthenticated ? <CreditCard /> : <Login/> } 
         
        </Route>
        <Route exact path="/paymentsuccess">
        { isAuthenticated ?  <PaymentSuccess /> : <Login/> } 
         
        </Route>
        <Route exact path="/internetbanking">
        { isAuthenticated ?  <InternetBanking />: <Login/> } 
         
        </Route>
        <Route exact path="/upi">
        { isAuthenticated ?   <Upi /> : <Login/> } 
        </Route>
        <Route exact path="/teacherDashboard">
        { isAuthenticated ?  <TeacherDashboard /> : <Login/> } 
          
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
