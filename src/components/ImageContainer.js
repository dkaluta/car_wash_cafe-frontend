/*
  Developed by:

________  ________  ___      ___ ___  ________                   
|\   ___ \|\   __  \|\  \    /  /|\  \|\   ___ \                  
\ \  \_|\ \ \  \|\  \ \  \  /  / | \  \ \  \_|\ \                 
 \ \  \ \\ \ \   __  \ \  \/  / / \ \  \ \  \ \\ \                
  \ \  \_\\ \ \  \ \  \ \    / /   \ \  \ \  \_\\ \               
   \ \_______\ \__\ \__\ \__/ /     \ \__\ \_______\              
    \|_______|\|__|\|__|\|__|/       \|__|\|_______|              
                                                                  
                                                                  
                                                                  
 ___  __    ________  ___       ___  ___  _________  ________     
|\  \|\  \ |\   __  \|\  \     |\  \|\  \|\___   ___\\   __  \    
\ \  \/  /|\ \  \|\  \ \  \    \ \  \\\  \|___ \  \_\ \  \|\  \   
 \ \   ___  \ \   __  \ \  \    \ \  \\\  \   \ \  \ \ \   __  \  
  \ \  \\ \  \ \  \ \  \ \  \____\ \  \\\  \   \ \  \ \ \  \ \  \ 
   \ \__\\ \__\ \__\ \__\ \_______\ \_______\   \ \__\ \ \__\ \__\
    \|__| \|__|\|__|\|__|\|_______|\|_______|    \|__|  \|__|\|__|
                                                                  
  (@davidkaluta on twitter)
   
  This code is licensed under the 2-clause BSD License (../../LICENSE)
*/
import React from 'react'
import Modal from 'react-bootstrap/Modal'
import './ImageContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css';



class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  render() {
    const handleClose = () => this.setState({
      show: false
    });
    const handleShow = () => this.setState({
      show: true
    });
    return(
      <div className="ImageContainer">
        <div className="ImageContainer-table" onClick={handleShow}>
            <div>
              <img src={this.props.image} className="ImageContainer-image" alt=""></img>
            </div>
            <div>
              <p className="ImageContainer-text">{this.props.text}</p>
            </div>
        </div>
        <Modal show={this.state.show} onHide={handleClose} centered className="IC-Modal-Dialogue">
          <Modal.Header closeButton>
            <Modal.Title>{this.props.text}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="IC-Modal">הנה בדיקה</Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default ImageContainer;