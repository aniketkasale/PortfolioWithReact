
import './App.css';
import Home from './components/Home/home';
import {Switch,Route,Link} from "react-router-dom"
import More from './components/more/more';
import Blogs from './components/blogs/blogs';
import Projects from './components/projects/projects';
function App() {
  return (

<Switch>
  <Route path="/home" component={Home}/>
  <Route path="/more" component={More}/>
  <Route path="/blogs" component={Blogs}/>
  <Route path="/projects" component={Projects}/>


  
</Switch>

  );
}

export default App;
