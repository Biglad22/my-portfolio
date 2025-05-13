import React from "react";

export const Experience = ({ job_title, company, year }) => {
    return (
        <div className="xp-card">
            <h5 className="xp-header">{job_title}</h5>
            <p className="xp-company">
                <span>{company}</span>
                <small>{year}</small>
            </p>
        </div>
    );
};
