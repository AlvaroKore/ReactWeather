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
            <h1 className="text-center page-title">About</h1>
            <p>this is a weather application build on React.</p>
            <p>
                Here are some of the tools I used:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the javascript framework used
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city.
                </li>
            </ul>
        </div>
    );
};

module.exports = About;
