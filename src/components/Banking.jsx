import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Banking = () => {
  const [amount, setAmount] = useState("");
  console.log(amount)
  const dispatch = useDispatch();

  const handleDeposit = () => {
    console.log("works")
    dispatch({ type: "DEPOSIT", amount:amount });
  };

  const handleWithdraw = () => {
  
    dispatch({ type: "WITHDRAW", amount: parseInt(amount) });
  };

  const handleCollcetInterest = () => {
    dispatch({
      type: "COLLECT_INTEREST",
    });
  };

  const handleDelete = () => {
    dispatch({
      type: "DELETE_ACCOUNT",
    });
  };

  const handleAccountChange = () => {};

  return (
    <div>
      <div className="form-group">
        <input type="text" className="form-control" />
        <button
          className="btn btn-success"
          onClick={handleDeposit}
          onChange={(e) => setAmount(e.target.value)}
        >
          Deposite
        </button>
        <button className="btn btn-primary" onClick={handleWithdraw}>
          Withdraw
        </button>
        <button className="btn btn-warning" onClick={handleCollcetInterest}>
          Collect Interset
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete Account
        </button>
        <button className="btn btn-secondary" onClick={handleAccountChange}>
          Changed Account Type{" "}
        </button>
      </div>
    </div>
  );
};

export default Banking;

// actions

// deposite action
const deposit = {
  type: "DEPOSIT",
  amount: 20,
};

// withdraw action
const withdraw = {
  type: "WITHDRAW",
  amount: 3,
};

// collect Interest
const collectInterest = {
  type: "COLLECT_INTEREST",
};

// delete Account
const deleteAccount = {
  type: "DELETE_ACCOUNT",
};
