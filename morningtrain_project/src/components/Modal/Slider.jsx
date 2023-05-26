import React, { useState, useEffect } from "react";
import useEmployeeStore from "../../employeeStore";
import coffee from "../../img/coffee.png"
import chore from "../../img/chore.png"
import useModalStore from "../../modalStore";
import Tags from "./Tags";

export default function SliderWithPercentage() {
  const [value, setValue] = useState(50);
  const employee = useEmployeeStore((state) => state.employee);
  const setModalValue = useModalStore((state) => state.setModalValue);

  const updatePercentage = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const getColor = () => {
    let red, green, blue;

    if (value < 75) {
      red = 255;
      green = (value * 178) / 50;
      blue = 0;
    } else {
      red = ((100 - value) * 255) / 50;
      green = 178;
      blue = 0;
    }

    return `rgb(${red}, ${green}, ${blue})`;
  };

  const [word, setWord] = useState("")
  const [colorClass, setColorClass] = useState('');

  useEffect(() => {
    if(value >= 75) {
      setWord("godt")
      setColorClass('green');
    } else if (value < 75 && value >= 50) {
      setWord("udemærket")
      setColorClass('yellow');
    } else {
      setWord("ikke godt")
      setColorClass('red');
    } 
  }, [value])

  const [stepOneComplete, setStepOneComplete] = useState(false)
  const [stepTwoComplete, setStepTwoComplete] = useState(false)
  const [stepThreeComplete, setStepThreeComplete] = useState(false)

  const nextButtonWasClicked = () => {
    employee.workData.push(Number(value))
    console.log(employee.workData);
    setStepOneComplete(true)
    setValue(50)
  }

  const nextButton2WasClicked = () => {
    employee.privateData.push(Number(value))
    console.log(employee.privateData);
    setStepTwoComplete(true)
  }

  const nextButton3WasClicked = () => {
    setStepThreeComplete(true)
  }

  const closeModal = () => {
    setModalValue(false)
  }

  return (
    <>
      { !stepOneComplete ?

        <div className="modal-container-content">
          <h2>Trivsel på Arbejdet</h2>
          <p className="modal-container-content__orange-text">Angiv hvor godt du trives hos Morningtrain</p>
          <div>
            <p className="modal-container-content__number" style={{color: getColor(), transition: "color 0.5s", fontSize: "100px", textAlign: "center"}}>
              {value}%
            </p>

              <input type="range" min={0} max={100} step={1} value={value} onChange={updatePercentage}/>
          </div>
          <img style={{opacity: (100 - value) / 100}} className="chore-image" src={chore} alt="travlt" />
          <img style={{opacity: value / 100}} className="coffee-image" src={coffee} alt="kaffe" />

          <p className="modal-container-content__dynamic-text">"Jeg trives <span className={ colorClass }>{word}</span> i hverdagen"</p>
          <button onClick={nextButtonWasClicked} className="modal__button">Næste</button>
        </div>

      :
        <></>
      }

      { stepOneComplete && !stepTwoComplete ? 

        <div className="modal-container-content">
          <h2>Trivsel uden for arbejdet</h2>
          <p className="modal-container-content__orange-text">Angiv hvor godt du trives, når du ikke er på arbejde</p>
          <div>
            <p className="modal-container-content__number" style={{color: getColor(), transition: "color 0.5s", fontSize: "100px", textAlign: "center"}}>
              {value}%
            </p>

            <input type="range" min={0} max={100} step={1} value={value} onChange={updatePercentage}/>
          </div>
          <img style={{opacity: (100 - value) / 100}} className="chore-image" src={chore} alt="travlt" />
          <img style={{opacity: value / 100}} className="coffee-image" src={coffee} alt="kaffe" />

          <p className="modal-container-content__dynamic-text">"Jeg trives <span className={ colorClass }>{word}</span> i hverdagen"</p>
          <button onClick={nextButton2WasClicked} className="modal__button">Næste</button>
        </div>

      : 

        <></>
      }

      { stepTwoComplete && !stepThreeComplete ? 

        <div className="modal-container-content">
          <h2>Angiv tags for dit arbejde</h2>
          <p className="modal-container-content__orange-text">Dette skridt er valgfrit</p>

          <div className="modal-container-content__tags-container">
            <Tags />
          </div>

          <button onClick={nextButton3WasClicked} className="modal__button">Næste</button>
        </div>

      : 

        <></>

      }

      { stepOneComplete && stepTwoComplete && stepThreeComplete ? 

      <div className="modal-container-content">
        <h2>Tak for dit svar!</h2>
        <p className="modal-container-content__orange-text">God arbejdslyst</p>
        <img src={coffee} alt="Morgan Kaffe" />
        <button onClick={closeModal} className="modal__button">Afslut</button>
      </div>

      : 

      <></>

      }

    </>
  );
}