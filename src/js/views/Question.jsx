var React = require('react');
var Answers = require('./Answers.jsx');

var Question = React.createClass({

  getInitialState: function() {
    return { 
      // score: 0
    }
  },

  updateScore: function(score) {
    // this.setState({
    //   score: score
    // });
    console.log('my key is:', this.props.key, score);
  },

  render: function() {

    return (
      <div>
        <div className='question'>{this.props.index+1 + '.'} {this.props.question}</div>
        <Answers updateScore={this.updateScore} answers={this.props.answers}/>
      </div>
    );
   
  }

});

module.exports = Question;
