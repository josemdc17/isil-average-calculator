import { useState } from "react";
import "./App.css";

const App = () => {
  const [prom, setProm] = useState(0);
  const [firstEp, setFirstEp] = useState(0);
  const [secondEp, setSecondEp] = useState(0);
  const [thirdEp, setThirdEp] = useState(0);
  const [fourthEp, setFourthEp] = useState(0);
  const [midTerms, setMidTerms] = useState(0);
  const [finalTerms, setFinalTerms] = useState(0);
  const [check, setCheck] = useState(false);

  const functionsDic = {
    firstEpInput: setFirstEp,
    secondEpInput: setSecondEp,
    thirdEpInput: setThirdEp,
    fourthEpInput: setFourthEp,
    midTermsInput: setMidTerms,
    finalTermsInput: setFinalTerms,
  };

  const inputAtt = {
    type: "number",
    min: 0,
    max: 20,
    class: "numInput",
  };

  const labelAtt = {
    class: "nameLabel",
  };

  const roundCalc = (num, decimalPlaces = 0) => {
    if (num < 0) {
      return -round(-num, decimalPlaces);
    }

    let p = Math.pow(10, decimalPlaces);
    let n = num * p;
    let f = n - Math.floor(n);
    let e = Number.EPSILON * n;

    return f >= 0.5 - e ? Math.ceil(n) / p : Math.floor(n) / p;
  };

  const checkNumber = (number) => {
    if (number > 20 || number < 0) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  const Error = (isWrong) => {
    const yesOrNo = isWrong.yesOrNo;

    if (yesOrNo) {
      return <p className="errorNum">ERROR: Ingresa valores entre 0 y 20.</p>;
    }
  };

  const getAverage = () => {
    let avg =
      firstEp * 0.1 +
      secondEp * 0.1 +
      thirdEp * 0.1 +
      fourthEp * 0.1 +
      midTerms * 0.3 +
      finalTerms * 0.3;

    setProm(roundCalc(avg, 3));
  };

  const validations = (inputValue, inputId) => {
    checkNumber(inputValue);

    if (check === false) {
      if (inputValue == "") {
        functionsDic[inputId](0);
      } else {
        functionsDic[inputId](Number(inputValue));
      }
    }
  };

  return (
  

      <div className="App">
        <div className="titleDiv">
          <h1>Tu promedio: {prom}</h1>
        </div>

        <div className="mainWrapper">
          <div className="labelInput">
            <div className="labelDiv">
              <label className={labelAtt.class}>EP 01:</label>
            </div>

            <div className="inputDiv">
              <input
                id="firstEpInput"
                type={inputAtt.type}
                min={inputAtt.min}
                className={inputAtt.class}
                max={inputAtt.max}
                onChange={(e) => {
                  validations(e.target.value, e.target.id);
                }}
              />
            </div>
          </div>

          <div className="labelInput">
            <div className="labelDiv">
              <label className={labelAtt.class}>EP 02:</label>
            </div>

            <div className="inputDiv">
              <input
                id="secondEpInput"
                type={inputAtt.type}
                min={inputAtt.min}
                className={inputAtt.class}
                max={inputAtt.max}
                onChange={(e) => {
                  validations(e.target.value, e.target.id);
                }}
              />
            </div>
          </div>

          <div className="labelInput">
            <div className="labelDiv">
              <label className={labelAtt.class}>EP 03:</label>
            </div>

            <div className="inputDiv">
              <input
                id="thirdEpInput"
                type={inputAtt.type}
                min={inputAtt.min}
                max={inputAtt.max}
                className={inputAtt.class}
                onChange={(e) => {
                  validations(e.target.value, e.target.id);
                }}
              />
            </div>
          </div>

          <div className="labelInput">
            <div className="labelDiv">
              <label className={labelAtt.class}>EP 04:</label>
            </div>

            <div className="inputDiv">
              <input
                id="fourthEpInput"
                type={inputAtt.type}
                min={inputAtt.min}
                max={inputAtt.max}
                className={inputAtt.class}
                onChange={(e) => {
                  validations(e.target.value, e.target.id);
                }}
              />
            </div>
          </div>

          <div className="labelInput">
            <div className="labelDiv">
              <label className={labelAtt.class}>EP PARCIAL:</label>
            </div>

            <div className="inputDiv">
              <input
                id="midTermsInput"
                type={inputAtt.type}
                min={inputAtt.min}
                max={inputAtt.max}
                className={inputAtt.class}
                onChange={(e) => {
                  validations(e.target.value, e.target.id);
                }}
              />
            </div>
          </div>

          <div className="labelInput">
            <div className="labelDiv">
              <label className={labelAtt.class}>EP FINAL:</label>
            </div>

            <div className="inputDiv">
              <input
                id="finalTermsInput"
                type={inputAtt.type}
                min={inputAtt.min}
                max={inputAtt.max}
                className={inputAtt.class}
                onChange={(e) => {
                  validations(e.target.value, e.target.id);
                }}
              />
            </div>
          </div>

          <Error yesOrNo={check} />
        </div>

        <div className="buttonDiv">
          <button onClick={() => getAverage()} disabled={check}>
            Calcular
          </button>
        </div>
      </div>

  );
};

export default App;
