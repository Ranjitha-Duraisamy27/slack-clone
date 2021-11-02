import React from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

function Chat() {
    return (
        <Container>
            <Header>
                <Title>
                    <div className="title">
                        <h4># clever</h4>
                        <StarBorderIcon />
                    </div>
                    <div className="info">
                        <div className="detail-text">Details</div> 
                        <InfoOutlinedIcon />
                    </div>
                </Title>
                <p>Company-wide announcements and work based matters</p>
            </Header>
        </Container>

    )
}

export default Chat

const Container = styled.div `

`
const Header = styled.div `
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
    p {
        margin-top: 5px;
        color: #333333;
        font-size: 14px;
    }
`

const Title = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
        display: flex;
        align-items: center;
    }
    .info {
        display: flex;
        align-items: center;
        .detail-text {
            margin-right: 10px;
        }
    }
`
