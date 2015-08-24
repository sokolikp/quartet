var React = require('react');
var SurveyInfo = require('./../../../SurveyInfo.js');
var Questions = require('./Questions.jsx');
var Total = require('./Total.jsx');
var Results = require('./Results.jsx');

var AppView = React.createClass({

  //AppView has access to all survey info and passes to children 
  getInitialState: function() {
    return { 
      questions: SurveyInfo.questions,
      answers: SurveyInfo.answers,
      score: 0,
      showResults: false,
      allSelected: false
    };
  },

  //Keep track of overall survey score; this is called 
  //from child Questions when a user clicks on a response
  updateScore: function(score, allSelected) {
    this.setState({
      score: score,
      allSelected: allSelected
    });
  },

  //handle submit events to render results screen
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
        <Total score={this.state.score} handleSubmit={this.handleSubmit} selected={this.state.allSelected} />
      </div>
    );

  }

});

module.exports = AppView;
