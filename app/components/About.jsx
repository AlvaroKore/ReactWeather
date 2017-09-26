var React = require('react');

// var About = React.createClass({
//     render: function () {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

// this is a presentational Component because it doesn't manage 'state'
// so, it can be write as follow:
var About =  (props) => {
    return (
        <div>
            <h3>About</h3>
            <p>Welcome to About page</p>
        </div>
    );
};

module.exports = About;
