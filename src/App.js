import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Horend from './components/Horend.json'
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      honesData:Horend,
      show: false,
      modalData:{},
    };
  }

  handleShow = (data) => {
    let selected= Horend.find(animal=>{if (animal.title===data) {
      return animal;
    }
  })
   
    this.setState({ 
      show: true,
      modalData:selected,

    });
  }
  handleClose = () =>{
    this.setState({
      show:false,
      modalData:{}
    });
  }
  
  render() {
    return (
      <div>
        <Header/>
        <Main  handleShow ={this.handleShow} modalData ={this.state.modalData}/>
        <SelectedBeast handleClose={this.handleClose} showData={this.state.show} modalData={this.state.modalData} /> 
        <Footer/>
      </div>
    )
  }
}
export default App