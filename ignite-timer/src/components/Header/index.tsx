import { HeaderContainer } from './styles';
import { Scroll, Timer } from 'lucide-react'

import igniteLogo from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <HeaderContainer>
            <img src={igniteLogo} alt='' />
            <nav>
                <NavLink to='/' title='Timer'>
                    <Timer size={24} />
                </NavLink>
                <NavLink to='/history' title='Histórico'>
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}