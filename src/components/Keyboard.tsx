import React, { useState } from 'react'
import word from '../jsonFile/keyboardWord.json'
import "../wave.css"

type KeyboardProps = {
  activeLetter : string[],
  wrongGuess : string[],
  winner? : boolean ,
  Looser? : boolean,
  addGuessLetter : (letter : string) => void  
}
export default function Keyboard({activeLetter, wrongGuess, addGuessLetter, winner = false, Looser = false} : KeyboardProps) {

  const [keyboardWord , setKeyboardWord] = useState(word)


  return (
    <div className='Keyboard'>

      <div className='keyboardKeys'>
        {keyboardWord.map((item)=>{
          const IsActive = activeLetter.includes(item)
          const InActive = wrongGuess.includes(item)
          return(
            <div className='key'>
                <div className='shadow'></div>
                <button
                 onClick={()=>addGuessLetter(item)}
                 className={`btnKeyboard ${IsActive && "active"} ${InActive && "inactive"} `}
                 key={item}
                 disabled = {IsActive || InActive || winner || Looser}
                 > {item} </button>
            </div>
          )
        })}
      </div>

    </div>
  )
}
