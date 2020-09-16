import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';

export default function ProfileUpdater(props) {
    return(
        <div>
 <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="displayName"
              label="Display Name"
              name="displayName"
              autoComplete="displayName"
              autoFocus

              defaultValue={props.displayName}

              onChange={props.handleChange}

            />  
    <Button
        size="large"
        variant="contained"
        color="primary"
        style={{ margin: '15px', background: '#407bff' }}
        startIcon={<PersonIcon />}
        component="span"
        onClick={props.updateUser}
        >
          Update
        </Button>
        </div>
    )
}