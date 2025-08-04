import { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import ResultDisplay from './components/ResultDisplay';
import './App.css';


function App() {
 const [monthlyPayment, setMonthlyPayment] = useState(null);


 const handleCalculate = (principal, interestRate, loanTerm) => {
   // if any parameter is null => invalid submission, reset calculation
   if (principal === null || interestRate === null || loanTerm === null) {
     setMonthlyPayment(null);
     return;
   }


   //input to numbers conversion
   const P = parseFloat(principal);
   const r = parseFloat(interestRate) / 100 / 12;  // monthly interest rate
   const n = parseFloat(loanTerm) * 12;            // total months


   // calculate monthly payment
   const payment = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
   setMonthlyPayment(payment);
 };


 return (
   <div className="App">
     <h1>Mortgage Calculator</h1>
     <CalculatorForm onCalculate={handleCalculate} />
     <ResultDisplay monthlyPayment={monthlyPayment} />
   </div>
 );
}


export default App;
