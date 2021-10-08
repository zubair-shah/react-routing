
import {
    useParams
  } from "react-router-dom";


export default function WebApp(){
    let {courseId} = useParams(); 
    return(
        <div>
            <h1>
               
                <h3>Requested course ID: {courseId}</h3>
            </h1>
        </div>
    )
}