import React from 'react'
import './meme.css'
// import memesData from '../src/memesData'

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(){
    //    const allMemes = allMemes.data.memes
       const randomNumber = Math.floor(Math.random()* allMemes.length)
       const url = allMemes[randomNumber].url

       setMeme(prevMeme =>({
            ...prevMeme,
            randomImage: url
       }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]:value
        }))
    }

    return(
        <main className="container">
            <div className="form">
                <div className='input'>
                    <label htmlFor="top-text">Top Text</label>
                    <input
                        id='top-text'
                        type="text"
                        placeholder='shut up'
                        className='form-input'
                        name='topText'
                        onChange={handleChange}
                        value={meme.topText}/>
                </div>
                <div className='input'>
                    <label htmlFor="bottom-text">Bottom Text</label>
                    <input
                        id='bottom-text'
                        type="text"
                        placeholder='and give me my money'
                        className='form-input'
                        name='bottomText'
                        onChange={handleChange}
                        value={meme.bottomText}/>
                </div>
                <button onClick={getMemeImage} className='form-btn'>Get a new meme image 🖼️</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
