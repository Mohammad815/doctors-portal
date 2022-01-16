import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/AppointMent/Appointment';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Hooks/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
        <Route exact path="/home">
            <Home/>
          </Route>
        <Route exact path="/login">
            <Login></Login>
          </Route>
        <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/appointment">
            <Appointment></Appointment>
          </Route>
        </Switch> 
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
