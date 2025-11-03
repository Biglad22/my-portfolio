import { Badges } from "./badges";
import { skills } from "../assets/img/skills";
import { useState } from "react";
import { motion } from "motion/react";
export function ProjectCard({ title, link, description, technicals, tools, inService }) {
    ////filter out skills
    const tech = skills.filter((elem) => {
        return tools.includes(elem.name);
    });

    ////handle technicals display
    const [isShowing, setIsShowing] = useState(false);

    const displayHandler = () => {
        return setIsShowing((oldValue) => !oldValue);
    };

    return (
        <>
            <motion.div
                className={`project-card ${title} ${
                    isShowing ? "project-active" : ""
                }`}
                variants={{
                    initial:{
                        opacity:0,
                        y:"2rem",
                    },
                    whileInView:{
                        opacity:1,
                        y:0,
                        transition:{
                            duration:0.5
                        }
                    }
                }}
            >
                <div className="flex items-center justify-between">
                    {inService&&(
                        <a href={link} target="_blank" className="link"  rel="noopener noreferrer">
                            <h6>{title}</h6>
                        </a>
                    )}
                    {!inService&&(
                        <>
                            <h6>{title}</h6>
                            <small style={{
                                fontWeight:500, 
                            }}>
                                OUT OF SERVICE
                            </small>
                        </>
                    )}
                </div>

                <div className="desc">
                    <p>{description}</p>
                </div>
                <button type="button" onClick={displayHandler}>
                    <small>Technical</small>
                </button>
                {isShowing && (
                    <div className="technicals">
                        <small>{technicals}</small>
                    </div>
                )}

                <Badges skills={tech} contained={true} />
            </motion.div>
        </>
    );
}
