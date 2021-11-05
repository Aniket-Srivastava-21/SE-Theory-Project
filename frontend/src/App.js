import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import StudentDashboard from './MyComponents/StudentDashboard';
import MentorDashboard from './MyComponents/MentorDashboard';
import MentorFeedback from './MyComponents/MentorFeedback';
import CourseDashboard from './MyComponents/CourseDashboard';
import { ExamPage } from './MyComponents/Exampage';
import { CoursePage } from './MyComponents/CoursePage';
import { Login } from './MyComponents/Login';
import { Register } from './MyComponents/Register';
import { Footer } from './MyComponents/Footer'
import { Header } from './MyComponents/Header'
import { MainPage } from './MyComponents/MainPage'
import ForgotPassword from './MyComponents/ForgotPassword';
import MentorForm from './MyComponents/MentorForm';

function App() {
  return (
    <Router>
    
      <Header/>
    
      <Switch>
    
        <Route exact path="/exam">
          <ExamPage/>
        </Route>
    
        <Route exact path="/courses">
          <CoursePage/>
        </Route>
    
        <Route exact path="/login">
          <Login/>
        </Route>
    
        <Route exact path="/register">
          <Register/>
        </Route>
    
        <Route exact path='/mentordashboard'>
          <MentorDashboard />
        </Route>

        <Route exact path='/studentdashboard'>
          <StudentDashboard />
        </Route>

        <Route exact path="/courseDashboard">
          <CourseDashboard/>
        </Route>
    
        <Route exact path="/feedback">
          <MentorFeedback/>
        </Route>

        <Route exact path="/forgotpassword">
          <ForgotPassword/>
        </Route>

        <Route exact path="/mentorform">
          <MentorForm/>
        </Route>

        <Route exact path="/">
          <MainPage/>
        </Route>
    
      </Switch>
    
      <Footer/>
    
    </Router>

  );
}

export default App;
