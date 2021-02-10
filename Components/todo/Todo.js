import React from 'react'
import CheckBox from '@material-ui/core/Checkbox';
import './todo.css';
import { setCheck, removeTodo } from '../reducerSlice/reducerSlice';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 12,
      
      color: 'white',
      height: 28,
      padding: '0 0px',
      width: 30
    },
    icon: {
        width: 20,
    }
  });
  

export const Todo = ({ name, id, done }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleCheck = () => {
        dispatch(setCheck(id));
    }
    return (
        <div className="todoItem"> 
            <CheckBox 
                checked={done}
                color="secondary"
                onChange={handleCheck}
                inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <p className={done && 'todoItem--done'}>{name}</p>
            <Button className={classes.root} onClick={() => dispatch(removeTodo(id))}>
                <DeleteIcon className={classes.icon} />
            </Button>
        </div>
    )
}
