import React from "react";
import PropTypes from 'prop-types'
import "./modal.css";

export default class Modal extends React.Component{

    render() {
        if(!this.props.show){
            return null;
        }
        return(
            <div className="modal" id="modal" data-testid="pruebame">
                <div className="actions">
                    <h4> Modal Window </h4>
                    {this.props.buttonClose}
                </div>
                <div className="content"> {this.props.children} </div>
            </div>
        );
    }
}

// The function onClose is necessary to be able to close the modal.
// The show boolean indicates whether the modal is visible or not.
Modal.propTypes = {
    buttonClose: PropTypes.node,
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};