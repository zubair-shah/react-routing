
import './App.css';
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Course from './courses/Course';
import Nonpath from './404'
// import useCallback from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
} from 'react-router-dom'

function App() {
  // const history = useHistory();
  // const handleOnClick = useCallback(() => history.push('/about'), [history]);
  return (
    <div className="app">
    
     <Router> 
       <div>
       <header className="App-header">
         <nav>
           <ul>
             <li>
               <Link to="/">Home</Link>
             </li>
            
               
               {/* <Link to="/about">About</Link> */}
          
             <li>
               <Link to="/courses">Courses</Link>
             </li>
             <li>
               <Link to="/contact">Contact</Link>
             </li>
             <li>
               <Link to="/non">Non</Link>
             </li>

           </ul>
         </nav>
         </header>

         <Switch>
           <Route path='/about'>
          <About />
           </Route>
           <Route path='/contact'>
          <Contact />
           </Route>
           <Route path='/courses'>
          <Course />
           </Route>
           <Route exact path='/'>
          <Home />
           </Route>
           <Route path='/non'>
          <Nonpath />
           </Route>
         </Switch>
       </div>
     </Router>

     
       {/* <About />
        <Home />
        <Contact />  */}
      
    </div>
  );
}

export default App;
