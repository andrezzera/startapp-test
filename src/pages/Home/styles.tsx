import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0; 
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(235,240,245);
  background: radial-gradient(circle, rgba(235,240,245,1) 0%, rgba(207,214,218,1) 100%);  
  > .search-wrapper {
    -webkit-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.13);
    -moz-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.13);
    box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.13);
    border: 1px solid #ddd;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    background: #fff;
    > .fake-input {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding-right: 15px;
      > input {
        width: 100%;
        height: 70px;
        border-radius: 6px;
        padding: 0 15px;
        font-size: 24px;
        color: #3a3a3a;
        font-weight: 700;
        letter-spacing: -1px;
        &::placeholder {
          color: #ccc;
          font-weight: 200;
        }
      }
    }
  }
`