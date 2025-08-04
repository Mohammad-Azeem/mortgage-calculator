import { useState } from "react";


const CalculatorForm = ({ onCalculate }) => {
 const [principal, setPrincipal] = useState('');
 const [interestRate, setInterestRate] = useState('');
 const [loanTerm, setLoanTerm] = useState('');
 const [errors, setErrors] = useState({
   principal: '',
   interestRate: '',
   loanTerm: '',
   general: ''
 });


 const validateInputs = () => {
   let isValid = true;
   const newErrors = {
     principal: '',
     interestRate: '',
     loanTerm: '',
     general: ''
   };


   // Validate principal
   if (!principal) {
     newErrors.principal = 'Loan amount is required';
     isValid = false;
   } else if (isNaN(principal)) {
     newErrors.principal = 'Must be a number';
     isValid = false;
   } else if (principal <= 0) {
     newErrors.principal = 'Must be positive';
     isValid = false;
   }


   // Validate interest rate
   if (!interestRate) {
     newErrors.interestRate = 'Interest rate is required';
     isValid = false;
   } else if (isNaN(interestRate)) {
     newErrors.interestRate = 'Must be a number';
     isValid = false;
   } else if (interestRate <= 0) {
     newErrors.interestRate = 'Must be positive';
     isValid = false;
   }


   // Validate loan term
   if (!loanTerm) {
     newErrors.loanTerm = 'Loan term is required';
     isValid = false;
   } else if (isNaN(loanTerm)) {
     newErrors.loanTerm = 'Must be a number';
     isValid = false;
   } else if (loanTerm <= 0) {
     newErrors.loanTerm = 'Must be positive';
     isValid = false;
   }


   setErrors(newErrors);
   return isValid;
 };


 const handleSubmit = (e) => {
   e.preventDefault();
  
   if (!validateInputs()) {
     onCalculate(null, null, null);
     return;
   }


   // If validation passes
   onCalculate(principal, interestRate, loanTerm);
 };


 return (
   <form onSubmit={handleSubmit}>
     {/* Loan Amount Input */}
     <label>
       Loan Amount ($):
       <input
         type="number"
         value={principal}
         onChange={(e) => setPrincipal(e.target.value)}
         min="1"
         className={errors.principal ? 'error-input' : ''}
       />
       {errors.principal && <span className="error-message">{errors.principal}</span>}
     </label>


     {/* Interest Rate Input */}
     <label>
       Interest Rate (%):
       <input
         type="number"
         value={interestRate}
         onChange={(e) => setInterestRate(e.target.value)}
         min="0.1"
         step="0.1"
         className={errors.interestRate ? 'error-input' : ''}
       />
       {errors.interestRate && <span className="error-message">{errors.interestRate}</span>}
     </label>


     {/* Loan Term Input */}
     <label>
       Loan Term (years):
       <input
         type="number"
         value={loanTerm}
         onChange={(e) => setLoanTerm(e.target.value)}
         min="1"
         className={errors.loanTerm ? 'error-input' : ''}
       />
       {errors.loanTerm && <span className="error-message">{errors.loanTerm}</span>}
     </label>


     {errors.general && <div className="error-general">{errors.general}</div>}


     <button type="submit">Calculate</button>
   </form>
 );
};


export default CalculatorForm;

