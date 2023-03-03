import React from 'react'

const HEAD = (
    <div className='Head' />
)
const BODY = (
    <div className='Body' />
)
const LEFT_HAND = (
    <div className='LeftHand' />
)
const RIGHT_HAND = (
    <div className='RightHand' />
)
const LEFT_LEG = (
    <div className='LeftLeg' />
)
const RIGHT_LEG = (
    <div className='RightLeg' />
)

type HangmanDraw = {
    guessNum : number
}

const Person = [HEAD, BODY, LEFT_HAND, RIGHT_HAND, LEFT_LEG, RIGHT_LEG]

export default function HangmanDraw({guessNum} : HangmanDraw ) {
  
  return (
    <div className='HangmanDraw'>

        <div className='HangmanBase'>
            {Person.slice(0 , guessNum)}
            <div className='upLine' />
            <div className='upLineRight' />
            <div className='verticalLine' />
            <div className='downLine' />

        </div>

    </div>
  )
}
