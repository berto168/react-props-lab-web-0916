const React = require('react');

class Spaceship extends React.Component {
  render() {
    let rockets = this.props.hasRockets ? "blam blam" : "aww man"
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Speed: {this.props.speed} SO FAST</p>
        <p>Rockets: {rockets}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  name: 'Slave One',
  speed: 150,
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship;
