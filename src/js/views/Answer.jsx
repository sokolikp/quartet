var React = require('react');
var classNames = require('classnames');

var Answer = React.createClass({

  getInitialState: function() {
    return { 
      isSelected: false
      // score: 0
    }
  },

  handleClick: function(score) {
    //add/remove classes
    console.log('clicked on:', score);
    this.setState({
      isSelected: true
      // score: score
    });
    this.props.updateScore(score);
  },

  render: function() {
    var classes = classNames({
      'answer': true,
      'answer-selected': this.state.isSelected,
    });

    var index = this.props.key;
    return (
      <li className={classes} onClick={this.handleClick.bind(this, index)}>{this.props.answer}</li>
    );
   
  }

});

module.exports = Answer;
