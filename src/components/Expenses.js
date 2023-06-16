import "./Expenses.css";
import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem expense={props.items[0]} />
      <ExpenseItem expense={props.items[1]} />
      <ExpenseItem expense={props.items[2]} />
    </Card>
  );
};

export default Expenses;
