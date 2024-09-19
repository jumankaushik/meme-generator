import React from 'react'
import './meme.css'
import memesData from '../src/memesData'

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImage, setAllMemeImage] = React.useState(memesData)

    function getMemeImage(){
       const memeArr = allMemeImage.data.memes
       const randomNumber = Math.floor(Math.random()* memeArr.length)
       const url = memeArr[randomNumber].url

       setMeme(prevMeme =>({
            ...prevMeme,
            randomImage: url
       }))
    }


    return(
        <main className="container">
            <div className="form">
                <div className='input'>
                    <label htmlFor="top-text">Top Text</label>
                    <input id='top-text' type="text" placeholder='shut up' className='form-input'/>
                </div>
                <div className='input'>
                    <label htmlFor="bottom-text">Bottom Text</label>
                    <input id='bottom-text' type="text" placeholder='and give me my money' className='form-input'/>
                </div>
                <button onClick={getMemeImage} className='form-btn'>Get a new meme image 🖼️</button>
            </div>
            <img src={meme.randomImage} alt="meme" className='meme-img' />
        </main>
    )
}