import SoftwareDevelopment from "./Soft-dev"
import WebApp from "./web-app"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,

  } from "react-router-dom";

export default function Course(){

    let match = useRouteMatch();
    return(
        <div>
             <ul className="course-ul">
                 <li>
                     <Link to={`${match.url}/soft-dev`}>Software Development</Link>
                 </li>
                 <li>
                 <Link to={`${match.url}/web-dev`}> Web Development</Link>
                 </li>
                
             </ul>
             <Router>
             <Switch>
                 <Route path={`${match.path}/:courseId`}>
                 <SoftwareDevelopment />
                 </Route>
                 <Route path={`${match.path}/:courseId`}>
                 <WebApp />
                 </Route>
                 <Route path={match.path}>
                 <h3> please select a course</h3>
                 </Route>
             </Switch>
             </Router>
            
        </div>
    )
}

