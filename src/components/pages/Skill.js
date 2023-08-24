import React from "react";


function Skill({skillObj}) {
    
    return (
            <div className="skill">
              
              <span style = {{backgroundColor: skillObj.color}}>
                
                {skillObj.skill}
                {" "} 
                {skillObj.level  === "Beginner" && "✍🏻"}
                {skillObj.level  === "Intermediate" && "👍"}
                {skillObj.level  === "Advanced" && "💪"}
            
                </span>
              
            </div>
    )
}

export default Skill
