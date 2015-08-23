var React = require('react');
var Answer = require('./Answer.jsx');
var classNames = require('classnames');
var _ = require('underscore');

var Answers = React.createClass({

  getInitialState: function() {
    return { 
      score: 0
    }
  },
  
  handleClick: function(score) {
    this.setState({
      score: score
    });
    this.props.updateScore(score);
  },

  render: function() {
    var classes;
    var context = this;
    var answers = this.props.answers;
    var answerList = Object.keys(answers).map(function(answer, index) {
      classes = classNames({
        'answer': true,
        'answer-selected': context.state.score === index
      });
      return <li className={classes} onClick={context.handleClick.bind(context, index)} key={index}>{answers[answer]}</li>
      // return <Answer updateScore={context.updateScore} key={index} answer={answers[answer]} />
    });

    return (
      <div>
        <ul className='well list-unstyled answer-list'>
          {answerList}
        </ul>
      </div>
    );
   
  }

});

module.exports = Answers;
