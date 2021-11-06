import React ,{forwardRef, useState}from "react";
import { animated, useSpring, config} from 'react-spring';

const ProjectList = forwardRef((props,ref) => {

    const [toggle, setToggle] = useState(false);


    const hovered = useSpring({
        scale: toggle ? 1.05 : 1,
        config: config.wobbly,
    })


    return(
        <animated.div 
        ref={ref}
        className={props.isSelect && props.modSize ? "project-item on" : "project-item"}
        onClick={props.handleClick}
        onPointerOver={() => {setToggle(true)}}
        onPointerOut={() => {setToggle(false)}}
        style={{backgroundImage:`url(${props.item.image})`},hovered}
        >
            <div className="pi-title">
                <span className={props.isSelect && props.modSize ? "pi-span on" : "pi-span"}>{props.item.name}</span>
            </div>
        </animated.div>
    )
});

export default ProjectList;