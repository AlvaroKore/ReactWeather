var React = require('react');
// var WeatherMessage = React.createClass({
//     render: function () {
//         return (
//             <h3>It is {this.props.temp} grados en {this.props.location}</h3>
//         );
//     }
// });

var WeatherMessage = ( {temp, location}) => {
    return(
        <h3>It is {temp} GRADOS en {location}</h3>
    );
}


module.exports = WeatherMessage;
