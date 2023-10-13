import TextField from '@mui/material/TextField';
import React from 'react';
import { useFormContext,Controller } from 'react-hook-form';

const CustomTextField = ({ name , label , required }) => {
    const {control} = useFormContext(); 
  return (
    <>
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          label={label}
          variant="filled"
          sx={{width:'75%',marginTop:'2%'}}
          color='warning'
          required
        />
      )}
    />
    </>
  )
 
}
export default CustomTextField
