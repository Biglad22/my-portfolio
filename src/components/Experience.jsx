import React from 'react'

export const Experience = ({job_title, company, year, job_desc}) => {
  return (
    <div className='xp-card'>
        <h5 className='xp-header'>{job_title}</h5>
        <small className='xp-company'>
            <span>
               at {company}
            </span>
            <span>
                [{year}]
            </span>
        </small>
        <div className='xp-desc'>
            <ul className='xp-desc-list'>
                {job_desc.map(item => (<li>{item}</li>))}
            </ul>
        </div>
    </div>
  )
}
