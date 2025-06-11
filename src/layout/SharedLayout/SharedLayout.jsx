import { useEffect, useState } from "react";
import * as SC from "./SharedLayoutStyled";
import {peopleDb} from "../../db/peopleDb";
import TemplatePerson from "../../componenst/TemplatePerson/TemplatePerson";
import { handlePerson } from "../../utils/handlers/handlePerson";
const SharedLayout = () => {
  const [actualPerson, setActualPerson] = useState(null);

  useEffect(() => {
    setActualPerson(handlePerson(peopleDb));
  }, []);



  return (
    <SC.SharedLayoutStyled>
      <TemplatePerson actualPerson={actualPerson}/>
    </SC.SharedLayoutStyled>
  );
};

export default SharedLayout;
