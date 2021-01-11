import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  width: 60vw;
`;

export const Right = styled.div`
  height: 10rem;
  text-align: center;
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Apple = styled.div`
  width: 6%;
  padding: 5%;
  border-radius: 25px;
  background-color: red;
`;

export const Span = styled.span`
  font-family: "ubuntu";
  font-size: 15pt;
  color: greenyellow;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 15%;
`;

export const Arrows = styled.div`
  display: flex;
  flex-direction: column;
  height: 4rem;
  justify-content: space-between;
  font-size: 30pt;
  color: yellow;
`;

export const ArrowTop = styled.div`
  display: flex;
  justify-content: center;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ArrowTopContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const GameArea = styled.div`
  margin: 2% 2%;
  background-color: white;
  position: relative;
  width: 500px;
  height: 400px;
  background-image: radial-gradient(
    circle,
    #e9e366,
    #d8de61,
    #c7d95c,
    #b6d459,
    #a5cf56
  );
`;
