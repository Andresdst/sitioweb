import React from "react"

export default (props) => {
    const certificates = props.element;
    return(
    <div className="shadow p-4 mr-4 bg-white rounded">
        <h4 className="font-bold text-blue-700">{certificates.title}</h4>
        <div className="text-center text-sm">
            <span className="inline-block p-1 mt-1 radius">{certificates.score}</span>
        </div>
    </div>
    )
}