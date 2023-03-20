import styled from "@emotion/styled";

export const TableBodyCell = styled.td`
    width: 300px;
    padding: 15px;

    font-size: 14px;
    text-transform: capitalize;
    text-align: center;

`

export const TableBodyRow = styled.tr`
    :nth-of-type(even) {
        background-color: rgb(206, 206, 226);
    }
`