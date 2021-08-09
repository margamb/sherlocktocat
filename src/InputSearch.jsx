import React from 'react'
import './InputSearch.css'

function InputSearch({handleToggle, isActive, setUsername}) {

    function handleUser(ev) {
        ev.preventDefault()
        setUsername(ev.target.user.value)
    console.log(setUsername)
      }

    return(
        <div className="input_box">
            <form className={`form ${isActive ? '' : 'form_open'}`} onSubmit={handleUser}>
                <input className="form_searcher" type="text" name="user" />
                <button className="form_search-icon" type="submit" value="" onClick={handleToggle} />
            </form>
        </div>
    )
}

export default InputSearch;