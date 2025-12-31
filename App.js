import React from "react";
import ReactDOM from "react-dom/client";




const myNestedElement = React.createElement(
    'div',
    { id: 'container', style: { border: '2px solid blue', padding: '20px' } },
    [
        React.createElement('h1', { key: 'h1' }, 'I am the Parent'),
        React.createElement('section', { key: 'sec', style: { color: 'green' } }, [
            React.createElement('p', { key: 'p1' }, 'I am a nested child paragraph.'),
            React.createElement('button', { key: 'btn', onClick: () => alert('Hello!') }, 'Click Me')
        ])
    ]
);
const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

root.render(myNestedElement);