import React from "react";
import PropTypes from "prop-types";
import "./modal.css";

export default class Modal extends React.Component{
    
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if(!this.props.show){
            return null;
        }
        return(
            <div class="modal" id="modal">
                <div class="actions">
                    <h4> Modal Window </h4>
                    <button class="toggle-button" onClick={this.onClose}> 
                        <img class="close-icon" src="close.png" alt="close"/> 
                    </button>
                </div>
                <div class="content"> {this.props.children} </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};