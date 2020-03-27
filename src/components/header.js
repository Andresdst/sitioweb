import React from "react"
import Form from "../components/form"
import Illustration from "../images/undraw_feeling_proud_qne1.svg"

export default () => (
    <header className="bg-gray-400">
        <div className="container mx-auto p-10 max-w-4xl ">
            <div className="flex justify-center items-center">
                <div className="flex-1">

                    <h1 className="text-5xl font-semibold">Soy Andres Sanchez!</h1>
                    <p className="text-xl font-light">Soy Ingeniero Electronico y creador de Paginas Web</p>

                </div>
                <img src={Illustration} alt="hombre productivo" style={{height: "300px"}}></img>
            </div>
            <div>
                <Form></Form>
            </div>
        </div>

    </header>
)