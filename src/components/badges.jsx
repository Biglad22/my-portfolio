
import '../style/base.css'
export function Badges({skills, contained}) {
    return(
        <>
            <div className="skills-container">
                {   
                    skills &&
                    skills.map((elem, index) =>(
                        <div className={ contained ? "skill-badge-contained " : 'skill-badge'}>
                            <img src={elem.img} alt={`frontend technology ${elem.name}`} key={index} />
                        </div>
                    )
                    )
                }
            </div>
        </>
    )
}