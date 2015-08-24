var React = require('react');

var Total = React.createClass({
  
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

  //Display user survey results at the end of the page
  //with submit button to see next screen. Only enable
  //submit button when all selections are made
  render: function() {
    return (
      <div>
        <form type="submit">
          <div>Total Score: <span>{this.props.score}</span>/27</div>
          <div>Your diagnosis is: <strong>{this.getDepressionDiagnosis()}</strong></div>
          <div className='well severity-key'>Depression Severity: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.</div>
          {this.props.selected ? 
          <button className="btn btn-default" onClick={this.handleSubmit}>Submit</button> :
          <div>
            <button className="btn btn-default" disabled onClick={this.handleSubmit}>Submit</button>
            <div>Make all selections to submit.</div>
          </div>}

        </form>
      </div>
    );
   
  }

});

module.exports = Total;
