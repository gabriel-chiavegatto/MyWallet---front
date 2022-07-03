import styled from 'styled-components';
import Deposit from './Deposit';
// import Login from './Login';
// import Cadastro from './Cadastro';
// import Wallet from './Wallet.jsx';
// import Redemption from './Redemption';



export default function App() {
    return (
        <AlingContainer>
            <Deposit />
        </ AlingContainer>
    )
}
const AlingContainer = styled.main`
    width: 375px;
`;