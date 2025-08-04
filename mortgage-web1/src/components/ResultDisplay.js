const ResultDisplay = ({monthlyPayment}) => {


   //return early if no valid payment
   if(monthlyPayment === null || typeof monthlyPayment !== 'number') {
       <p>Enter valid inputs:</p>
       return null;
   }


   return (
       <div className="result">
           <h2>Your Monthly Payment:</h2>
           <p>${monthlyPayment.toFixed(2)}</p>
       </div>


   );


};


export default ResultDisplay;