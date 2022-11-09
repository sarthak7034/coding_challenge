import { Fragment, ReactElement, useEffect, useState } from "react";
// import namelist from '../NameList'

export default function StartupList(): ReactElement {

  const [data, setdata] = useState([])
  
  useEffect( () =>{
  const dataList = fetch('/api/startups')
  .then(response => response.json())
  .then( a => {setdata(a)})  
  },[])
  console.log(data)
  const CompanyLists = data.map(a =>
    <Fragment>
        <h2>
            {(a as any).name}
        </h2>
        <span>
           founded {(a as any).dateFounded}
        </span>
        <p>
            {(a as any).shortDescription}
        </p>
    </Fragment>    
    )

return(
    <div>
        {CompanyLists}
    </div>
)
}
