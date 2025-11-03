import "../style/home.css";
import { Badges } from "../components/badges";
import { Chip } from "../components/chip";
import { ProjectCard } from "../components/project-card";
import { skills } from "../assets/img/skills";
import { frontend } from "../assets/img/project-img/projects";
import heroImg from "../assets/img/my-image.jpg";
import { OtherProjects } from "../components/other-projects";
import { others } from "../assets/img/project-img/projects";
import { useMemo } from "react";
import { Experience } from "../components/Experience";
import { xp_data } from "../assets/experirnces-data";
import {motion} from "motion/react"


const sectionVariant= {
    initial:{
        opacity:0
    },
    whileInView:{
        opacity:1,
        transition:{
            staggerChildren:0.3,
            delayChildren:0.1
        }
    }
}

const sectionAnimation = {
    variants:{sectionVariant},
    initial:"initial",
    whileInView:"whileInView",
    viewport:{amount:0.25, once:true}
}

export function Home() {

    const years_experience = useMemo(() => {
        const start_year = 2023,
            this_year = new Date().getFullYear(),
            years_experience = this_year - start_year;

        return years_experience;
    }, []);

    const bio_chips= [{
            text: "available",
            emphasize:true
        },
        {
            text: "english",
        },
        {
            text:`+${years_experience} years experience`
        },
        {
            text:"Abuja,  Nigeria"
        },{
            link:true,
            linkPath:"https://drive.google.com/file/d/1ULa3RpamzEIOgmX2tN2TMyLGpRbx_Kyi/view?usp=drive_link",
            linkText:"view CV",
            emphasize:true
        }
    ]

    return (
        <>
            <section className="hero">
                <div className="hero-img">
                    <motion.img
                        initial={{borderRadius:"0.1rem", scale:0.85, opacity: 0.2}}
                        animate={{borderRadius:"2rem", scale:1, opacity:1}}
                        transition={{
                            duration:2, 
                            type:"spring",
                            bounce:0.25,
                        }}
                        src={heroImg} alt="Emmanuel's Image" 
                    />
                </div>
                <div 
                    className="name"
                >
                    <motion.div
                        initial={{
                            x: "4rem",
                            opacity:0.2
                        }}
                        animate={{
                            x: 0,
                            opacity:1
                        }}
                        transition={{
                            duration:1
                        }}
                    >
                        <h4>hello, I'm</h4>
                        <h1>
                            emmanuel aberuagba
                        </h1>
                        <div className="role">
                            <h6>Software Engineer</h6>
                        </div>
                    </motion.div>
                    <Badges skills={skills} />
                </div>
            </section>
            <section className="bio">
                <div className="bio-header">
                    <h5>BIO</h5>
                    <p>
                        Goal-driven Frontend Developer with proven expertise in building responsive and user-focused web applications. Adept at transforming design concepts into seamless digital experiences, optimizing performance, and enhancing usability. Experienced in leading cross-functional teams and managing projects from ideation to deployment, driving impactful results.
                    </p>
                    <motion.div
                        variants={{
                            initial:{
                                opacity:0
                            },
                            whileInView:{
                                opacity:1,
                                transition:{
                                    staggerChildren: 0.3
                                }
                            }
                        }} 
                        whileInView="whileInView"
                        initial="initial"
                        viewport={{amount:1, once:true}}
                        className="attributes"
                    >   

                        {
                            bio_chips.map((chip, idx)=>(
                                <motion.div
                                    variants={{
                                        initial:{
                                            opacity:0,
                                            scale:0.8
                                        },
                                        whileInView:{
                                            opacity:1,
                                            scale: 1,
                                            transition:{
                                                type:"spring",
                                                bounce:0.4

                                            }
                                        }
                                    }} 
                                >
                                    <Chip {...chip} key={`chip-${idx}`} />
                                </motion.div>
                            ))
                        }

                        {/* <Chip text={"available"} emphasize={true} /> */}
                        {/* <Chip text={"english"} /> */}
                        {/* <Chip text={`+${years_experience} years experience`} />
                        <Chip text={"Abuja,  Nigeria"} />
                        <Chip
                            link={true}
                            linkPath="https://drive.google.com/file/d/1ULa3RpamzEIOgmX2tN2TMyLGpRbx_Kyi/view?usp=drive_link"
                            linkText={"download CV"}
                            emphasize={true}
                        /> */}
                    </motion.div>
                </div>
            </section>
            <section className="xp-wrapper">
                <h5>EXPERIENCES</h5>
                <div 
                    className="flex flex-col justify-center space-y-major items-center xp-content"
                    // variants={{
                    //     initial: {
                    //         opacity:0
                    //     },
                    //     whileInView:{
                    //         opacity:1,
                    //         transition:{
                    //             staggerChildren:0.5
                    //         }
                    //     }
                    // }}
                    // initial="initial"
                    // whileInView="whileInView"
                >

                    {xp_data.map((data) => (
                        <Experience
                            {...data}
                            key={data.company}
                        />
                    ))}
                </div>
            </section>
            <section className="projects">
                <h5>PROJECTS</h5>
                <motion.div className="frontend"
                    // variants={sectionVariant}
                    // initial="initial"
                    // whileInView="whileInView"
                    // viewport={{amount:0.5, once:true}}
                    {...sectionAnimation}
                >
                    <motion.small
                        variants={{
                            initial:{
                                opacity:0,
                                x:"2rem"
                            },
                            whileInView:{
                                opacity:1,
                                x:0,
                                transition:{
                                    duration: 0.5
                                }
                            }
                        }}
                    >
                        web applications
                    </motion.small>
                    <div 
                        className="cards-wrapper"
                    >
                        {frontend.map((elem, index) => {
                            return <ProjectCard {...elem} key={index} />;
                        })}
                    </div>
                </motion.div>

                <motion.div className="other-projects" {...sectionAnimation} viewport={{
                    amount: 0.15, once:true
                }}>
                    <motion.small
                        variants={{
                            initial:{
                                opacity:0,
                                x:"2rem"
                            },
                            whileInView:{
                                opacity:1,
                                x:0,
                                transition:{
                                    duration: 0.5
                                }
                            }
                        }}
                    >
                        landing pages
                    </motion.small>
                    <div className="cards-wrapper">
                        {others.map((elem, index) => {
                            return <OtherProjects {...elem} key={index} />;
                        })}
                    </div>
                </motion.div>
            </section>
        </>
    );
}
