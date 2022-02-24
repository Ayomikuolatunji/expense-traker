import React from "react"
import {Toolbar, Typography,Box,Input,Button} from "@mui/material"
import SearchIcon from "@material-ui/icons/Search";
import useStyle from "./styles"
import AddIcon from '@mui/icons-material/Add';
import {FaChevronCircleLeft,AiFillCloseCircle} from "react-icons/all"

export default function TopHeader(){
    const classes=useStyle()
    const [query,setQuery]=React.useState("")

    const handleQuery=(e)=>{
          setQuery(e.target.value) 
    }
    return(
        <div>
            {window.location.pathname !=="/"
            ?  <Toolbar className={classes.top}>
            <Box display="flex">
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon/>
                    </div>
                    <Input 
                    placeholder="search..." 
                    classes={{ root: classes.inputRoot, input: classes.inputInput }} 
                    value={query}
                    onChange={(e)=>handleQuery(e)}
                    />
                </div>
            </Box>
            <Typography>
               <Button>
                  <AddIcon />
               </Button>
            </Typography>
        </Toolbar> : <div>
                 <Box className={classes.top}>
                     <div>
                        <FaChevronCircleLeft className="inline"/>
                        <span>Home</span>
                     </div>
                    <div>
                       <span>Cancel</span>
                      <AiFillCloseCircle className="inline"/>
                    </div>
                 </Box>
            </div>}
    </div>
    )
}