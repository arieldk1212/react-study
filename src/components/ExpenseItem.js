import Card from './Card';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
// we can even destruct the props to - date title
// and amount and type them directicly
// const ExpenseItem = ({date, title, description}) => {
const ExpenseItem = (props) => {
    

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.expense.date}/>
      <div className='expense-item__description'>
        <h2>{props.expense.title}</h2>
        <div className='expense-item__price'>${props.expense.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;