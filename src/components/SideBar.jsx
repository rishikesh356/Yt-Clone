import {Stack} from '@mui/material';
import { categories } from '../utils/constants';// categories is array containing name and icon
const SideBar = ({selectedCategory,setselectedCategory}) => 
  (
    <Stack
     direction="row"
     sx={{
        overflowY:"auto",//clip or add scrollbar when content is too big for screen
        height:{sx:"auto",md:"95%"},
        flexDirection:{md:"column"} //to show coloumn categories in md devices and row on small devices
     }}
    >
      {categories.map((category)=>{//for instant return () else {return ()}
        return( <button className='category-btn' 
        onClick={() =>setselectedCategory(category.name)}
        style={{background:category.name===selectedCategory && '#FC1503' , color:'white'}}
        key={category.name} //check if selectedCategory=current category && always provide unique key to map
        > 
            <span style={{color:category.name===selectedCategory ?'white' :'red',marginRight:'15px'}}>{category.icon}</span>
            <span style={{opacity:category.name===selectedCategory ?'1':'0.8'}}>{category.name}</span>
        </button>
  )})}
    </Stack>
  )


export default SideBar