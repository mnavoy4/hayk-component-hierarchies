import React from "react"
import "./Details.css"

export default function Details({description, founders, employees, owner, headquarters, yearFounded }){
    const $founders = founders.map((founder, index) => {
        return founder.url
            ? <a href={founder.url} key={founder.id}>{founder.label}{index < founders.length - 1? ", " : ""}</a>
            : <span key={founder.id}>{founder.label}{index < founders.length - 1 ? ", " : ""}</span>
    })
    const $owner = owner.url
        ? <a href={owner.url}>{owner.label}</a>
        : <span>{owner.label}</span>
    const $headquarters = headquarters.url
        ? <a href={headquarters.url}>{headquarters.label}</a>
        : <span>{headquarters.label}</span>
    return (
        <section className="details">
            <p className="description">{description}</p>
            <ul>
                <li>
                    <dt>Founder(s):</dt>
                    <dd>{$founders}</dd>
                </li>
                <li>
                    <dt>Employees:</dt>
                    <dd>{employees}</dd>
                </li>
                <li>
                    <dt>Owner:</dt>
                    <dd>{$owner}</dd>
                </li>
                <li>
                    <dt>Headquarters location:</dt>
                    <dd>{$headquarters}</dd>
                </li>
                <li>
                    <dt>Founded:</dt>
                    <dd>{yearFounded}</dd>
                </li>
            </ul>
        </section>
    )
}
