import { useState } from "react";
import * as SC from "./SharedLayoutStyled";
import { peopleDb } from "../../db/peopleDb";
import TemplatePerson from "../../componenst/TemplatePerson/TemplatePerson";
import { switchPerson } from "../../utils/handlers/switchPerson";
const SharedLayout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const actualPerson = peopleDb[currentIndex];

  const handleSwithOperation = (evt) => {
    const operation = switchPerson(evt);

    setCurrentIndex((prevIndex) => {
      if (operation === "increment") {
        return (prevIndex + 1) % peopleDb.length;
      } else {
        return (prevIndex - 1 + peopleDb.length) % peopleDb.length;
      }
    });
  };

  return (
    <SC.SharedLayoutStyled>
      <TemplatePerson
        actualPerson={actualPerson}
        switchPerson={handleSwithOperation}
      />
    </SC.SharedLayoutStyled>
  );
};

export default SharedLayout;
