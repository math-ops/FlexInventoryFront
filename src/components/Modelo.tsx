import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 1,
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


export default function CadastroModelos(){
  return(
    <>
      <ModalModelo />
    </>
  );
}

export function ModalModelo(){
  return(
    <>
      <div className="form-fabricante">
        <div className="modal">
          <div className="form">
              <h3 className="subtitle">ADICIONAR MODELO</h3>
              <FormModelo />
              
          </div>
        </div>        
      </div>
    </>
  );
}

export function FormModelo(){
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return(
    <>
    <div className={classes.root}>
      <form action="">
        <div className="fabricante">
          <label><strong>Modelo</strong></label>
          <input type="text" name="modelo" id="modelo" required placeholder="Insira o Modelo"/>
          <input type="text" name="fabricante" id="fabricante" placeholder="Informe o Fabricante"/>
          <button className="new-button" onClick={handleClick}>Adicionar</button>
          <Snackbar open={open} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Modelo Adicionado com sucesso!
        </Alert>
      </Snackbar>
          </div>
      </form>
      </div>
    </>
  );
}