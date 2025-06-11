import * as SC from "./TemplatePersonStyled";

import iconNext from "../../assets/images/icon-next.svg";
import iconPrev from "../../assets/images/icon-prev.svg";

const TemplatePerson = ({ actualPerson, switchPerson }) => {
  if (!actualPerson) return null;
  const { name, ocupation, content, image } = actualPerson;

  return (
    <SC.TemplatePersonStyled>
      <SC.ThumbStyled>
        <img src={image} alt="picture" />
        <SC.BtnThumbStyled>
        <button type="button" data-operation="dicrement" onClick={switchPerson}>
          <img src={iconPrev} alt="next" />
        </button>
        <button type="button" data-operation="increment" onClick={switchPerson}>
          <img src={iconNext} alt="prev" />
        </button>
      </SC.BtnThumbStyled>
      </SC.ThumbStyled>
      <div>
        <p>{content}</p>
        <div>
          <h3>{name}</h3>
          <h4>{ocupation}</h4>
        </div>
      </div>
    </SC.TemplatePersonStyled>
  );
};

export default TemplatePerson;
