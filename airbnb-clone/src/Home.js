import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
                <Card 
                src = "https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts." />
                <Card 
                src = "https://a0.muscache.com/im/pictures/621a8986-ef80-408b-9029-b633ef5d0e2d.jpg?im_w=720"
                title="Unique stays"
                description = "Spaces that are more than just a place to sleep."/>
                <Card 
                src = "https://a0.muscache.com/im/pictures/5c188441-5a82-4c4f-877c-17b0f4188001.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."/>
            </div>
            <div className="home__section">
                <Card 
                src="https://a0.muscache.com/im/pictures/1b17de17-97d8-4391-b605-71ddb6be75f4.jpg?im_w=720"
                title = "Penthouse in London"
                description = "Enjoy the amazing sights of London with this stunning penthouse"
                price = "$100/night"/>
                <Card 
                src="https://a0.muscache.com/im/pictures/06b4a529-bac5-4a55-94be-400bf992e051.jpg?im_w=720"
                title = "Home in Houston"
                description = "Celebrate the holidays in this wonderful home"
                price = "$150/night"/>
                <Card 
                src = "https://a0.muscache.com/im/pictures/f4575985-1e64-4a7d-b12e-b7bbc5e92081.jpg?im_w=720"
                title = "Skyscraper in Katy"
                description = "Enjoy the amazing sights of Katy with this stunning penthouse"
                price = "$250/night"/>
            </div>
        </div>
    )
}

export default Home
