import React from "react"
import Nav from "./Components/Navbar.js"
import Card from "./Components/Card.js"
import data from "./data.js"

export default function App(){
    const cards = data.map(item => {
        return (
            <Card 
            key={item.key}
            {...item}/>
        )
    })
    
    return (
        <>
            <Nav />
            <section className="cards-container">
                {cards}
            </section>
        </>
    )
}

