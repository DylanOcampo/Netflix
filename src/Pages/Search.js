import { NavBar } from "../components/NavBar.js"
import { SearchElement } from "../components/SearchElement.js"

import React, { useContext } from 'react';
import { ElementContext2 } from '../Context/SearchContext.js';


export const Search = () => {
    const { value } = useContext(ElementContext2);
    return (    
        <div>

            <SearchElement query={value}></SearchElement>
            <NavBar baseState={"movies"} isSearchActive={true}/>
        </div>

    ) 

}