import '../style/home.css';
import { Contacts } from '../components/contacts';
import { IconInfo } from '../assets/IconInfo';
import { Badges } from '../components/badges';
import { useState } from 'react';
import { Chip } from '../components/chip';
import cv from '../assets/downloadables/ABERUAGBA-EMMANUEL-frontend-CV.pdf'
import { ProjectCard } from '../components/project-card';
import {skills} from '../assets/img/skills';
import { frontend } from '../assets/img/project-img/projects';
import heroImg from '../assets/img/free.png';
import { OtherProjects } from '../components/other-projects';
import { others } from '../assets/img/project-img/projects';

export function Home() {

    //////////display state of contact info
    const [showInfo, setshowInfo] = useState(false);
    const displayInfo = () =>{
        setshowInfo((oldValue) => !oldValue);
    };



    return(
        <>
            <section className="hero">
                <div className="hero-img">
                    <img src={heroImg} alt="" />
                </div>
                <div className="name">
                    <h4>
                        hi, i'm
                    </h4>
                    <h1>
                        emmanuel aberuagba
                    </h1>
                    <div className='role'>
                        <h6>
                            frontend developer
                        </h6>
                        <h6>
                            ux design
                        </h6>
                        <span className='info-btn'>
                            <button type="button" onClick={displayInfo}>
                                <IconInfo visible={showInfo} />
                            </button>
                            <Contacts visible={showInfo} />
                           
                        </span>
                    </div>
                    <Badges skills={skills} />
                </div>
            </section>
            <section className='bio'>
                <div className="bio-header">
                    <h5>
                        Bio
                    </h5>
                    <p>
                        As an experienced UX designer and frontend developer, I thrive on creating intuitive digital experiences. My tenure at Amplif Digital sharpened my collaboration skills with UI designers and backend developers. I excel in UX fundamentals, delivering impactful solutions with a user-centric approach. Passionate about pushing boundaries and crafting memorable designs. 
                    </p>
                    <div className="attributes">
                        <Chip text={'available'} emphasize={true} />
                        <Chip text={'english'}  />
                        <Chip text={'+2 years'} />
                        <Chip text={'F.C.T - Abuja,  nigeria'} />
                        <Chip link={true} downloadable={true} downloadLink={cv} downloadText={'download CV'} emphasize={true}/>
                        
                    </div>
                </div>
            </section>
            <section className='projects'>
                <h5>
                    Projects
                </h5>

                <div className='frontend'>
                    <small>
                        web development
                    </small>
                    <div className="cards-wrapper">
                        {
                            frontend.map((elem, index) =>{
                                return (<ProjectCard {...elem} key={index} />)
                            })
                        }

                    </div>
                </div>

                <div className="other-projects">
                    <small>other projects</small>
                    <div className="cards-wrapper">
                        {
                            others.map((elem, index) =>{
                                return(
                                    <OtherProjects {...elem} key={index}/>
                                )
                            } 
                            )
                        }
                    </div>
                </div>
                
            </section>
        </>
    )
}