var React = require('react');

var Total = React.createClass({

  getInitialState: function() {
    return { 

    }
  },

  getDepressionDiagnosis: function() {
    var score = this.props.score;
    var diagnosis;
    if(score < 5) {
      diagnosis = 'Normal';
    } else if(score < 10) {
      diagnosis = 'Mild Depression';
    } else if(score < 15) {
      diagnosis = 'Moderate Depression';
    } else if(score < 20) {
      diagnosis = 'Moderately Sever Depression';
    } else {
      diagnosis = 'Severe Depression';
    } 
    return diagnosis;
  },

  render: function() {
    return (
      <div>
        <div>Total Score: <span>{this.props.score}</span>/27</div>
        <div>{this.getDepressionDiagnosis}</div>
        <div>Depression Severity: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.</div>
      </div>
    );
   
  }

});

module.exports = Total;
