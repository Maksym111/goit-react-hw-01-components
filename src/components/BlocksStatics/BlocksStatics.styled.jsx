import styled from "@emotion/styled";

export const ListStatics = styled.ul`
    display: flex;
`

export const StaticItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 50px;

    color: white;
    background-color: #${() => {
    return Math.floor(Math.random()*16777215).toString(16);
    }}
`

export const PercentCount = styled.span`
    font-size: 20px;
    margin-top: 10px;
`