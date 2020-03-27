import React, {useEffect, useState} from "react"
//import Repos from "../data/repos"
import CR from "./componente-repo"

export default () => {
    const [Repos,setRepos] = useState([])
    const [ReposCon,setReposCon] = useState([])


    useEffect(()=>{
        const data = sessionStorage.getItem("Repos")
        let resjson
        if(data){
            resjson = JSON.parse(data)
            setReposCon(resjson.length)
            resjson= resjson.slice(1,12)
            return setRepos(resjson)
        }
        

        async function fetchRepos(){
            const response = await fetch("https://api.github.com/users/codigofacilito/repos")
            resjson = await response.json()
            setReposCon(resjson.length)

            sessionStorage.setItem("Repos", JSON.stringify(resjson))
            resjson= resjson.slice(1,12)
            setRepos(resjson)
        }
        fetchRepos()

    },[])
    return (
        <div className="mx-auto max-w-4xl mt-6">
            <header className="text-center">
                <h2 className="text-3xl font-bold">Mis repositorios</h2>
                <p>colaboracion de codigo</p>
            </header>
            <ul className="Repos-list">
            {
                Repos.map((item)=>{
                return <CR item={item} key={item.id}></CR>
                })
            }
            </ul>
            <div className="mt-8 text-center">
                <a href="https://github.com/andresdst" className="btn" target="_blank" rel="noopener noreferrer">Ver mas (+{ReposCon})</a>
            </div>
        </div>
        )
    
}