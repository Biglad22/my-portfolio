import "../style/base.css";
import styled from "styled-components";

const SkillBadge = styled.div`
    width: ${(props) => (!props.contained ? "4rem" : "2rem")};
    height: ${(props) => (!props.contained ? "4rem" : "2rem")};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    background-color: var(--first-bg);
    border: 1px solid var(--card-bg);
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.05);
    padding: 2px;
    transition: all 0.3s;

    &:hover {
        border: ${(props) => `1px solid ${props.color}`};
        box-shadow: ${(props) =>
            `0 0 ${props.contained ? "10px" : "24px"} 0 ${props.color}`};
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
            <div className="skills-container">
                {skills &&
                    skills.map((elem, index) => (
                        <SkillBadge color={elem.color} contained={contained}>
                            <img
                                src={elem.img}
                                alt={`frontend technology ${elem.name}`}
                                key={index}
                            />
                        </SkillBadge>
                    ))}
            </div>
        </>
    );
}
