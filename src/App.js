import * as React from 'react';
import { InputText } from './InputText';

const inputs = [{
  "label": 'First Name',
  "type": "text",
  "name": "FirstName",
  "classname": "name",
  "placeholder": "Enter first name"
},
{
  "label": 'Last Name',
  "type": "text",
  "name": "last name",
  "classname": "text",
  "placeholder": "Enter last name"
},
{
  "label": 'Email Address',
  "type": "email",
  "name": "Email",
  "classname": "email",
  "placeholder": "Enter Email Address"
},
{
  "label": 'Phone #',
  "type": "number",
  "name": "phone",
  "classname": "phone",
  "placeholder": "Enter Phone #"
},
{
  "type": "text",
  "name": "job_title",
  "label": "Job Title",
  "classname": "job",
  "placeholder": "Job Title"
},
{
  "label": 'Your Age',
  "type": "number",
  "name": "Age",
  "classname": "age",
  "placeholder": "Enter Age",
  "conditional": {
		"name": "date_of_birth",
		"show_if": (value) => {
      const now = new Date();
			return value >= new Date(now.getFullYear() - 13, now.getMonth(), now.getDate());
    }
  }
},
{
  "type": "button",
  "name": "button",
  "classname": "button",
  "value":"submit"
},

]


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = inputs.reduce((acc, input) => {
      return { ...acc, [input.name]: '' };
    }, {})
  }

  onChange = (name, value) => {
    this.setState({ [name]: value });
  }
  callme = () => {
    alert("clicked");
  } 
  render() {
    const list = inputs.map(input => {

      return (

       
        <InputText
          value={this.state[input.name]}
          key={input.name}
          type={input.type}
          name={input.name}
          title={input.title}
          value={input.value}
          label={input.label}
          conditional={input.conditional}
          className={input.class}
          placeholder={input.placeholder}
          onChange={this.onChange}
        />
      );
    });

    return (
      <div>
      <form className="form">
        {list}
      </form>
      </div>

      
    );
  }
}
export default Form