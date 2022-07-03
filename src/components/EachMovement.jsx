import styled from 'styled-components';

export default function EachMovement() {
    return (
        <Container>
            <div>
                <MovementDate>00/00</MovementDate>
                <Description>Almoço kalendas</Description>
                <Value>000,00</Value>
            </div>
        </Container>
    )
}
const Container = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 12px; 
    div{
        position: relative;
        height: 100%;
    }
`;
const MovementDate = styled.p`
    color: #C6C6C6;    
`;
const Description = styled.p`

    color: #000000;
    position: absolute;
    bottom: 0px;
    left: 50px;

`;
const Value = styled.p`

    color: #C70000;
    position: absolute;
    bottom: 0;
    right: 0;
`;