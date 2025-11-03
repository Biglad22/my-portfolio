import React from "react";
import { motion } from "motion/react";
export const Experience = ({job_title, company, year, job_desc }) => {
    return (
        <motion.div 
            className="xp-card"
            
            initial={{
                y:"4rem",
                opacity:0.5, 
                borderRadius:0      
            }}
            whileInView={{
                y:0,
                opacity:1,  
                borderRadius:"2rem"
            }}
            
            transition={{
                duration:0.3,
                ease:"easeInOut",
            }}
            viewport={{amount:0.60, once:true}}
        >
            <h6 className="xp-header">{job_title}</h6>
            <p className="xp-company">
                <span>{company}</span>
                <span>({year})</span>
            </p>
            {job_desc && <ul className="job_des">
                {
                    job_desc.map(desc=>(
                        <li>
                            {desc}
                        </li>
                    ))
                }
            </ul>}
        </motion.div>
    );
};
