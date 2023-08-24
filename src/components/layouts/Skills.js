import React from "react";
import Skill from "../pages/Skill";

const skillData = [
    {
        skill: "HTML+CSS",
        level: "Advanced",
        color: "#FF3f",
    },
    {
        skill: "BootStrap",
        level: "Intermediate",
        color: "#0ffcc0",
    },
    {
        skill: "JavaScript",
        level: "Intermediate",
        color: "#0ffcc0",
    },
    {
        skill: "React",
        level: "Beginner",
        color: "pink",
    },
    {
        skill: "Selenium Java",
        level: "Intermediate",
        color: "#0ffcc0",
    },
    {
        skill: "Appium",
        level: "Intermediate",
        color: "#0ffcc0",
    },
    {
        skill: "Apache Jmeter",
        level: "Beginner",
        color: "pink",
    },

];


function Skills() {
    const getSkills = skillData;
    return (
        <> 
        <h5>Skills</h5>
        <div className="skills">
    
          {getSkills.map((getSkill)=> (
                <Skill skillObj={getSkill} key = {getSkill.skill} />
            ))};
        </div>
        </>
    )
}

export default Skills



// function Skills() {
//     return (
//      <div>
//         <div className="skills">
//            <span>
//            <Skill
//             name="✔HTMl+CSS"
//             emoji = "💪"
//             />
//            </span>
//            <span>
//            <Skill
//             name="✔JavaScript"
//             emoji = "👍"
//             />
//            </span>    
//         </div>
//         <div className="skills">
//             <span>
//             <Skill
//             name="✔React"
//             emoji = "🤞"
//             />
//             </span>
//             <span>
//             <Skill
//             name="✔Selenium Java"
//             emoji = "💪"
//             /> 
//             </span>
//         </div>
//         <div className="skills">
//            <span>
//            <Skill
//             name="✔Appium"
//             emoji = "✌"
//             />
//            </span>
//             <span>
//             <Skill
//             name="✔Apache Jmeter"
//             emoji = "👌"
//             />
//             </span>
//         </div>
//     </div>
//     )
// }

// export default Skills
