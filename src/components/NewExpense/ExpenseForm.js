import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {

  const [enteredTitle, setEnternedTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });


  const titleChangeHandler = (event) => {
    // prints the current data value (whole)
    // console.log(event.target.value)
    // prints every character
    // console.log(event.nativeEvent.data)
    enteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value}
    // });
  };

  const amountChangeHandler = (event) => {
    // if we pass it like this it could result in a multiple
    // states that render simultaneously and could loss
    // some data... 
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // });
    // therefore its better to type it that way, this way
    // react would execute the changes if it has a prevState
    // at the latest time, meaning if it doesnt have a prevState
    // it would execute regullary, if not it would wait 
    // till the end and then render to not lose any data!
    // relay on the latest state snapshot!
    // if state update relays on the prev state use this!
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value};
    // })
    enteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value}
    // });
    enteredDate(event.target.value);
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler}/>

        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>

        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-23' onChange={dateChangeHandler}/>

        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expanse</button>

      </div>
    </form>
  )
}

export default ExpenseForm
