import styled from 'styled-components'

export const Container = styled.div`
  border-top: 1px solid #ddd;
  padding: 15px 5px 15px 15px;
  > span {
    font-size: 13px;
    color: #777;
  }
  > .results {
    max-height: 200px;
    overflow-y: auto;
    padding-right: 10px;
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-track {
      background: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(207,214,218,1);
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: rgba(207,214,238,1);
    }
    > .result {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
      > .name {
        font-size: 20px;
        color: #333;
        font-weight: bold;
        max-width: 50%;
      }
      > .tag {
        color: #555;
        font-size: 13px;
        text-transform: uppercase;
        line-height: 40px;
      }
    }
  }
`