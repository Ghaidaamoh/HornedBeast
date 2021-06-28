import React from 'react';
import Header from './compnents/Header';
import Footer from './compnents/Footer';
import Main from './compnents/Main';
class App extends React.Component{
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
export default App