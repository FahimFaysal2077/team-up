import React from 'react'
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <HeaderContainer>
            {/* Header Left */}
            <HeaderLeft>
                <HeaderAvatar
                    
                />
                <AccessTimeIcon />
            </HeaderLeft>

            {/* Header Search */}
            <HeaderSearch>
                <SearchIcon />
                <input type="text" placeholder="Search" />
            </HeaderSearch>

            {/* Header Right */}
        </HeaderContainer>
    )
}

export default Header;

const HeaderSearch = styled.div`
 flex: 0.4;
 opacity: 1;
 border-radius: 6px;
 text-align: center;
 display: flex;
 padding: 8 58px;
 color: gray;
 border: 1px gray solid;

 > input {
     background-color: transparent;
     border: none;
     text-align: center;
     min-width: 30vw;
 }
`;

const HeaderContainer = styled.div`
 display: flex;
 position: fixed;
 width: 100%;
 align-items: center;
 justify-content: space-between;
 padding: 10px 0;
 background-color: var(--team-color);
 color: white;
`;

const HeaderLeft = styled.div`
 flex: 0.3;
 display: flex;
 align-items: center;
 margin-left: 20px;

 > .MuiSvgIcon-root {
     margin-left: auto;
     margin-right: 30px;
 }
`;

const HeaderAvatar = styled(Avatar)`
 cursor: pointer;

 :hover {
     opacity: 0.8;
 }
`;