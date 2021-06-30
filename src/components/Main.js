import React from 'react'
import HornedBeast from './HornedBeast'
import Horend from './Horend.json'
import FormSelect from './FormSelect';
class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hornsRender: Horend,
        }
    }

    sort = (event) => {
        let pic = event.target.value;

        let filterArray = [];

        filterArray = Horend.filter(element => {
            if (element.horns == pic) { return true }
        }
        )
        this.setState({
            hornsRender: filterArray
        })

        if (filterArray.length == 0) {
            this.setState({
                hornsRender: Horend
            })
        }
    }

    render() {
        return (
            <div>
                <FormSelect Filter={this.sort} />
                {this.state.hornsRender.map((item, index) => {
                    return (
                        <HornedBeast title={item.title} prag={item.description} url={item.image_url} key={index} handleShow={this.props.handleShow} modalData={this.props.modalData} />
                    )
                })}

            </div>


        )
    }
}
export default Main


