import React from 'react'
import {Link} from 'react-router-dom'
import { Stack } from '@mui/material';//Stack is a container component for arranging elements vertically or horizontally.
import { logo } from '../utils/constants';//import all the logos from constants in utils
import SearchBar from './SearchBar';

const Navbar = () => {
  return (//p=padding stck API gives the documented functions
    <Stack direction="row" alignItems="center" p={2} sx={{
      position: 'sticky', background: '#000', top: 0,
      justifyContent: 'space-between'
    }}>
      <Link to="/" sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />

      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar