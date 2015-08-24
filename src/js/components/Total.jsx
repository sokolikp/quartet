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
      diagnosis = 'Moderately Severe Depression';
    } else {
      diagnosis = 'Severe Depression';
    } 
    return diagnosis;
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.handleSubmit();
  },

  render: function() {
    return (
      <div>
        <form type="submit">
          <div>Total Score: <span>{this.props.score}</span>/27</div>
          <div>Your diagnosis is: <strong>{this.getDepressionDiagnosis()}</strong></div>
          <div className='well severity-key'>Depression Severity: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.</div>
          <button className="btn btn-default" onClick={this.handleSubmit}>Submit</button> 
        </form>
      </div>
    );
   
  }

});

module.exports = Total;
