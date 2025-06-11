import { useEffect, useState } from "react";
import * as SC from "./SharedLayoutStyled";
import {peopleDb} from "../../db/peopleDb";
import TemplatePerson from "../../componenst/TemplatePerson/TemplatePerson";
import { handlePerson } from "../../utils/handlers/handlePerson";
import { switchPerson } from "../../utils/handlers/switchPerson";
const SharedLayout = () => {
  const [actualPerson, setActualPerson] = useState(null);
  const [operation, setOperation] = useState(null)

  useEffect(() => {
    setActualPerson(handlePerson(peopleDb, operation));
  }, [operation]);


const handleSwithOperation = (evt) => {
setOperation(switchPerson(evt))
}


  return (
    <SC.SharedLayoutStyled>
      <TemplatePerson actualPerson={actualPerson} switchPerson={handleSwithOperation}/>
    </SC.SharedLayoutStyled>
  );
};

export default SharedLayout;
