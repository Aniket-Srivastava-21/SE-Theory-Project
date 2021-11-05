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

import ForgotPassword from "./MyComponents/ForgotPassword";
import MentorForm from "./MyComponents/MentorForm";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/exam">
          <ExamPage />
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
          <MentorDashboard />
        </Route>

        <Route exact path="/studentdashboard">
          <StudentDashboard />
        </Route>

        <Route exact path="/courseDashboard">
          <CourseDashboard />
        </Route>

        <Route exact path="/feedback">
          <MentorFeedback />
        </Route>

        <Route exact path="/forgotpassword">
          <ForgotPassword />
        </Route>

        <Route exact path="/mentorform">
          <MentorForm />
        </Route>

        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/payment">
          <Payment />
        </Route>
        <Route exact path="/debitcard">
            <DebitCard />
        </Route>
        <Route exact path="/creditcard">
          <CreditCard />
        </Route>
        <Route exact path="/paymentsuccess">
          <PaymentSuccess />
        </Route>
        <Route exact path="/internetbanking">
          <InternetBanking />
        </Route>
        <Route exact path="/upi">
          <Upi />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
