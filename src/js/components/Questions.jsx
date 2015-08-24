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

  updateScore: function(score, index) {
    var newScores = this.state.scores;
    newScores[index] = score;
    var newScore = newScores.reduce(function(score, accumulator) {
      return score + accumulator;
    }, 0)
    this.setState({
      scores: newScores
    });
    this.props.updateScore(newScore);
  },

  render: function() {
    var context = this;
    var questions = this.props.questions.map(function(question, index) {
      return <Question 
                updateScore={context.updateScore} 
                key={index} 
                index={index} 
                question={question} 
                answers={context.props.answers} />
    });

    return (
      <div>
        {questions}
      </div>
    );
   
  }

});

module.exports = Questions;

