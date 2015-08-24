var React = require('react');
var SurveyInfo = require('./../../../SurveyInfo.js');
var Questions = require('./Questions.jsx');
var Total = require('./Total.jsx');
var Results = require('./Results.jsx');

var AppView = React.createClass({

  getInitialState: function() {
    return { 
      questions: SurveyInfo.questions,
      answers: SurveyInfo.answers,
      score: 0,
      showResults: false
    }
  },

  updateScore: function(score) {
    this.setState({
      score: score
    });
  },

  handleSubmit: function() {
    this.setState({
      showResults: true
    });
  },

  render: function() {
    if(this.state.showResults) {
      return (
        <Results score={this.state.score} />
      );
    } 
    return (
      <div className='container'>
        <h1 className='text-center'>Patient Health Questionnaire (PHQ-9)</h1>
        <h5 className='text-center well'>
          Over the last two weeks, how often have you 
          been bothered by any of the following problems?</h5>
        <Questions 
          updateScore={this.updateScore} 
          questions={this.state.questions} 
          answers={this.state.answers} />
        <Total score={this.state.score} handleSubmit={this.handleSubmit} />
      </div>
    );

  }

});

module.exports = AppView;
