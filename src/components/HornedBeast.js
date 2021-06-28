import React from 'react'
class HornedBeast extends React.Component {
    render() {
    
        return (

            <div>
                <h1>{this.props.title}</h1> 
             <img src={this.props.imgUrl} />
             <h2>{this.props.description}</h2>

                
            </div>
        )
    }
}
export default HornedBeast