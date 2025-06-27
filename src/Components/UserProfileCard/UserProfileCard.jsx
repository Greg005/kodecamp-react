import React from 'react'
import './UserProfileCard.css'
import profile_icon from '../Assets/my_image.jpeg'


const UserProfileCard = () => {
  return (
    <div className='upc'>
        <div className="gradiant"></div>
        <div className="profile-down">
            <img src={profile_icon} alt="" />
            <div className="profile-title">Gregory Igbokwe</div>
            <div className="profile-description">
                I'm a passionate frontend engineer currently expanding my skills in React through KodeCamp's comprehensive program.
            </div>
            <div className="profile-button"><a href="mailto:gregory@igbokwe.com">Contact Me</a></div>
        </div>
    </div>
  )
}

export default UserProfileCard