import './ExpenseItem.css';
import Card from '../UI/Card';
import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
// we can even destruct the props to - date title
// and amount and type them directicly
// const ExpenseItem = ({date, title, description}) => {
const ExpenseItem = (props) => {
  // inside the function we define the defualt
  // value, in this case -> porps.title
  const [title, setTitle] = useState(props.expense.title);

  const clickHandler = () => {
    setTitle('Updated');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.expense.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.expense.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
  
export default ExpenseItem;
