import React, { useState } from 'react'
import  { useNavigate } from 'react-router-dom'
import {AiOutlineSearch } from "react-icons/ai";
import {MdKeyboardVoice } from "react-icons/md";
import "../css/Search.css"


const Search = ({hiddenbuttons}) => {
    
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    
    const keyPress = (e)=>{
        if(e.key === 'Enter'){
            if(input){
                navigate(`/search?q=${input}`);
            }
        }
    }

    const search = (e) =>{
       e.preventDefault();
       navigate(`/search?q=${input}`);
    }
  return (
    <div className="search">
                <div className="icon_search">
                    <div className="search_icon"><span><AiOutlineSearch /></span></div>
                    <div className="form-group">
                        <input type="text" className="form-control" onKeyPress={keyPress} value={input} onChange={e => setInput(e.target.value)} />
                    </div>
                    <div className="voice"><span><MdKeyboardVoice /></span></div>
                </div>
                {!hiddenbuttons &&
                <div className="search_btn">
                    <button onClick={search} className="btn" type='submit' variant='outlined'>Google Search</button>
                    <button  className="btn" variant='outlined'>I'm Feeling Lucky</button>
                </div>
                }
    </div>

  )
}

export default Search