import React from "react";
import PropTypes from 'prop-types'
import "./modal.css";
import Button from "../Button/index.js";

export default class Modal extends React.Component{
    
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if(!this.props.show){
            return null;
        }
        return(
            <div className="modal" id="modal">
                <div className="actions">
                    <h4> Modal Window </h4>
                    {this.props.buttonClose}
                </div>
                <div className="content"> {this.props.children} </div>
            </div>
        );
    }
}
/*<button className="toggle-button" onClick={this.onClose}> 
                        <img className="close-icon" src="close.png" alt="close"/> 
                    </button> */
// The function onClose is necessary to be able to close the modal.
// The show boolean indicates whether the modal is visible or not.
Modal.propTypes = {
    buttonClose: PropTypes.node,
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};