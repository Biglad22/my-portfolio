import "../style/home.css";
// import { Contacts } from '../components/contacts';
// import { IconInfo } from '../assets/IconInfo';
import { Badges } from "../components/badges";
// import { useState } from 'react';
import { Chip } from "../components/chip";
import cv from "../assets/downloadables/ABERUAGBA-EMMANUEL-frontend-CV.docx";
import { ProjectCard } from "../components/project-card";
import { skills } from "../assets/img/skills";
import { frontend } from "../assets/img/project-img/projects";
import heroImg from "../assets/img/free.png";
import { OtherProjects } from "../components/other-projects";
import { others } from "../assets/img/project-img/projects";
import { useMemo } from "react";
import { Experience } from "../components/Experience";
import { xp_data } from "../assets/experirnces-data";

export function Home() {
    //////////display state of contact info
    // const [showInfo, setshowInfo] = useState(false);
    // const displayInfo = () =>{
    //     setshowInfo((oldValue) => !oldValue);
    // };

    const years_experience = useMemo(() => {
        ///calculate years experience
        const start_year = 2023,
            this_year = new Date().getFullYear(),
            years_experience = this_year - start_year;

        return years_experience;
    }, []);

    return (
        <>
            <section className="hero">
                <div className="hero-img">
                    <img src={heroImg} alt="" />
                </div>
                <div className="name">
                    <h4>hello, I'm</h4>
                    <h1>emmanuel aberuagba</h1>
                    <div className="role">
                        <h6>Software Engineer</h6>
                        {/* <h6>ux design</h6> */}
                        {/* <span className='info-btn'>
                            <button type="button" onClick={displayInfo} >
                               <h6>contact</h6>  <IconInfo visible={showInfo} />
                            </button>
                            <Contacts visible={showInfo} />
                           
                        </span> */}
                    </div>
                    <Badges skills={skills} />
                </div>
            </section>
            <section className="bio">
                <div className="bio-header">
                    <h5>Bio</h5>
                    <p>
                        I am a dedicated Front-End Developer with a strong
                        foundation in UX design and a passion for building
                        user-centric, visually engaging web applications.
                        Proficient in HTML, CSS, JavaScript, and modern
                        frameworks like React.js and Vue.js, I specialize in
                        translating design concepts into responsive,
                        high-performance interfaces. I thrive in collaborative
                        environments and consistently contribute to the delivery
                        of seamless and efficient user experiences.
                    </p>
                    <div className="attributes">
                        <Chip text={"available"} emphasize={true} />
                        {/* <Chip text={"english"} /> */}
                        <Chip text={`+${years_experience} years experience`} />
                        <Chip text={"Abuja,  Nigeria"} />
                        <Chip
                            link={true}
                            downloadable={true}
                            downloadLink={cv}
                            downloadText={"download CV"}
                            emphasize={true}
                        />
                    </div>
                </div>
                <div className="xp-wrapper">
                    <h5>Experiences</h5>
                    <div className="cards-wrapper">
                        {xp_data.map((data) => (
                            <Experience
                                job_title={data.job_title}
                                year={data.year}
                                company={data.company}
                                key={data.company}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="projects">
                <h5>Projects</h5>

                <div className="frontend">
                    <small>web development</small>
                    <div className="cards-wrapper">
                        {frontend.map((elem, index) => {
                            return <ProjectCard {...elem} key={index} />;
                        })}
                    </div>
                </div>

                <div className="other-projects">
                    <small>other projects</small>
                    <div className="cards-wrapper">
                        {others.map((elem, index) => {
                            return <OtherProjects {...elem} key={index} />;
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
