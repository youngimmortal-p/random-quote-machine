import React, { useState } from 'react'
import './RandomquoteApp.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
export const RandomquoteApp = () => {
    let quotes = []; // where all the quote fetched from the api wil be stored

    async function getQuote(){
        const response = await fetch("/data.json");
        quotes = await response.json();
    }

    const [quote, setQuote] = useState({
        text: "You can do it, all you need is believe",
        author: "Youngimmortal"
    })

    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)]
        setQuote(select);
        
    }
    const twitter = () => {
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`)
    }

    const facebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com&quote=${encodeURIComponent(`${quote.text} - ${quote.author}`)}`)
        
    }
    getQuote();
  return (
    <div id='quote-box'>
        <div id="text">{quote.text}</div>
        <div id="author">- {quote.author}</div>
        <div className="bottom">
            <div className="icons">
                <a href="#" id="tweet-quote" onClick={() => twitter()}>
                    <TwitterIcon style={{color: 'white', fontSize: '40px'}}/>
                </a>
                <a href={facebook} id="post-quote">
                    <FacebookSharpIcon style={{color: 'white', fontSize: '40px' }}/>
                </a>
            </div>
            <button id="new-quote" onClick={() => random()}>New Quote</button>
        </div>
    </div>
  )
}
