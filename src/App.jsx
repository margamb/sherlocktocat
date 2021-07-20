import React, { useState, useEffect } from 'react'
import './App.css'

export const APIURL = 'https://api.github.com/users/';

function App() {
  const [username, setUsername] = useState('margamb')
  const [user, setUser] = useState({})

  useEffect(() => {

    async function fetchUser() {
      const res = await fetch(APIURL + username)
      const data = await res.json()
      setUser(data)
    }
    if(username !== '') { // why?
      fetchUser()
    }

    
  }, [username])

  function handleUser(ev) {
    ev.preventDefault()
    setUsername(ev.target.user.value)
  }
 
  return (
    <div className="App">
      <form onSubmit={handleUser}>
        <input type="text" placeholder="search a Github user" name="user" />
        <input type="submit" value="submit" />
      </form>
      <p>{user.name}</p>

      <div className="profile">
        <img className="avatar_url" src={user.avatar_url} />

        <h2 className="name">{user.name}</h2>
        <p className="bio">{user.bio}</p>

        <ul>
          <li>{user.followers}</li>
          <li>{user.following}</li>
          <li>{user.public_repos}</li>
        </ul>
      </div>
    </div>
  )
}

export default App
