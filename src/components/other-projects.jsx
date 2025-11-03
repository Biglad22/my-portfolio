import { useState } from "react";
import { motion } from "motion/react";
export function OtherProjects({ name, link }) {

    const [isLoading, setIsLoading] = useState(true)
    return (
        <>
            <motion.div className="other-proj-wrapper"
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
                <p className="card-link">
                    <a href={link} className="link" target="_blank" rel="noopener noreferrer">
                        {name}
                    </a>
                </p>
                <div className="iframe-container">
                    <motion.div className={`loader ${isLoading? "isLoading" : "isLoaded"}`}
                        whileInView={ isLoading ? {
                            opacity: [1, 0.8, 1],
                            scale: [1, 0.99, 1]
                        } : null}   
                        transition={{
                            duration:1.5,
                            repeat: Infinity,      
                            repeatType: "loop",    
                            ease: "easeInOut",
                        }}
                    >
                        
                    </motion.div>
                    <iframe
                        src={link}
                        loading="lazy"
                        frameborder="0"
                        onError={()=>setIsLoading(true)}
                        onLoad={()=>setIsLoading(false)}
                        onLoadStart={()=>setIsLoading(true)}
                        title={`live page of ${name}`}
                    ></iframe>
                </div>
            </motion.div>
        </>
    );
}
