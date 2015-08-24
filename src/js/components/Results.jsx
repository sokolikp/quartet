var React = require('react');

var Results = React.createClass({

  //keep track of whether radio buttons have been clicked
  //and do not allow user to submit until true.
  //Also keep track of whether form was submitted
  //to display "thank you" screen
  getInitialState: function() {
    return { 
      submitted: false,
      selected: false
    };
  },

  handleSelection: function(e) {
    this.setState({
      selected: true
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({
      submitted: true
    });
  },

  getDepressionDiagnosis: function() {
    var score = this.props.score;
    var diagnosis;
    if(score < 5) {
      diagnosis = 'Normal';
    } else if(score < 10) {
      diagnosis = 'Mild';
    } else if(score < 15) {
      diagnosis = 'Moderate';
    } else if(score < 20) {
      diagnosis = 'Moderately Severe';
    } else {
      diagnosis = 'Severe';
    } 
    return diagnosis;
  },

  //3 scenarios:
  // -form submitted (show thank you)
  // -depression score >= 10: show therapist options w/ submit form
  // -depression score < 10: show score and thank you message
  render: function() {
    if(this.state.submitted) {
      return (
        <div className='well container col-sm-4'>
          <h1>Thank You!</h1>
          <div>Your selection has been recorded.</div>
        </div>
      );
    } else if(this.props.score >= 10) {
      return (
        <div>
          <h1>Questionnaire Results</h1>
          <div className='well container col-sm-4'>
            <div>You scored a <strong>{this.props.score}</strong> out of 27</div>
            <div>Your depression is <strong>{this.getDepressionDiagnosis()}</strong></div>
            <div>Below are therapists that can help:</div>
            <form>
              <div className="radio">
                <label>
                  <input onClick={this.handleSelection} type="radio" name="radio" />
                  <span className='doctor'>Dr. Conan Doyle</span>
                </label>
              </div>
              <div className="radio">
                <label>
                  <input onClick={this.handleSelection} type="radio" name="radio" />
                  <span className='doctor'>Dr. Doolittle</span>
                </label>
              </div>
              <div className="radio">
                <label>
                  <input onClick={this.handleSelection} type="radio" name="radio" />
                  <span className='doctor'>Mr. Miyagi</span>
                </label>
              </div>
              {this.state.selected ? 
              <button className="btn btn-default" onClick={this.handleSubmit}>Submit</button> :
              <button className="btn btn-default" disabled onClick={this.handleSubmit}>Submit</button>}
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div> 
          <h1>Questionnaire Results</h1>
          <div className='well container col-sm-4'>
            <div>You scored a <strong>{this.props.score}</strong> out of 27</div>
            <div>Your depression is <strong>{this.getDepressionDiagnosis()}</strong></div>
            <div>Thanks for taking the exam!</div>
          </div>
        </div>
      );
    }
  }

});

module.exports = Results;
