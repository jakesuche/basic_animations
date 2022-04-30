import styled from "styled-components";
import empty from "./Empty-pana.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  img{
    width: 50%;
    height: 400px;
}
  }
`;

export default function () {
  return (
    <Wrapper>
      <img src={empty} />
    </Wrapper>
  );
}
