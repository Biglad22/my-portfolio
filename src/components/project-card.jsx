import { Badges } from "./badges";
import { skills } from "../assets/img/skills";
import { useState } from "react";

export function ProjectCard({ title, link, description, technicals, tools }) {
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
            <div
                className={`project-card ${title} ${
                    isShowing ? "project-active" : ""
                }`}
            >
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <h6>{title}</h6>
                </a>

                <div className="desc">
                    <p>{description}</p>
                </div>
                <button type="button" onClick={displayHandler}>
                    <small>technicals</small>
                </button>
                {isShowing && (
                    <div className="technicals">
                        <small>{technicals}</small>
                    </div>
                )}

                <Badges skills={tech} contained={true} />
            </div>
        </>
    );
}
