import * as React from 'react';
import './inputTest.css'

export class InputText extends React.Component {
    
    onChange = (e) => {
        console.log("hello")
        const { onChange, name } = this.props;
        const { value } = e.target;
        if (onChange) {
            onChange(name, value);
            const users = [];
            if (name === "FirstName") {
                users.push({
                    "firstname": value
                })
            }
            if (name === "Surname") {
                users.push({
                    "Surname": value
                })
            }
            if (name === "Email") {
                users.push({
                    "Email": value
                })
            }
            if (name === "phone") {
                users.push({
                    "phone": value
                })
            }
            if (name === "Age") {
                users.push({
                    "Age": value
                })
            }
            console.log(users)
        }
    }

    render() {
        const { name, label, type, placeholder, className, value } = this.props;

        return (

                <div className={className}
                >
                    <b>
                        <h5>
                            <label class= "label">{label}</label>
                        </h5>
                    </b>

                    <input class= "input" style={{width:'25%'
                        ,height:'35px'}}
                        placeholder={placeholder}
                        name={name}
                        type={type}
                        value={value}
                        className={type=='button'?'formbtn':''}
                        onChange={this.onChange}
                        required="required"
                    />
                </div>
        );
    }
}