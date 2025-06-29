import styled from "@emotion/styled";

export const TemplatePersonStyled = styled.div`
@media (min-width: 1280px){
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
}
`;

export const ThumbStyled = styled.div`
  position: relative;

  display: inline-block;

  margin-bottom: 56px;

  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 36px;
  padding-right: 36px;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='697' height='657'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='31.368%25' x2='100%25' y1='70.497%25' y2='22.772%25'%3E%3Cstop offset='0%25' stop-color='%239975D0'/%3E%3Cstop offset='100%25' stop-color='%234A3FDB'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='url(%23a)' d='M233.996 231.082c-62.714 60.37 48.746 169.37 176.07 259.677 127.324 90.307 187.825 151.88 269.763 73.005 81.938-78.874 114.518-247.228 0-332.682-114.518-85.453-383.12-60.369-445.833 0z' transform='matrix(0 1 1 0 97 -97)'/%3E%3Cpath fill='%23F4F4FC' d='M14.885 304.531c-51.873-49.833 40.32-139.81 145.634-214.355C265.833 15.63 315.877-35.197 383.651 29.912c67.774 65.108 94.722 204.08 0 274.62-94.722 70.539-316.893 49.832-368.766 0z'/%3E%3Cg stroke='%23D3629D' stroke-width='4'%3E%3Cpath d='M344 45.087L364.087 25l20.088 20.087L404.262 25l20.088 20.087L444.437 25'/%3E%3Cpath d='M344 63.087L364.087 43l20.088 20.087L404.262 43l20.088 20.087L444.437 43'/%3E%3Cpath d='M344 81.087L364.087 61l20.088 20.087L404.262 61l20.088 20.087L444.437 61'/%3E%3Cpath d='M344 99.087L364.087 79l20.088 20.087L404.262 79l20.088 20.087L444.437 79'/%3E%3C/g%3E%3Cpath fill='%23CF6BCB' d='M667 640a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm0-22a3 3 0 110 6 3 3 0 010-6zm176 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm0-22a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm-176 0a3 3 0 110 6 3 3 0 010-6zm22-22a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm-176 0a3 3 0 110 6 3 3 0 010-6z'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;

  & img {
    width: 254px;
    height: 253px;

    border-radius: 8px;

    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);

    @media (min-width: 1280px){
        width: 392px;
        height: auto;
    }
  }
`;

export const BtnThumbStyled = styled.div`
  position: absolute;

  bottom: 0;
  left: 50%;

  transform: translate(-50%, -12px);

@media (min-width: 1280px){
left: 0;

  transform: translate(72px, -12px);

}

  & img {
    width: 12px;
    height: 16px;
  }

  & > button {
    padding-top: 16px;
    padding-bottom: 16px;

    background-color: #fff;

    &:hover, &:focus, &:active{
        cursor: pointer;
    }
  }

  & > button:nth-of-type(1) {
    padding-left: 18px;
    padding-right: 16px;

    border-bottom-left-radius: 28px;
    border-top-left-radius: 28px;
  }

  & > button:nth-of-type(2) {
    padding-left: 16px;
    padding-right: 18px;

    border-bottom-right-radius: 28px;
    border-top-right-radius: 28px;
  }
`;

export const ContentConStyled = styled.div`
  position: relative;
  color: #202047;
  line-height: 1.3;

  @media (min-width: 1280px){
    width: 32%;

    text-align: left;

    transform: translate(124px, 0);
    
    & > div{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
  }

  & > p {
    margin-bottom: 20px;

    font-size: 18px;
    font-weight: 300;

  }

  & h3 {
    font-size: 15px;
    font-weight: 700;

    @media (min-width: 1280px){
        margin-right: 16px;
    }
  }

  & h4 {
    font-size: 15px;
    font-weight: 500;
    color: #b9b9ce;
  }

  &::before {
position: absolute;
top: 0;
left: 50%;

transform: translate(-50%, -50%);

    display: inline-block;
    width: 60px;
    height: 50px;

    content: "";

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='100'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='31.368%25' x2='100%25' y1='72.917%25' y2='19.557%25'%3E%3Cstop offset='0%25' stop-color='%239975D0'/%3E%3Cstop offset='100%25' stop-color='%234A3FDB'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23a)' fill-rule='evenodd' d='M52.615 0L24.858 100H0V0h52.615zM120 0L92.243 100H67.385V0H120z' opacity='.15'/%3E%3C/svg%3E");
    background-size: contain;
  }
`;
