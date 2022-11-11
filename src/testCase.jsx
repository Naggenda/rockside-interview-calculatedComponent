import React, { useState, useEffect } from "react";

function Form() {

    let num1 = "";
    let num2 = "";

    let handleChange = (e) => {
        num1 = e.target.value;
    }

    let handleChange2 = (e) => {
        num2 = e.target.value;
    }

    const sum = num1 + num2;

    const product = sum*10;

//   const [currentSum, setCurrentSum] = useState();
//   const [currentProd, setCurrentProd] = useState();
//   const [clear, setClear] = useState(false);

//   useEffect(() => {
//     document.querySelector("#result").value = "";
//   }, []);

//   useEffect(() => {
//     if (clear) document.querySelector("#result").value = "";
//   });

//   const Add = e => {
//     e.preventDefault();
//     if (clear) setClear(false);
//     let currentNum = document.querySelector("#num").value;
//     let currentNum2 = document.querySelector("#num2").value;
//     if (currentNum == "") return;
//     let sum = parseInt(currentNum2) + parseInt(currentNum);
//     let prod = sum * 10;
//     setCurrentProd(prod);
//     setCurrentSum(sum);
//     // document.querySelector("#num").value = "";
//   };

  return (
    <div className="App">
      <div className="app-title">
        <h3>Calculated Fields</h3>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="">Number of sheep</label>
          <input type="text" id="num" value={num1} className="form-control" onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="">Number of Goats</label>
          <input type="text" id="num2" value={num2} className="form-control" onChange={handleChange2}/>
        </div>

        <div className="form-group">
          <label htmlFor="addresult">Total animals</label>
          <input type="text" id="result" value={sum} name="addresult" readOnly className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="result">Number of sheep</label>
          <input type="text" id="result" value={product} name="result" readOnly className="form-control" />
        </div>
        {//<button onClick={Add} className="btn btn-primary">Submit</button>
  }
      </form>
    </div>
  );
}

export default Form;
