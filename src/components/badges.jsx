import "../style/base.css";
import styled from "styled-components";
import { motion } from "motion/react";
const SkillBadge = styled(motion.div)`
    width: ${(props) => (!props.contained ? "4rem" : "2rem")};
    height: ${(props) => (!props.contained ? "4rem" : "2rem")};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    background-color: var(--first-bg);
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.05);
    padding: 2px;
    transition: all 0.3s;

    &:hover {
        padding: 2px;
    }

    img {
        width: 80%;
        height: 80%;
        object-fit: contain;
        -o-object-fit: contain;
        object-position: center;
        -o-object-position: center;
    }
`;

export function Badges({ skills, contained = false }) {
    return (
        <>
            <motion.div 
                className="skills-container"
                variants={{
                    visible:{
                        transition:{
                            staggerChildren:0.1,
                        }
                    }
                }}
                viewport={{amount:1}}
                whileInView="visible"
            >
                {skills &&
                    skills.map((elem, index) => (
                        <SkillBadge 
                            key={index}
                            initial={{
                                boxShadow:`0 0 ${elem.contained ? "10px" : "24px"} 0 rgba(0, 0, 0, 0.05)`,
                                border:"1px solid rgba(0, 0, 0, 0.05)",
                            }}
                            whileHover={{
                                border:`1px solid ${elem.color}`,
                                boxShadow: `0 0 ${elem.contained ? "10px" : "24px"} 0 ${elem.color}`
                            }}
                            variants={{
                                visible:{
                                    border: ["1px solid rgba(0, 0, 0, 0.05)", `1px solid ${elem.color}`, "1px solid rgba(0, 0, 0, 0.05)"],
                                    boxShadow: [ `0 0 ${elem.contained ? "10px" : "24px"} 0 rgba(0, 0, 0, 0.05)`, `0 0 ${elem.contained ? "10px" : "24px"} 0 ${elem.color}`, `0 0 ${elem.contained ? "10px" : "24px"} 0 rgba(0, 0, 0, 0.05)`],
                                }
                            }}
                            color={elem.color} contained={contained}
                        >
                            <img
                                src={elem.img}
                                alt={`frontend technology ${elem.name}`}
                            />
                        </SkillBadge>
                    ))}
            </motion.div>
        </>
    );
}
