var React = require('react');
var Answers = require('./Answers.jsx');

var Question = React.createClass({

  getInitialState: function() {
    return { 
      // score: 0
    }
  },

  render: function() {

    return (
      <div className='row'>
        <div className='question'>{this.props.index+1 + '.'} {this.props.question}</div>
        <Answers 
          updateScore={this.props.updateScore} 
          answers={this.props.answers} 
          index={this.props.index} />
      </div>
    );
   
  }

});

module.exports = Question;
