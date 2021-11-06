import React,{useState, useRef}from "react";
import ProjectList from "../components/ProjectList";

const Home = () => {
    const [modSize, setModSize] = useState(false); //item height 변경
    const [isSelect, setIsSelect] = useState([false,false]); //item 선택

    const scrollRef = useRef([])

    const scrollTo = (index) => {
        setTimeout(() => {
            scrollRef.current[index].scrollIntoView({ behavior:"smooth", block:"center"})
        }, 200);
    }
    
    const handleIDX = (index) => {
        const newArr = Array(projectNm.length).fill(false);
        newArr[index] = true;
        setIsSelect(newArr);
        setModSize(true);
        scrollTo(index);
        window.addEventListener('wheel',() => {setModSize(false)});
    }

    let projectNm = [
        {
            id:1, 
            name : "Project Name",
            image : "https://cdn.pixabay.com/photo/2021/08/23/18/37/tea-6568547_960_720.jpg"
        },
        {
            id:2,
            name : "Project Name2"
        },
        {
            id:3,
            name : "Project Name3"
        },
        {
            id:4,
            name : "Project Name4"
        },
        {
            id:5,
            name : "Project Name5"
        },
        {
            id:6,
            name : "Project Name6"
        },
        {
            id:7,
            name : "Project Name7"
        }
    ]

    // const projectItems = document.getElementsByClassName("pi-title");
    // projectItems의 첫번째가 중앙에 위치하고 스크롤하면 올라감
    // Item을 선택하면 height:70vh로 만들기
    // height:70vh가 될때 중앙에서 위아래로 동일하게 넓어짐

    return(
        <div className="app">
            <div className="global-width">
                {projectNm.map((item, index) =>
                    <ProjectList 
                    ref={(el) => (scrollRef.current[index] = el)}
                    item={item} 
                    handleClick={()=>{
                        handleIDX(index)
                    }}
                    key={index}
                    isSelect={isSelect[index]}
                    modSize={modSize}
                    elementIndex={index}
                    />
                )}
            </div>
        </div>
    )
}

export default Home;
