import React from 'react';
import ReactDOM from 'react-dom';
// create a new compoenent. should produce some HTML
const App = () => {
    return <div>Hello!</div>;
}

// take the html generated and put it in the page(DOM)
ReactDOM.render(<App />, document.querySelector('.container'));