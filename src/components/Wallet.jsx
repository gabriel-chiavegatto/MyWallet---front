import styled from 'styled-components';
import Logout from '../assets/logout.png';
import IconDeposito from '../assets/add-grana.png';
import IconSaque from '../assets/retirar-grana.png';
import EachMovement from './EachMovement';
export default function Wallet() {
    return (
        <Container>
            <header>
                <h1>Olá, Fulano</h1>
                <img src={Logout} alt='out' />
            </header>
            <Statement>
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <EachMovement />
                <footer></footer>
            </Statement>
            <nav>
                <div>
                    <img src={IconDeposito} alt='+' />
                    <p>Nova entrada</p>
                </div>
                <div>
                    <img src={IconSaque} alt='+' />
                    <p>Nova saída</p>
                </div>
            </nav>
        </Container>
    )
}
const Container = styled.section`
    header{
        height: 78px;
        height: 11.7vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        padding: 0 24px 0 24px;
        img{
            width: 23px;
            height: 24px;
        }
    }
    nav{
        width: 326px;
        height: 21.3vh;
        margin-left: 24.5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div{
            width: 155px;
            height: 114px;
            background: #A328D6;
            border-radius: 5px; 
            position: relative;
            
            img{
                width: 25px;
                height: 25px;
                position: absolute;
                left: 10px;
                top: 10px;
            }
            p{
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 700;
                font-size: 17px;
                line-height: 20px;
                color: #FFFFFF;
                width: 65px;
                position: absolute;
                left: 10px;
                bottom: 10px;
            }
        }
        
    }
`;
const Statement = styled.article`
    width: 326px;
    height: 67vh;
    background: #FFFFFF;
    border-radius: 5px;
    margin-left: 24.5px;
    padding: 23px 11px 10px 12px;
    overflow: scroll;
`;
