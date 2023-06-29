import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';//Paper:it is a div with white background and some elevation
//IconButton : button with icon
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    const [searchTerm, setsearchTerm] = useState("");
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(searchTerm)
        {
            navigate(`/search/${searchTerm}`)//navigate to searchterm if it exists
            setsearchTerm("")//setsearchterm to blank
        }
    }
    return (
        <Paper
            component='form'
            onSubmit={ handleSubmit}//on submit go to handle click
            sx={{

                borderRadius: 20,
                border: ' 1px solid #e3e3e3',
                pl: 2,//padding left
                boxShadow: 'none',
                mr: { sm: 5 } //margin on right for small devices
            }
            }
        >
            <input
                className='search-bar'
                placeholder='search...'
                value={searchTerm}//value=searchTerm
                onChange={(e) =>  setsearchTerm(e.target.value)}//populate search term with imput value
            />
            <IconButton
                type="submit"
                sx={{ p:'10px',color:'red'}}
            >
                <Search />
            </IconButton>
        </Paper>//it is a div with white background and some elevation

    )
}

export default SearchBar