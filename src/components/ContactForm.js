import React, {useState} from 'react'
import Formsy from 'formsy-react';
import styled from 'styled-components';

export default function ContactForm() {
    const [canSubmit, setCanSubmit] = useState('false');
    const [formInfo, setFormInfo] = useState({
        email: '',
        name: '',
    })
    const mapInputs = (inputs)=>{
            return {
            field1: inputs.eamil,
            field2: inputs.name,
            };
        };
    const handleSubmit = ()=>{
        console.log("SUbmit: ",)
    }
    const enable = ()=>{
        setCanSubmit('true')
    }
    const disable = ()=>{
        setCanSubmit('false')
    }


    const FormStlye = styled.form`
        .myForm {
            display: flex;
            flex-direction: column;
            
        }
        .row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        button {
            width: 18vw;
            height: 3vh;
            align-self: center;
            margin-top: 14px;
        }
    `

    return(
        <FormStlye>
            <Formsy className="myForm" onValidSubmit={handleSubmit} mapping={mapInputs} onValid={enable} onInvalid={disable}>
                    <div className='row'>
                        <input 
                            type="text" 
                            name="email"
                            validations="isEmail"
                            validationError="This is not a valid email"
                            required
                            placeholder="email">
                        </input>
                        <input 
                            type="text" 
                            name="name"
                            required
                            placeholder="Name">
                        </input>
                    </div>
                    <button type="submit" disabled={!canSubmit}>
                        Submit
                    </button>
            </Formsy>
        </FormStlye>
    );
};
