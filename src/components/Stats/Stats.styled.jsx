import styled from "@emotion/styled";

export const ListStats = styled.ul`
    display: flex;
    margin: 0 auto;
    margin-top: 20px;
    background-color: rgb(221, 231, 241);

`

export const StatsElem = styled.li`
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: center;
    width: 100px;

    border: 1px solid grey;

    :not(:last-child) {
    border-right: none;
    }
`
export const Number = styled.span`
    font-weight: bold;
    margin-top: 10px;
`