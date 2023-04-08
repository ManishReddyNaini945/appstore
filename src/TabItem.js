import React from "react";
import "./index.css"
const TabItem=props=>{
    const{tabDetails,setActiveTabId,isActive}=props
    const{tabId,displayText}=tabDetails
    const onClickTab=()=>{
        setActiveTabId(tabId)
    }
    const activeTabClassname=isActive?"tab-button active":"tab-button"
    return(
        <li className="tab-item">
            <button onClick={onClickTab} className={activeTabClassname}>{displayText}</button>

        </li>
    )

}
export default TabItem