import styled from "@emotion/styled";

export const Status = styled.span`
    width: 10px;
    height: 10px;

    margin-right: 10px;

    border-radius: 50%;
    background-color: ${({status}) => {
    return status === true ? 'green' : 'red'
    }};
`

export const Name = styled.p`
    margin-left: 10px;
    font-size: 20px;
`