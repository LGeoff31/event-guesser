import React, {useState} from "react";
import "./App.css"
import levels from "./levels.js";
import images from "./endImages.js";
import ProgressBar from "./progress.js";

const App = () => {
    const [level, setLevel] = useState(0);
    const [points, setPoints] = useState(0);
    const [choiceChoosen, setChoiceChoosen] = useState(false);
    const [gameEnded, setGameEnded] = useState(false);
    
    const nextLevel = () => {
        if (!(level >= levels.length-1)) {
            setLevel(oldLevel => oldLevel + 1);
        }

        setChoiceChoosen(false);
        if (level === levels.length-1) {
            setGameEnded(true);
        }
    }
    const getCorrectButton = (currentOption, index) => {
        const correctIndex = index === levels[level].correctIndex;
        if (choiceChoosen && correctIndex) {
            return <button key={index} onClick={() => handleChoice(index)} className="option green"> {currentOption} </button>
        }
        else if (choiceChoosen && !correctIndex) {
            return <button key={index} onClick={() => handleChoice(index)} className="option red"> {currentOption} </button>
        }
        else {
            return <button key={index} onClick={() => handleChoice(index)} className="option"> {currentOption} </button>
        }
    }
    const handleCorrect = () => {
        if (!choiceChoosen) {
            setPoints((oldPoints) => oldPoints + 10);
        }


    }
    const handleChoice = (index) => {
        if (index === levels[level].correctIndex) {
            handleCorrect();
        }
        setChoiceChoosen(true);
    }
    const outputMessage = (points) => {
        if (points === 0) {
            return (
                <div> 
                    <p className="status"> Status: {points}%</p>
                    <br/>
                    <p> No knowledge in the sport of Track and Field :(</p>
                        <img className="outputImage" 
                        src={images[0]} 
                        alt=""
                    />
                </div>
            );
        }
        else if (1 <= points && points <= 39) {
            return (
                <div> 
                    <p className="status" > Status: {points}%</p>
                    <br/>
                    <p> Very scarce knowledge in the sport of Track and Field</p>
                    <img className="outputImage" 
                        src={images[1]} 
                        alt=""
                    />
                </div>
            )
        }
        else if (40 <= points && points <= 69) {
            return (
                <div> 
                    <p className="status"> Status: {points}%</p>
                    <br/>
                    <p> Decently knowledgable in the sport of Track and Field</p>
                    <img className="outputImage" 
                        src={images[2]} 
                        alt=""
                    />
                </div>
            );
        }
        else if (70 <= points && points <= 99) {
            return (
                <div> 
                    <p className="status"> Status: {points}%</p>
                    <br/>
                    <p> Extreamly knowledgable about Olympic Athletes :)</p>
                    <img className="outputImage" 
                        src={images[3]} 
                        alt=""
                    />
                </div>
            );
        }
        else {
            return (
                <div> 
                    <p className="status"> Status: {points}%</p>
                    <br/>
                    <p> "PERFECT SCORE!!! YOU MUST HAVE OLYMPIC ATHLETES ON THE BACK OF YOUR HAND :)</p>
                    <img className="outputImage" 
                        src={images[4]} 
                        alt=""
                    />
                </div>
            );       
        }
    }
    
    return (
        <div className="app">   
            {gameEnded === true ? 
                <div className="outputMessage"> 
                    <h1>Quiz Completed</h1> 
                    <br/>
                    <p className="points"> Total Points Achieved: {points} </p>
                    <br/>
                    <p className="outputMessage">{outputMessage(points)} </p>
                    <p className="name"> By Geoffrey Lee</p>
                </div>
            :
                <div>
                    <h1 className="title"> Guess the Event</h1>
                    <p className="points"> Points: {points} </p>
                    <div className="level">
                        <p> Level: {level+1}/{levels.length}</p>
                        <ProgressBar bgcolor="#00695c" completed={(level/levels.length) * 100} />
                    </div>
                    <div className="container"> 
                        <div className="progress-bar"> 

                        </div>
                    </div>
                    <h2 className="athlete-name">  {levels[level].name} </h2>
                    <img 
                        className="runner-image" 
                        src={choiceChoosen ? levels[level].answerImage : levels[level].image} 
                        alt=""
                    />
                    <div className="bottom-buttons">
                        {choiceChoosen === true ? <button className="button hidden" onClick={() => nextLevel()} > Next </button> : null} 
                        <div className="options">
                        
                            {levels[level].options.map((currentOption, index) => {
                                return getCorrectButton(currentOption, index);
                            })}
                        </div>  
                        {choiceChoosen === true ? <button className="button" onClick={() => nextLevel()} > Next </button> : null} 
                    </div>
                    <p className="name"> By Geoffrey Lee</p>
                    
                </div>
            }
        </div>

    )
}


export default App;