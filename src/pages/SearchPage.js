import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Search from './Search'
import "../css/SearchPage.css"
import {MdKeyboardVoice } from "react-icons/md";
import {BiImages } from "react-icons/bi";
import {SiGooglemaps } from "react-icons/si";
import {AiOutlineMore } from "react-icons/ai";
import {AiOutlineShoppingCart } from "react-icons/ai";
import {MdOutlineDescription } from "react-icons/md";
import useGoogleSearch from '../useGoogleSearch';




const SearchPage = () => {
    const {search} = useLocation();
    const input = search?.split("?")[1];
    const {data} = useGoogleSearch(input)
  return (
<div>

<div className='searchPage'>
       <div className='header'>
         <Link to="/">
           <img src="data:image/png;base64,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" alt="" />
         </Link>
         <div className='header-search'>
            <Search hiddenbuttons/>
            <div className='options'>
            <div className='options-left'>
               <div className='option'>
                  <MdKeyboardVoice />
                  <Link to="/all" className='link'>All</Link> 
               </div>
               <div className='option'>
                  <MdOutlineDescription/>
                  <Link to="/news" className='link'>News</Link> 
               </div>
               <div className='option'>
               
                  <BiImages />
                  <Link to="/images" className='link'>Images</Link> 
               </div>
               <div className='option'>
                  <AiOutlineShoppingCart/>
                  <Link to="/shoppings" className='link'>Shoppings</Link> 
               </div>
               <div className='option'>
                  <SiGooglemaps/>
                  <Link to="/maps" className='link'>Maps</Link> 
               </div>
               <div className='option'>
                  <AiOutlineMore />
                  <Link to="/more" className='link'>More</Link> 
               </div>
            
            </div>
            <div className='options-right'></div>
               <div className='option'>
                  <Link to="/settings" className='link'>Settings</Link> 
               </div>
               <div className='option'>
                  <Link to="/tools" className='link'>Tools</Link> 
               </div>
            </div>
         </div>
       </div>
    </div>

    {data &&
   
      <div className='results'>
      <p className="count"><span>About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime})</span></p> 
    

      {data?.items.map((item)=>(


         <div className='result' key={item.cacheId}>
         <a href={item.link} className='links'>
              {item.displayLink}
         </a>
         <a href={item.link} className='result-title'>
           <h3>{item.title}</h3>
         </a>
         <p className='result-paragraph'>{item.snippet}</p>
      </div>
      ))}
      


      </div>
   }
    
      
      
      )
  


</div>
)
}

export default SearchPage

