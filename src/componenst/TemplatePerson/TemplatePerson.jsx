import * as SC from "./TemplatePersonStyled";

const TemplatePerson = ({ actualPerson }) => {
  if (!actualPerson) return null;
  const { name, ocupation, content, image } = actualPerson;

  return (
    <SC.TemplatePersonStyled>
      <div>
        <img src={image} alt="picture" />
        <div>
          <button type="button" operation="dicrement"></button>
          <button type="button" operation="increment"></button>
        </div>
      </div>
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
