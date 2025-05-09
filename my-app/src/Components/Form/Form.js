import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';

function Form({ addIncome }) {
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    });

    const { title, amount, date, category, description } = inputState;

    const handleInput = (name) => (e) => {
        setInputState({ ...inputState, [name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && amount && date && category) {
            addIncome({ title, amount, date, category, description });
            setInputState({
                title: '',
                amount: '',
                date: '',
                category: '',
                description: '',
            });
        } else {
            alert("Please fill all fields");
        }
    };

    return (
        <IncomeFormStyled onSubmit={handleSubmit}>
            <div className="input-control">
                <input
                    type="text"
                    value={title}
                    placeholder="Income Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input
                    type="text"
                    value={amount}
                    placeholder={'Income Amount'}
                    onChange={handleInput('amount')}
                />
            </div>
            <div className="input-control">
                <DatePicker
                    placeholderText='Enter A Date'
                    selected={date}
                    onChange={(date) => {
                        setInputState({ ...inputState, date });
                    }}
                />
            </div>
            <div className="selects input-control">
                <select required value={category} onChange={handleInput('category')}>
                <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investiments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>  
                    <option value="youtube">Youtube</option>  
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input-control">
                <textarea
                    value={description}
                    placeholder='Add A Reference'
                    cols="30"
                    rows="4"
                    onChange={handleInput('description')}
                    
                />
            </div>
            <div className="submit-btn">
                <Button
                    name={'Add Income'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent)'}
                    color={'black'}
                />
            </div>
        </IncomeFormStyled>
    );
}

const IncomeFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
          background: #f8f9fa;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input-control{
        input{
            width: 100%;
        }
    }

    .selects{
        display: flex;
        justify-content: flex-end;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn{
        button{1
            box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;

export default Form;
