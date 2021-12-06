import styled from 'styled-components'

export const BoxCard = styled.div`
    background-color: white;
    height: 300px;
    width: 200px;
    border-radius: 30px;
    margin: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-shadow: 4px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    &:hover,
    &:active,
    &:focus {
        outline: none;
        transform: scale(1.1);
    }
`

export const BoxImage = styled.div`
    background-color: #fff;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border: solid 1px #eaeaea;
`

export const BoxText = styled.div`
    margin-top: 10px;
    font-weight: bold;
`

export const InfoNumber = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 0.8em;
    margin-left: 10px;
`

export const Types = styled.div`
    background-color: ${props => props.color};
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.8em;
    margin-top: 10px;
    min-width: 100px;
    text-align: center;
`

export const HeaderBox = styled.div`
    text-align: center;
    padding: 20px;
    background: #eee;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.4);

    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 2;
`

export const ContaiberBox = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 180px


`
