import React from "react";

const ProjectList = (props) => {
    return(
        <div 
        className={props.isSelect && props.modSize ? "project-item on" : "project-item"}
        onClick={props.handleClick}
        style={{backgroundImage:`url(${props.item.image})`}}
        >
            <div className="pi-title">
                <span className={props.isSelect && props.modSize ? "pi-span on" : "pi-span"}>{props.item.name}</span>
            </div>
        </div>
    )
}

export default ProjectList;