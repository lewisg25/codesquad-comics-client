import React from "react";
import FunHomeLogo from '../../public/images/images/fun-home.jpg'
import BatManLogo from '../../public/images/images/batman.jpg'
import BlackPantherLogo from '../../public/images/images/black-panther.jpg'
import HunterX from '../../public/images/images/hunter-x-hunter.jpg'
import LumberJanes from '../../public/images/images/lumberjanes.jpg'
import MarchLogo from '../../public/images/images/march.jpg'
import OnePiece from '../../public/images/images/one-piece.jpg'
import ParableLogo from '../../public/images/images/parable-of-the-sower.jpg'
import QueerLogo from '../../public/images/images/queer.jpg'
import TheWalkingDead from '../../public/images/images/the-walking-dead.jpg'
import WakeLogo from '../../public/images/images/wake.jpg'
import WatchMen from '../../public/images/images/watchmen.jpg'
import booksData from '../data/books'

const Home = () => {
    return (
       <>
         <div className="collection">
        <div className="container">
            <h1>CodeSquad Comics</h1>
            <p>CodeSquad Comics is a collection of graphic novels read by Lewis Garnett. The site is intended to display
                comic book covers along with information about each book, including the by, a rating, and other details
                about the graphic novel. Browse through the complete collection below. Click on the cover image or the
                Details link to see even more information about each graphic novel, including the publisher, genre, number
                of pages, and a brief synopsis. The About page includes metadata about this collection. Login is only
                available to the site administrator at this time.</p>
        </div>
            <div>

            </div>
        <div className="container">
            <div>
                <h1>Complete Comic Collection</h1>
            </div>
            <div className="comic-list">
                <div className="comic-card">
                    <a href="#">
                        <img src= {FunHomeLogo} alt="Fun Home"/>
                    </a>
                    <h3>Fun Home</h3>
                    <p>by Alison Bechdel</p>
                    <p>Rating: 5/5</p>
                    <a className="details-link" href="#">Details</a>
                </div>
                <div className="comic-card">
                    <a href="#">
                        <img src={WatchMen} alt="Watchmen"/>
                    </a>
                    <h3>Watchmen</h3>
                    <p>by Alan Moore</p>
                    <p>Rating: 5/5</p>
                    <a className="details-link" href="#">Details</a>
                </div>
                <div className="comic-card">
                    <a href="#">
                        <img src={HunterX} alt="Hunter x Hunter"/>
                    </a>
                    <h3>Hunter x Hunter</h3>
                    <p>by Yoshihiro Togashi</p>
                    <p>Rating: 4/5</p>
                    <a className="details-link" href="#">Details</a>
                </div>
                <div className="comic-card">
                    <a href="#">
                        <img src={LumberJanes} alt="Lumberjanes"/>
                    </a>
                    <h3>Lumberjanes</h3>
                    <p>by Noelle Stevenson</p>
                    <p>Rating: 4/5</p>
                    <a className="details-link" href="#">Details</a>
                </div>
                <div className="comic-card">
                    <a href="#">
                        <img src={OnePiece} alt="One Piece"/>
                    </a>
                    <h3>One Piece</h3>
                    <p>by Eiichiro Oda</p>
                    <p>Rating: 5/5</p>
                    <a className="details-link" href="#">Details</a>
                </div>
                <div className="comic-card">
                    <a href="#">
                        <img src={WakeLogo} alt="Wake"/>
                    </a>
                    <h3>Wake</h3>
                    <p>by Rebecca Hall</p>
                    <p>Rating: 5/5</p>
                    <a className="details-link" href="#">Details</a>
                </div>
                <div className="comic-card">
                    <a href="black-panther.html">
                        <img src={BlackPantherLogo} alt="Black Panther"/>
                    </a>
                    <h3>Black Panther</h3>
                    <p>by Stan Lee</p>
                    <p>Rating: 4/5</p>
                    <a className="details-link" href="black-panther.html">Details</a>
                </div>
                <div className="comic-card">
                    <a href="#">
                        <img src={TheWalkingDead} alt="The Walking Dead"/>
                    </a>
                    <h3>The Walking Dead</h3>
                    <p>by Robert Kirkman</p>
                    <p>Rating: 4/5</p>
                    <a className="details-link" href="#">Details</a>
                </div>
                <div className="comic-card">
                    <a href="#">
                        <img src={MarchLogo} alt="March"/>
                    </a>
                    <h3>March</h3>
                    <p>by John Lewis</p>
                    <p>Rating: 5/5</p>
                    <a className="details-link" href="#">Details</a>
                </div>
                <div className="comic-card">
                    <a href="#">
                        <img src={BatManLogo} alt="Batman"/>
                    </a>
                    <h3>Batman</h3>
                    <p>by Bob Kane</p>
                    <p>Rating: 5/5</p>
                    <a className="details-link" href="#">Details</a>
                </div>
                <div class="comic-card">
                    <a href="#">
                        <img src={QueerLogo} alt="Queer"/>
                    </a>
                    <h3>Queer</h3>
                    <p>by Various</p>
                    <p>Rating: 4/5</p>
                    <a className="details-link" href="#">Details</a>
                </div>
                <div className="comic-card">
                    <a href="#">
                        <img src={ParableLogo} alt="Parable of the Sower"/>
                    </a>
                    <h3>Parable of the Sower</h3>
                    <p>by Octavia Butler</p>
                    <p>Rating: 4/5</p>
                    <a className="details-link" href="#">Details</a>
                </div>
            </div>
            <button>DISPLAY MORE</button>
        </div>
    </div>
       </>
      
    )
}

export default Home;


