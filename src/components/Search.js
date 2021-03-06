import React from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer'
function Search({ hiddenButtons }) {
    const [{ }, dispatch] = useStateValue()
    const [input, setInput] = useState("")
    const history = useHistory()
    const search = e => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        setInput("")
        history.push('/search')
    }
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {
                !hiddenButtons ? (
                    <div className="search__buttons">
                        <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                        <Button variant="outlined">I'm Feeling Lucky</Button>
                    </div>
                ) : (
                        <div className="search__buttons">
                            <Button type="submit" onClick={search} variant="outlined" className="search__buttonsHidden">Google Search</Button>
                            <Button variant="outlined" className="search__buttonsHidden">I'm Feeling Lucky</Button>
                        </div>
                    )
            }


        </form>
    )
}

export default Search
