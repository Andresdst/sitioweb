import React from "react"


export default () => (
    <form className="mt-10 text-center">
        <label htmlFor="contacto" className="block text-gray-800 text-sm mb-2">Contactame para realizar ese proyecto: </label>
        <div className="flex shadow rounded bg-white border p-2">
            <textarea 
            id="contacto"
            name="contacto"
            className="flex-1 py-2 px-3 text-gray-800 focus:outline-none focus:shadow-outline">

            </textarea>
            <button className="btn ml-4">Enviar</button>
        </div>

    </form>
)