var React = require('react');
var Question = require('./Question.jsx');

var Questions = React.createClass({

  getInitialState: function() {
    var scores = this.props.questions.map(function(question) {
      return 0;
    });

    return { 
      scores: scores
    }
  },

  componentDidMount: function() {
    // console.log(this.props.updateScore);
  },

  updateScores: function() {
    // var newScore = this.state.scores;
  },

  render: function() {
    // console.log(this.props.questions, this.props.answers, this.props.updateScore);
    var context = this;
    var questions = this.props.questions.map(function(question, index) {
      return <Question updateScore={context.props.updateScore} key={index} index={index} question={question} answers={context.props.answers} />
    });

    return (
      <div>
        {questions}
      </div>
    );
   
  }

});

module.exports = Questions;

