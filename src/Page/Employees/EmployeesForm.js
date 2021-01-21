import React from 'react';
import { TextField, InputAdornment, Checkbox, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import './EmployeesForm.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(2),
        width: '37ch',
      },
    },
  }))


const style = {
    marginTop: '16px',
    textAlign: 'center',
    margin: 'auto'
}
var firstColStyle = { textAlign: 'left' }


export default function EmployeesForm(){

    const classes = useStyles();
 
    return(
      <form className={classes.root} noValidate autoComplete="off" style={style}>

        {/* Row1 */}
         <div>
            <TextField
                id="outlined-select-currency-native"
                select
                label="Choose Leave type"
                value="Earned Leave"
                size="small"
                SelectProps={{
                    native: true,
                }}
                variant="outlined"
                >
                <option>Earned Leave</option>
            </TextField>
            <TextField
                id="outlined-select-currency-native"
                select
                label="Disbursement Cycle"
                value="Disbursement Cycle" 
                size="small"
                SelectProps={{
                    native: true,
                }}
                variant="outlined"
                >
                <option>Monthly</option>
            </TextField>
         </div>
        {/* Row 2 */}
        <div>
            <TextField
                id="filled-read-only-input"
                label="Leave Credits"
                defaultValue="3"
                size="small"
                InputProps={{
                    readOnly: true,
                    endAdornment: <InputAdornment position="end">per month</InputAdornment>
                }}
                variant="outlined"
            />
            <TextField
                id="filled-read-only-input"
                label="Probation Leave Credits"
                defaultValue="3"
                size="small"
                InputProps={{
                    readOnly: true,
                    endAdornment: <InputAdornment position="end">per month</InputAdornment>
                }}
                variant="outlined"
            />
        </div>
        {/* Row 3 */}
        <div>
            <TextField
                id="outlined-select-currency-native"
                select
                label="Credit Leave Balance at"
                value="Credit Leave Balance at"
                size="small"
                SelectProps={{
                    native: true,
                }}
                variant="outlined"
                >
                <option>End of every month</option>
            </TextField>
            <TextField 
                id="filled-basic" 
                defaultValue="Pro-rata Applicable" 
                variant="filled"
                size="small"
                InputProps={{
                    readOnly: true,
                    disableUnderline: true,
                    endAdornment: <InputAdornment position="end">
                         <Checkbox defaultChecked color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                    </InputAdornment>
                }}
            />
       </div>

        {/* Row 4 */}
        <div className="MarginSpacing">
            <div style={firstColStyle}>Carry Forward</div>
            <div>
                <TextField 
                    id="filled-basic" 
                    defaultValue="Allow Carry Forward Balance" 
                    variant="filled"
                    size="small"
                    InputProps={{
                        readOnly: true,
                        disableUnderline: true,
                        endAdornment: <InputAdornment position="end">
                                <Checkbox defaultChecked color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                        </InputAdornment>
                    }}
                />
                <TextField
                    id="outlined-select-currency-native"
                    label="Max Carry Forward Limit"
                    value="5"
                    size="small"
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                    >
                    <option>End of every month</option>
                </TextField>        
            </div>
       </div>
        {/* Row 5 */}
        <div className="MarginSpacing MarginSpacingBottom">
            <div style={firstColStyle}>Pay Settings</div>
            <div>
                <TextField 
                    id="filled-basic" 
                    defaultValue="Paid Leave" 
                    variant="filled"
                    size="small"
                    InputProps={{
                        readOnly: true,
                        disableUnderline: true,
                        endAdornment: <InputAdornment position="end">
                                <Checkbox defaultChecked color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                        </InputAdornment>
                    }}
                />

                <TextField 
                    id="filled-basic" 
                    defaultValue="Payable at full and final" 
                    variant="filled"
                    size="small"
                    InputProps={{
                        readOnly: true,
                        disableUnderline: true,
                        endAdornment: <InputAdornment position="end">
                                <Checkbox defaultChecked color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                        </InputAdornment>
                    }}
                />        
            </div>
       </div>
      </form>
    )
}