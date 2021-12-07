import styled from 'styled-components'

export const BoxCard = styled.div`
    &:hover,
    &:active,
    &:focus {
        outline: none;
        transform: scale(1.2);
    }
`

export const ContainerBox = styled.div`
    padding-left: 5%;
    padding-right: 5%;
    margin-top: 40px;
`

export const BoxGrid = styled.div`
    margin-top: 30px;
    padding: 20px;
    background-color: #d7fffe;
    box-shadow: 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`

export const Types = styled.div`
    background-color: ${props => props.color};
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 18px;
    margin-top: 10px;
    width: 200px;
    text-align: center;
`
