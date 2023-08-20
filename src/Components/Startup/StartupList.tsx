import { Fragment, ReactElement, useEffect, useState } from "react";
// import namelist from '../NameList'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function StartupList(): ReactElement {

  const [data, setdata] = useState([])
  
  
  useEffect( () =>{
  fetch('/api/startups')
  .then(response => response.json())
  .then( a => {setdata(a)})  
  },[])
  console.log(data)

  const CompanyLists = data.map(a =>
    <ListItem >

        <ListItemText
          primary={
            <Typography
            component="span"
            variant="h4"
            >
            {(a as any).name}
            </Typography>
          }    
          secondary={
            <>
                <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="h6"
                // color="text.primary"
            >
                founded {new Date((a as any).dateFounded).toLocaleString("en-US",
                        {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                        })}
            </Typography>
            <br/>
            <Typography
            variant="h6"
            component="span"
            >
                {(a as any).shortDescription}
            </Typography>
          </>
        }
        />
    </ListItem>    
    )

return(
    <div>
        {CompanyLists}
    </div>
)
}
