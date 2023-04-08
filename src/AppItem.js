import React from "react";
import "./index.css";
const AppItem=props=>{

    const{appDetails}=props
    const[appName,imageUrl]=appDetails
    return(
        <div className="app-item">
            <img src={imageUrl} alt={appName} className="app-image"/>
            <p className="app-name">{appName}</p>

        </div>
    )
}
export default AppItem