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
            <div className="modal" id="modal">
                <div className="actions">
                    <h4> Modal Window </h4>
                    <button className="toggle-button" onClick={this.onClose}> 
                        <img className="close-icon" src="close.png" alt="close"/> 
                    </button>
                </div>
                <div className="content"> {this.props.children} </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};