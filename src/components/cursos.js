import React from "react"

export default (props) => {
    const curso = props.element;
    return (
    <div className="shadow p-4 mr-4 bg-white rounded">
        <h4 className="text-center text-sm">
            <a href={curso.url} target="_blank" rel="noopener noreferrer">{curso.title}</a>
        </h4>
    </div>
    )

}
