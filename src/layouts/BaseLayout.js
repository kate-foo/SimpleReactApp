import styled from "styled-components";

// 애플리케이션의 전체적인 레이아웃을 구성한다.
// 애플리케이션의 전체에 적용될 스타일을 설정한다.
const BaseLayout = styled.div`
  padding: 0px 5px 0 5px; /* top right bottom left */
  font-family: Consolas, Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-style: normal;
  color: black;
  text-align: center;
`;

const BaseParagraph = styled.p`
  font-family: Consolas, Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: ${props => props.size || 'medium'};;
  color: ${props => props.color || 'black'};
`

const TopLayout = styled.div`
  padding: 5px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: darkcyan;
  width: 100%;
  height: 60px;
  color: white;
`

const MainLayout = styled.div`
  padding: 15px 10px 5px 10px;
  display: flex;
  width: 100%;
`

export {
    BaseLayout,
    BaseParagraph,
    TopLayout,
    MainLayout
}
