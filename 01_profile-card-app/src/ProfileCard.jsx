import React from 'react'

// In this project I learned or revise How to create component(like ProfileCard) and pass the props to them.

function ProfileCard(props) {
  return (
    <div style={{backgroundColor: props.color}}
    className={`w-72 h-96 flex flex-col justify-center items-center gap-10 bg-gray-300 px-5 py-12 rounded-2xl ${props.bgColor}`}>
        <img className="w-36 h-36 object-cover rounded-full border-4 border-black" src={props.image} alt={props.name} />
        <div>
        <h2>Name:- {props.name}</h2>
        <p>Bio:- {props.bio}</p>
        </div>
    </div>
  )
}

export default ProfileCard