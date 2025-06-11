import styled from "@emotion/styled";

export const SharedLayoutStyled = styled.div`
height: 100vh;

padding-top: 24px;
padding-bottom: 72px;
padding-left: 24px;
padding-right: 24px;

background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='610' height='154'%3E%3Cpath fill='%23F4F4FC' fill-rule='evenodd' d='M610 154C469.493 123.42 358.432 86.087 276.818 42S102.93-11.42 0 14v140h610z'/%3E%3C/svg%3E");
background-repeat: no-repeat;
background-position: bottom;

@media (min-width: 1280px){
    align-content: center;

    padding: 0;

background-position: bottom left;

}
`