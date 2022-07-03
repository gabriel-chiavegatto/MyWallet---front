import styled from 'styled-components';

export default function Login() {
    return (
        <Container>
            <div>
                <h1>MyWallet</h1>
                <div><input type='text' placeholder='  E-mail' /></div>
                <div><input type="text" placeholder='  Senha' /></div>
                <div><button>Entrar</button></div>
                <p>Primeira vez? Cadastre-se!</p>
            </div>
        </ Container>
    )
}

const Container = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    text-align: center;
    h1{
        color: #FFFFFF;
        margin-bottom: 20px;
        width: 100%;
        height: 50px;
        font-family: 'Saira Stencil One';
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        padding-top: 159px;
    }
    input{
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
        margin: 6px;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        margin-bottom: 13px;
    }
    button{
        width: 326px;
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
        border: none;
        color: #FFFFFF;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        margin-bottom: 36px;
    }
    p{
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }
`;