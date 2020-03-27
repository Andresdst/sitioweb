import React from "react"
import Navbar from "../components/navbar"
import { graphql, Link } from "gatsby"

export default (props) => {
    const pageData = props.data.educationJson
    return(
        <div>
            <header className="py-12 border-blue-700 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
                    <Link to="/" className="uppercase umderline text-pink-500">Regresar al inicio</Link>
                    <h2 className="capitalize text-6xl font-bold text-center">{pageData.title}</h2>
                    <p className="text-xl text-center">{pageData.descripcion}</p>
                </div>
            </header>
            <ul className="max-w-4xl mx-auto pb-8">
                {
                    pageData.items.map((item,index)=>(
                        <li className="bg-white shadow mt-4 flex" key={index}>
                            <p className="vertical-text">{pageData.slug}</p>
                            <div className="flex item-center flex-1 p-8">
                                <div className="flex-1">
                                    <h3>{item.name}</h3>
                                    {
                                        item.degree && <span className="inline-block p-2 radius bg-purple-200 text-purple-700">{item.degree}</span>
                                        
                                    }
                                    {
                                        item.url && <a href={item.url} className="btn mt-4 inline-block" target="_blank" rel="noopener noreferrer">ver mas</a>
                                    }
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <Navbar/>
        </div>
    )
}

export const query = graphql`
    query($slug : String){
        educationJson(slug:{ eq: $slug }) {
            title
            descripcion
            slug
            items{
                name
                degree
                url
            }
        }
    }
`