import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
`;
export const Detail = styled.div`
  order: ${(props: any) => props.value};
`;
export const DropDown = styled.div`
  display: ${(props: any) => props.dis};
  width: 100vw;
  height: 0px;
  background-color: blanchedalmond;
  animation-name: display;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  order: ${(props: any) => props.order};
`;
