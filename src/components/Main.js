import React from 'react'
import HornedBeast from './HornedBeast'
import Horend from './Horend.json'
 class Main extends React.Component {
    
    render() {
       
        return (
            <div>
               {Horend.map((item,index)=>{
                   return(
                   <HornedBeast  title={item.title} prag={item.description} url={item.image_url} key={index} />
                   )
               })}

            </div>


        )
    }
}
export default Main


