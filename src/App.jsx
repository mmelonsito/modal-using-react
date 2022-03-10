import React from "react";

class App extends React.Component{
    render() {
        return(
            <div className="App">
                <button 
                    class="toggle-button"
                    id="centered-toggle-button"
                >
                    {" "}Show modal{" "}
                </button>
            </div>
        );
    }
}

export default App;