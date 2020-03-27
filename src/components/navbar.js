import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default (props) => {

    const data = useStaticQuery(graphql`
    {
        allEducationJson{
            edges{
                node{
                    slug
                    title
                    descripcion
                }
            }
        }
    }


    `)

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center">conoce sobre mi</h2>
            <nav className="flex justify-center mt-8">
                {
                    data.allEducationJson.edges.map((item,index)=>{
                        const {node} = item

                        return(
                            <article className="flex-1 bg-white shadow m-4 max-w-sm p-4">
                                <header>
                                    <p className="text-center">{node.title}</p>
                                </header>
                                <Link to={`/${node.slug}`} className="btn inline-block">ir</Link>
                            </article>
                        )
                    })
                }
            </nav>
        </div>
    )
}