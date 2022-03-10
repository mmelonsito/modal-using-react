import React from "react";
import Modal from "./Component/Modal";

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
                    class="toggle-button"
                    id="centered-toggle-button"
                    onClick={e => {
                        this.showModal(e);
                    }}
                >
                    {" "}Show modal{" "}
                </button>

                <Modal onClose={this.showModal} show={this.state.show}>
                    Hello! I'm the modal created by Míriam.
                </Modal>

            </div>
        );
    }
}

export default App;