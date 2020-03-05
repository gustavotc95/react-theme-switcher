import  { Container } from './style';
import React, { useContext } from 'react';
import Switch from "react-switch";
import { ThemeContext } from 'styled-components';

interface Props {
    toggleTheme(): void;
}

const Header:  React.FC<Props> = ({toggleTheme}) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            Gustavo Teixeira
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                onColor={colors.secundary}
                offColor= {colors.text}
            />
        </Container>
    );
};

export default Header;