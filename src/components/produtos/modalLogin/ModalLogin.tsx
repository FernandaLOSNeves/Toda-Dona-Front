import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@mui/material/Modal';
import { Box } from "@mui/material"
import CloseIcon from '@material-ui/icons/Close';
import Login from '../../../paginas/login/Login';
import { Typography } from '@material-ui/core';



function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Japer: {
      position: 'absolute',
      width: '1300px 200px',
      height:'200px',
      backgroundColor: "transparent",
      borderRadius: '20px',
      padding: theme.spacing(1),
    },
  }),
);

function ModalLogin () {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.Japer}>
      <Box display="flex" justifyContent="flex-end" className="cursor">
        <CloseIcon onClick={handleClose}/>
      </Box>
      <Login/>
      </div>
  );

  return (
    <div className='topoPg'>
      <Typography 
      onClick={handleOpen} 
      variant="h6" 
      color="inherit" 
      className='cursor'>
        • Entrar    
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default ModalLogin;