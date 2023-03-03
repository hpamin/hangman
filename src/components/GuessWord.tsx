import React from 'react'
import { Icon } from '@iconify/react';


type WordsGuessProps = {
    GuessLetter : string[],
    WordsGuess : string,
    ShowWord : boolean,
    winner? : boolean , 
    Looser? : boolean
}
export default function GuessWord({GuessLetter, WordsGuess, ShowWord, winner, Looser} : WordsGuessProps) {

  return (
    <div className='GuessWord'>
        <div className='Hearts'>
            {winner && <h2> You <span style={{color: "#00ff00"}}> Win </span></h2> }
            {Looser && <h2> You <span style={{color: "red"}}> Lose </span></h2> }
        </div>
        <div className='wordLetterGuess'>
            {WordsGuess.split("").map((item , index)=>
                <h2 className='wordGuess' key={index}> <span style={{visibility : GuessLetter.includes(item) || ShowWord ? "visible" : "hidden" , color: !GuessLetter.includes(item) ? "red" : "white" }}> {item} </span></h2>
            )}
        </div>
    </div>
  )
}
