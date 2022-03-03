import React, { forwardRef, useState } from "react";
import { animated, useSpring, config } from 'react-spring';

const ProjectList = forwardRef((props, ref) => {

    const [toggle, setToggle] = useState(false);

    const hovered = useSpring({
        config: config.wobbly,
        scale: toggle ? 1.05 : 1,
    })

    const { size, boxSize } = useSpring({
        size: props.isSelect && props.modSize ? '60vh' : '10vh',
        config: config.default,
    })

    return (
        <animated.div
            ref={ref}
            className={props.isSelect && props.modSize ? "project-item on" : "project-item"}
            onClick={props.handleClick}
            onPointerOver={() => { setToggle(true) }}
            onPointerOut={() => { setToggle(false) }}
            style={{ ...hovered, ...boxSize, backgroundImage: `url(${props.item.image})`, height: size }}
        >
            <div className="pi-title">
                <span
                    className={props.isSelect && props.modSize ? "pi-span on" : "pi-span"}
                >{props.item.name}</span>
            </div>
        </animated.div>
    )
});

export default ProjectList;