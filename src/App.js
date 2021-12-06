import './App.css';
import { Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import addUser from './pages/addUser';
import EditUser from "./pages/editUser";


function App() {
  return (
   <>
    <Switch>
      <Route exact path="/" component= {Home} />
      <Route exact path="/addUser" component= {addUser} />
      <Route exact path="/editUser/:id" component= {EditUser} />
      


    </Switch>
   </>
  );
}

export default App;
