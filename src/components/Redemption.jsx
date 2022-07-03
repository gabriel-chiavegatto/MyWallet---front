import styled from "styled-components"
export default function Redemption() {
    return (
        <Container>
            <div>
                <h1>Nova saída</h1>
                <input type='text' placeholder="  Valor" />
                <input type='text' placeholder="  Descrição" />
                <button>Salvar saida</button>
            </div>
        </ Container>
    )
}
const Container = styled.section`
    height: 100vh;
    text-align: center;
    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        padding: 25px 0 40px 25px;
        text-align: start;

    }
    input{
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        margin-bottom: 13px;
    }
    button{
        background: #A328D6;
        border-radius: 5px;
        width: 326px;
        height: 46px;
        border: none;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        margin-top: 15px;
    }
`;