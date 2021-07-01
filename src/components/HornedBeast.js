import React from 'react' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
class HornedBeast extends React.Component {
    constructor(props){
super(props);
this.state={
    numoflikes:0
}
    }
    numoflike = () => {
        this.setState({
            numoflikes: this.state.numoflikes + 1
        })   
    }
    handleShow=() =>{
        this.props.handleShow(this.props.title)
    }
    render() {
        return (
            <div className="hornedbeasts" style={{display:"inline-block", margin:"25px"}}>

                <Card style={{ width: '18rem' }}>
                  
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Img  variant="top"  onClick={this.numoflike} src={this.props.url} alt={this.props.title} />
                        <Card.Text>
                            {this.props.prag}
                        </Card.Text>
                        <Card.Text>
                        Vote if you like me ...
                        </Card.Text>
                        <Card.Text>
                        ❤ {this.state.numoflikes}
                        </Card.Text> 
                        <Button variant="danger" onClick={this.handleShow}>Details</Button>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}

export default HornedBeast

