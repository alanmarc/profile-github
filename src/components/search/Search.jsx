import React from 'react'
import { IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export const Search = (props) => {

  const { setInputUser
  } = props;

  const [valueInput, setValueInput] = useState('');

  const onSearchValueChange = (event) =>{
    const inputValue = event.target.value;
    setValueInput(inputValue);
  }

  const handlesubmit = () =>{
    setInputUser(valueInput);
  }
  return (  
    <Stack 
        direction= 'row'
        sx={{
            marginTop: '30px',
            width: '80%',
        }}
    >
        <TextField 
            id="outlined-basic"
            label="Github User"
            placeholder="Octocat"
            variant="outlined"
            size='small'
            value={valueInput}
            onChange={onSearchValueChange}
            sx={{
                width: '90%',
            }}

        />
        <IconButton
        onClick={handlesubmit}
        size='small'
        sx={{
            left: '-45px',
        }}
        >
            <SearchIcon/>
        </IconButton>
    </Stack>
  )
}
