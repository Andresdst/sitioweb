import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Posts from "./posts"
import Certificates from "./certificates"
import Cursos from "./cursos"

export default () => {
    const data = useStaticQuery(graphql`{

        codigofacilitoJson {
            data {
              certificates {
                code
                title
                score
              }
              finished_courses {
                title
                url
              }
            }
          }

    }`) //hook que gatsby provee
    console.log(data)
    return(
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                   <Posts data={data.codigofacilitoJson.data.certificates}
                    card={Certificates}
                    title="Mis Certificados Online"></Posts>
                </div>
            </div>

            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                   <Posts data={data.codigofacilitoJson.data.finished_courses}
                    card={Cursos}
                    title="Mis Cursos Online"></Posts>
                </div>
            </div>
        </section>

    )
}

/*
            <div className="mt-24">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center">mis cursos online</h2>
                        <div className="flex mt-4">
                            {
                                data.codigofacilitoJson.data.finished_courses.map(finished_courses=>(
                                    <div className="shadow p-4 mr-4 bg-white rounded">
                                        <h4 className="text-center text-sm">
                                            <a href={finished_courses.url} target="_blank" rel="noopener noreferrer">{finished_courses.title}</a>
                                        </h4>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
*/