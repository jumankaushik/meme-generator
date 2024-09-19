import './header.css'

export default function Header(){
    return(
        <header className='header'>
            <img src="./troll-face.png" alt="header img" className="header-img" />
            <h2 className="title">Meme Generator</h2>
            {/* <h4 className="project">React Project</h4> */}
        </header>
    )
}