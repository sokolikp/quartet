var React = require('react');
var SurveyInfo = require('./../../../SurveyInfo.js');
var Questions = require('./Questions.jsx');
var Total = require('./Total.jsx');

var AppView = React.createClass({

  getInitialState: function() {
    return { 
      questions: SurveyInfo.questions,
      answers: SurveyInfo.answers,
      score: 0
    }
  },

  componentDidMount: function() {
    // console.log('I just mounted');
  },

  updateScore: function(score) {
    this.setState({
      score: this.state.score + score
    });
  },

  render: function() {
    return (
      <div>
        <h1>Patient Health Questionnaire (PHQ-9)</h1>
        <h5 className='well'>Over the last two weeks, how often have you been bothered by any of the following problems?</h5>
        <Questions updateScore={this.updateScore} questions={this.state.questions} answers={this.state.answers} />
        <Total score={this.state.score}/>
      </div>
    );

  }

});

module.exports = AppView;
