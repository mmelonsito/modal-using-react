import React from "react";
import PropTypes from "prop-types";

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
                <h2> Modal Window </h2>
                <div class="content"> {this.props.children} </div>
                <button class="toggle-button" onClick={this.onClose}> <img src="close.png" alt="close"/> </button>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};