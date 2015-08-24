var React = require('react');
// var Answer = require('./Answer.jsx');
// var _ = require('underscore');
var classNames = require('classnames');

var Answers = React.createClass({

  getInitialState: function() {
    return { 
      score: 0,
      selected: false
    };
  },
  
  //set new score of this instance of Answers
  //and call parent function in Questions component,
  //making sure to pass index as a reference to this Answers block 
  handleClick: function(score) {
    this.setState({
      score: score,
      selected: true
    });
    this.props.updateScore(score, this.props.index);
  },

  //Answers components create arrays of all answers.
  //If logic gets complex, this may be split into
  //individual Answer components
  render: function() {
    var classes;
    var context = this;
    var answers = this.props.answers;
    var answerList = Object.keys(answers).map(function(answer, index) {
      //Use classNames npm module to toggle selected 
      //answer class for user feedback highlighting
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
