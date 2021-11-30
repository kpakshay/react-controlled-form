import React, { Component } from 'react';

class ControlledComponent extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phone:null,
      email: '',
      rating: '',
      comment: '',
      errors: {
        firstName: '',
        lastName: '',
        phone:null,
        email: '',
        gender: '',
        rating: '',
        comment: '',
      },
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    var errKeys = await Object.keys(this.state).filter((key) => {
      if (this.state[key] == '' && this.state[key] != 'errors') {
        return key;
      }
    });
    if (errKeys.length >= 1) console.warn('Please fill all fields');
    else console.log(this.state);
  };
  handleChange = async (e) => {
    var errors = { ...this.state.errors };

    if (e.target.value === '') {
      errors[e.target.name] = 'Required';
    }else if(e.target.name==="phone"&&e.target.value.length!=10){
        errors[e.target.name]='Number must be length of 10';
    } else {
      errors[e.target.name] = '';
    }
    // if(e.target.name==="phone"&&e.target.value.length<10){

    // }

    await this.setState({ errors, [e.target.name]: e.target.value });
  };
  handleReset = () => {
    this.setState({
      firstName: '',
      lastName: '',
      phone:null,
      email: '',
      rating: '',
      comment: '',
    });
  };
  render() {
    return (
      <>
        <div>
          <h3> Controlled Feedback Form </h3>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div>
              <label> First Name </label>
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={(e) => this.handleChange(e)}
              />{' '}
              <br />
              <span style={{ color: 'red' }}>
                {' '}
                {this.state.errors.firstName}{' '}
              </span>
            </div>
            <br />
            <div>
              <label> Last Name </label>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={(e) => this.handleChange(e)}
              />
              <br />
              <span style={{ color: 'red' }}>
                {' '}
                {this.state.errors.lastName}{' '}
              </span>
            </div>
            <br />
            <div>
                <label>Phone no.</label>
                <input 
                type="number" 
                name="phone"
                value={this.state.phone}
                onChange={(e) => this.handleChange(e)}
                />
                <br />
              <span style={{ color: 'red' }}>
                {' '}
                {this.state.errors.phone}{' '}
              </span>
            </div>
            <br/>
            <div>
              <label> Email </label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={(e) => this.handleChange(e)}
              />
              <br />
              <span style={{ color: 'red' }}> {this.state.errors.email} </span>
            </div>
            <br />
            <div>
              <label>Rate Your Experience </label><br/>
              <input
                type="radio"
                name="rating"
                value="vgood"
                onChange={(e) => this.handleChange(e)}
              />{' '}
              Very Good
              <input
                type="radio"
                name="rating"
                value="good"
                onChange={(e) => this.handleChange(e)}
              />{' '}
              Good
              <input
                type="radio"
                name="rating"
                value="average"
                onChange={(e) => this.handleChange(e)}
              />{' '}
              Average
              <input
                type="radio"
                name="rating"
                value="bad"
                onChange={(e) => this.handleChange(e)}
              />{' '}
              Bad
            </div>
            <input
                type="radio"
                name="rating"
                value="vbad"
                onChange={(e) => this.handleChange(e)}
              />{' '}
              Very Bad
            <br />
            <span style={{ color: 'red' }}> {this.state.errors.rating} </span>
            <div>
              <br />
              <label> Your Comment </label>
              <textarea 
                name="comment"
                value={this.state.comment}
                onChange={(e) => this.handleChange(e)}
                />
                <span style={{ color: 'red' }}> {this.state.errors.comment} </span>
            </div>
            <br />
            <button type="submit"> Submit </button> &nbsp;
            <button type="button" onClick={this.handleReset}>
              {' '}
              Reset
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default ControlledComponent;
