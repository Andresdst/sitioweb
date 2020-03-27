import React from "react"

export default (props) => (
    <li className="flex items-center">
        <div className="w-11/12 overflow-x-hidden">
            <h4 className="text-blue-700 font-bold truncate">{props.item.name}</h4>
            <p className="text-sm text-gray-700 overflow-x-hidden" style={{height:"1.5em"}}>{props.item.description}</p>
        </div>
        <div className="flex-1 text-right">
            <a href={props.item.html_url} target="_blank" rel="noopener noreferrer"> Ver </a>
        </div>
    </li>
)