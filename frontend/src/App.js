import React from 'react'
import { Footer } from './MyComponents/Footer'
import { Header } from './MyComponents/Header'
import { MainPage } from './MyComponents/MainPage'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import { ExamPage } from './MyComponents/Exampage';
import { CoursePage } from './MyComponents/CoursePage';
import { Login } from './MyComponents/Login';
import { Register } from './MyComponents/Register';

const App = () => {
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
          	<Route exact path="/">
            	<MainPage/>
          	</Route>
        </Switch>
        <Footer/>
    </Router>
  )
}

export default App;