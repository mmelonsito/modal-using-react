import React from "react";
import Modal from "./Component/Modal";
import Button from "./Component/Button";

class App extends React.Component{

    state = {
        show: false
    };
    
    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    };

    render() {
        return(
            <div className="App">
                <button 
                    className="toggle-button"
                    id="centered-toggle-button"
                    onClick={e => {
                        this.showModal(e);
                    }}
                >
                    {" "}Show modal{" "}
                </button>

                <Modal 
                    onClose={this.showModal} 
                    show={this.state.show}
                    buttonClose={
                        <Button 
                            value="close.png"
                            onClick={e => {
                                this.showModal(e);}}> 
                        </Button> 
                }>
                    Hello! I'm the modal created by Míriam.
                    You can close me clicking <a href="#" onClick={e => {
                        this.showModal(e);
                    }}> here</a> too.
                </Modal>
            </div>
        );
    }
}

export default App;