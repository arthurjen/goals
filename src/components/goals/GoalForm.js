import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormControl from '../shared/FormControl';

class GoalForm extends PureComponent {
  state = {
    goal: ''
  };

  static propTypes = {
    submit: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.nameInput.focus();
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if(!this.state.goal) return;
    this.props.submit(this.state);
  };

  render() { 
    const { goal } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add a Goal</h3>
        <FormControl label="goal">
          <input ref={node => this.nameInput = node} name="goal" value={goal} onChange={this.handleChange}/>
        </FormControl>
        <button>Cancel</button>
        <button>Add</button>
      </form>
    );
  }
}
 
export default GoalForm;