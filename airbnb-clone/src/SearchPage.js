import React from 'react'
import './searchpage.css'
import { Button } from '@material-ui/core'
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays • 26 august to 30 august • 2 guest</p>
                <h1>Stays nearby</h1>
                <Button
                variant="outlined">Cancellation Flexibility</Button>
                <Button
                variant="outlined">Type of place</Button>
                <Button
                variant="outlined">Price</Button>
                <Button
                variant="outlined">Rooms and beds</Button>
                <Button
                variant="outlined">More filters</Button>
            </div>
            <SearchResult 
                img= "https://a0.muscache.com/im/pictures/37c2e7a1-d45a-4d11-aba3-84e91054787d.jpg?im_w=720"
                location = "Austin"
                title = "Classic Austin Charm | Bungalow | SOCO"
                desc = "Entire residential in Travis Heights"
                star = "5.0"
                price = "$107 / night"/>
        </div>
    )
}

export default SearchPage
