import React, { Component } from 'react'
import Header from './Music player/Header'
import './App.css'
import Albums from './Music player/Albums'
import Item from './Music player/Item'
import Footer from './Music player/Footer'

export default class App extends Component {
    state={name:'welcome '}
  render() {
    return (
      <div className='App'>
        <center> 
          <Header/>        
          <Albums />
          <Footer/>
          
        </center>
      </div>
    )
  }
}



