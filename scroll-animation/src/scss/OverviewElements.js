import styled from "styled-components";

export const OverviewContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 5.21vw 7.24vw;
  background: #09011b;
  z-index: 2;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const OverviewHeader = styled.h1`
  font-size: 5.21vw;
  color: white;
  font-weight: 600;
  letter-spacing: -0.31vw;
  line-height: 4.58vw;
  margin: 0vw;
  width: 100%;
`;

export const OverviewContent = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OverviewMenu = styled.div`
  overflow: hidden;
  ul {
    font-size: 1.04vw;
    list-style: none;
    color: white;
    padding: 0vw;
    line-height: 1.7;
    transition: 0.3s all ease-in-out;

    li {
      transition: 0.3s all ease-in-out;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0px;
        width: 0%;
        height: 1px;
        background: #71a2ff;
        transition: 0.3s width linear;
      }
      :hover {
        &::after {
          width: 100px;
        }
        color: #71a2ff;
        transition: 0.3s all ease-in-out;
      }
    }
  }
`;

export const OverviewCard = styled.div`
  min-width: 100%;
  width: 100%;
  height: 27vw;
  padding: 3.13vw;
  border-radius: 2.81vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #09011b;
  color: white;
  font-size: 2vw;

  ::before {
    content: "";
    min-width: 100%;
    height: 27vw;
    border-radius: 2.81vw;
    position: absolute;
    top: 0vw;
    left: 0vw;
    background: transparent linear-gradient(0deg, #171629 0%, #09011c00 100%) 0%
      0% no-repeat padding-box;
  }
`;

export const OverviewRow = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const OverviewRow2 = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;

  div {
    position: relative;
    z-index: 2;
  }
`;

export const OverviewImg = styled.div`
  height: 13.5vw;
  width: 6vw;
  background: red;
`;

export const OverviewButton = styled.button`
  width: 9.64vw;
  height: 3.13vw;
  background: white;
  border-radius: 1.3vw;
  text-align: center;
  color: black;
  font-size: 1.04vw;
  font-weight: 100;
  z-index: 2;
  border: none;
`;

export const OverviewData = styled.div`
  width: 10.67vw;
  .icon1 {
    width: 3vw;
    height: 3vw;
    margin-bottom: 0.3vw;
    border-radius: 1.04vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #191d3f;
  }

  img {
    height: 1.5vw;
    width: auto;
    display: block;
  }
  .icon2 {
    width: 3vw;
    height: 3vw;
    margin-bottom: 0.3vw;
    border-radius: 1.04vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #463b3f;
  }
  .icon3 {
    width: 3vw;
    height: 3vw;
    margin-bottom: 0.3vw;
    border-radius: 1.04vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #463b3f;
  }
  .icon4 {
    width: 3vw;
    height: 3vw;
    margin-bottom: 0.3vw;
    border-radius: 1.04vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #31454c;
  }

  h2 {
    margin: 0vw 0vw 0.3vw 0vw;
    color: white;
    font-size: 0.8vw;
    font-weight: 600;
  }

  p {
    margin: 0vw;
    color: white;
    font-size: 0.7vw;
    font-weight: 100;
  }
`;
