import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

function Header() {
    return (
        <Container>
            <Search>
                <AccessTimeIcon />
                <input type="text" placeholder="Search..." />
                <HelpOutlineIcon />
            </Search>
            <UserContainer>
               <p>Ranjitha</p>
               <img src="avatar.png" />
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div `
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5B2C6F;
    color: #ffff;
    position: relative;
`

const Search = styled.div `
    display: flex;
    justify-content: center;
    input {
        min-width: 400px;
        background-color: transparent;
        color: #ffff;
        border: none;
        box-shadow: inset 0 0 0 1px rgb(104 74 104);
        border-radius: 6px;
        margin: 0 16px;
    }
    input:focus {
        outline: none;
    }
`

const UserContainer = styled.div `
    position: absolute;
    right: 16px;
    display: flex;
    align-items: center;
    p {
        margin-right: 16px;
    }
    img {
        width: 28px;
        height: 28px;
        border: 2px solid #ffff;
        border-radius: 3px;
    }
`
