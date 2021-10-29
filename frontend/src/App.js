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

function App() {
  return (
    <Router>
      <Switch>
        
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

      </Switch>
    </Router>

  );
}

export default App;
