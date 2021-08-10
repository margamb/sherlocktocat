import React, { useState, useEffect } from 'react'
import './App.css'

import sherlocktocat from './img/sherlocktocat.png'
import sherlocktocat_notFound from './img/sherlocktocat_notFound.png'
import InputSearch from './InputSearch'
import Checkbox from './Checkbox'

const initProfile = {
  name: 'Sherlocktocat',
  avatar_url: sherlocktocat,
  bio: "Searching amazing github profiles since 1887",
  followers: 500,
  following: 100,
  public_repos: 400
}

const notFound = {
  name: 'Sherlock404',
  avatar_url: sherlocktocat_notFound,
  bio: "Oops, github profile not found!!!",
  followers: 0,
  following: 0,
  public_repos: 0
}

export const APIURL = 'https://api.github.com/users/';

function App() {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(initProfile)
  const [isActive, setActive] = useState(true)

  const handleToggle = () => {
    setActive(!isActive);
  };

  useEffect(() => {

    async function fetchUser() {
      if (username !== '') {
        const res = await fetch(APIURL + username)
        if (res.status !== 200) {
          setUser(notFound)
        } else {
          const data = await res.json()
          setUser(data)
        }

      }
    }

    fetchUser()

  }, [username])

  return (
    <div className="profile_github">
      <div className="profile_main">
        <Checkbox />
        <div className="profile_main_header">
          <InputSearch
            handleToggle={handleToggle}
            isActive={isActive}
            setUsername={setUsername}
          /> 
        </div>

        <div className="profile_card">
          <div className="profile_card_background"></div>
          <h2 className="profile_card_name">{user.name}</h2>
          <img className="profile_card_avatar_url" src={user.avatar_url} />
          <p className="profile_card_bio">{user.bio}</p>

          <ul className="profile_card_details">
            <li className="profile_card_detail"><span className="number">{user.followers}</span> Followers</li>
            <li className="profile_card_detail"><span className="number">{user.following}</span> Following</li>
            <li className="profile_card_detail"><span className="number">{user.public_repos}</span> Repos</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
