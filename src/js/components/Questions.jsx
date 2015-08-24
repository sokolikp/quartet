var React = require('react');
var Question = require('./Question.jsx');

var Questions = React.createClass({

  getInitialState: function() {
    //initialize scores array with zeroes
    var scores = this.props.questions.map(function(question) {
      return 0;
    });
    //initialize selections array with all false values
    var selections = this.props.questions.map(function(question) {
      return false;
    });

    return { 
      scores: scores,
      selections: selections
    };
  },

  //reset state of internal score array
  //and call parent function updateScore() with
  //new sum of score array. index param helps
  //keep track of which child updated
  updateScore: function(score, index) {
    var newScores = this.state.scores;
    var newSelections = this.state.selections;
    newScores[index] = score;
    newSelections[index] = true;
    var newScore = newScores.reduce(function(score, accumulator) {
      return score + accumulator;
    }, 0);
    var allSelected = newSelections.reduce(function(selected, accumulator) {
      return selected && accumulator;
    }, true);
    this.setState({
      scores: newScores
    });
    this.props.updateScore(newScore, allSelected);
  },

  //Questions renders an array of Question 
  //components for modularity
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

