import React from "react";
import Modal from "./Component/Modal";
import Button from "./Component/Button";
import useModal from './Hook/useModal';

function App() {

    const [isOpenModal, openModal, closeModal ] = useModal();
    
    return(
        <div className="App">
            <button 
                className="toggle-button"
                id="centered-toggle-button"
                onClick={openModal}
            >
                {" "}Show modal{" "}
            </button>

            <Modal 
                onClose={closeModal} 
                show={isOpenModal}
                buttonClose={
                    <Button 
                        value="close.png"
                        onClick={closeModal}> 
                    </Button> 
            }>
                <span onClick={closeModal} cursor> 
                    Hello! I'm the modal created by Míriam.
                    You can close me clicking here too.
                </span>
            </Modal>
        </div>
    );
}

export default App;