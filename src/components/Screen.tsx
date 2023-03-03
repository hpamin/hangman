import { useCallback, useEffect, useState } from 'react'
import word from '../jsonFile/wordList.json'
import Keyboard from './Keyboard'
import "../wave.css"
import HangmanDraw from './HangmanDraw'
import GuessWord from './GuessWord'
import useWindowDimensions from './useWindowDimensions'
function Screen() {

    /** function for get Random word **/
    const getWord = () => {return "adaptation"} 

    /** Get width **/
    const {width} = useWindowDimensions()

    /** Random Word **/
    const [wordGuess , setWordGuess] = useState(getWord)
    console.log(wordGuess);

    /** User Guess **/
    const [GuessLetters , setGuessLetters] = useState<string[]>([])
    
    /** User Guess Correct or Wrong **/
    const ActiveLetters = GuessLetters.filter((letter)=> wordGuess.includes(letter))
    const inCorrectGuess = GuessLetters.filter((letter) => !wordGuess.includes(letter))
      console.log(inCorrectGuess);
      
    /** Win or Lose **/
    const Win = wordGuess.split("").every((item)=> GuessLetters.includes(item))
    const Lose = inCorrectGuess.length === 6
    console.log(Lose);
    

    /** User Guess add in useState **/
    const addGuessLetters = useCallback((item : string)=>{
      if(GuessLetters.includes(item)) return
      setGuessLetters((Letters)=> [...Letters, item])
      console.log(GuessLetters);
    },[GuessLetters])

    /** for system keyboard **/
    useEffect(()=>{
      const handelKey = (e : KeyboardEvent) => {
          const KeyEvent = e.key
          if(!KeyEvent.match(/^[a-z]$/) || Win || Lose) return

          addGuessLetters(KeyEvent)
        }
      document.addEventListener("keypress" , handelKey)

      return () => document.removeEventListener("keypress" , handelKey)
    },[GuessLetters])

    /** press Enter to change word **/
    useEffect(()=>{
      const handelKey = (e : KeyboardEvent) => {
          const KeyEvent = e.key

          if(KeyEvent === "Enter") {
            setGuessLetters([])
            setWordGuess(getWord)
        }
        }
      document.addEventListener("keypress" , handelKey)

      return () => document.removeEventListener("keypress" , handelKey)
    },[GuessLetters])

  return (
    <section className='screen'>
      
        <div className='hangman'>
           {width > 974 && <HangmanDraw guessNum={inCorrectGuess.length} /> }
          <GuessWord GuessLetter={GuessLetters} WordsGuess={wordGuess} ShowWord={Lose} winner = {Win} 
        Looser = {Lose} />
        </div>

        <Keyboard 
        activeLetter = {ActiveLetters} 
        wrongGuess = {inCorrectGuess}
        addGuessLetter = {addGuessLetters}
        winner = {Win} 
        Looser = {Lose} />

    </section>
  )
}

export default Screen
