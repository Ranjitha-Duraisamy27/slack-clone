import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { SidebarOptions } from '../data/sidebarOptions'
import AddIcon from '@mui/icons-material/Add'
import { Modal } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import db from '../firebase'
import { collection, addDoc } from "firebase/firestore";

function Sidebar(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setName('');
  }
  const handleChange = (event) => {
      setName(event.target.value);
  }
  const handleSave = async() => {
      if (name !== '') {
        await addDoc(collection(db, "rooms"), {
          name,
        });
        handleClose();
      }
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

  return (
    <Container>
      <WorkSpace>
        <Name>Ranjitha</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkSpace>
      <Menu>
        {SidebarOptions.map((item, i) => (
          <Option key={i}>
            {item.icon}
            {item.text}
          </Option>
        ))}
      </Menu>
      <Channels>
        <NewChannel>
          <div>Channels</div>
          <AddIcon onClick={handleOpen} />
        </NewChannel>
        {props.rooms.map((channel) => (
          <Channel key={channel.id}># {channel.name}</Channel>
        ))}
      </Channels>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <CreateForm>
                <TextField id="filled-basic" label="Channel Name" variant="filled" value={name}
                    onChange={handleChange}/>
                <Button variant="contained" onClick={handleSave}>Save</Button>
                <Button color="secondary" onClick={handleClose}>Cancel</Button>
            </CreateForm>
        </Box>
      </Modal>
    </Container>
  );
}

export default Sidebar

const Container = styled.div `
    background-color: #011f4b;
`

const WorkSpace = styled.div `
    display: flex;
    justify-content: space-between;
    color: #fff;
    padding: 10px 15px;
    border-bottom: 1px solid rgb(255 255 255 / 10%);
`

const Name = styled.div `
`

const NewMessage = styled.div `
    width: 30px;
    height: 30px;
    background-color: #ffff;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
`

const Menu = styled.div `
`
const Option = styled.div `
    padding: 5px 15px;
    color: #ccc;
    display: grid;
    grid-template-columns: 15% auto;
    cursor: pointer;
    :hover {
        background: #03396c; 
    }
`

const Channels = styled.div `
    margin-top: 10px;
    color: #ccc;
`

const NewChannel = styled.div `
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
`
const Channel = styled.div `
    padding: 5px 15px;
    cursor: pointer;
    :hover {
        background: #03396c; 
    }
`

const CreateForm = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    Button {
        margin-left: 10px;
    }
`
