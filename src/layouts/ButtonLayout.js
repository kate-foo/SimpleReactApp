import styled from 'styled-components';

const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 320px;
  padding-left: 10px;
  & img {
    cursor: pointer;
  }
`

export {
    ButtonLayout
}
