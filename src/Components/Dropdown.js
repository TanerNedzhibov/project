import { useState } from "react"

export const Dropdown = (props) =>
{

    const jobRoles = props.jobRole

    return (
        <div >
            <select className="dropDown" defaultValue="" onChange={(event) => props.selectJob(event.target.value)}>
                {jobRoles.map((role,index) => <option key={index}>{role}</option>)}
            </select>
            
        </div>
    )
}