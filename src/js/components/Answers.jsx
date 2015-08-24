var React = require('react');
var Answer = require('./Answer.jsx');
var classNames = require('classnames');
var _ = require('underscore');

var Answers = React.createClass({

  getInitialState: function() {
    return { 
      score: 0,
      selected: false
    }
  },
  
  handleClick: function(score) {
    this.setState({
      score: score,
      selected: true
    });
    this.props.updateScore(score, this.props.index);
  },

  render: function() {
    var classes;
    var context = this;
    var answers = this.props.answers;
    var answerList = Object.keys(answers).map(function(answer, index) {
      classes = classNames({
        'answer': true,
        'answer-selected': context.state.score === index && context.state.selected
      });
      return <li 
                className={classes} 
                onClick={context.handleClick.bind(context, index)} 
                key={index}>
                {answers[answer]}
             </li>
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
