import React, { useInputState } from 'react';
import TextField from '@material-ui/core/TextField';
// import useInputState from './useInputState';


const TodoForm = ({ saveTodo }) => { 
    const { value, reset, onChange } = useInputState('');
    return (
        <form 
            onSubmit={event => { 
            event.preventDefault();
            saveTodo(value);
            reset();
            }}
        >
        <TextField 
            variant="outlined" 
            placeholder="Add an item"
            margin="normal"
            onChange={onChange}
            value={value}
        />
    </form>
    );
};

export default TodoForm;