import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory,useParams } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import { addUser, getSingleUser, updateUser } from '../redux/actions';




const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '45ch',
        },
    },
}));
const useBtnStyles = makeStyles((theme) => ({
    root: {
     
    
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


const EditUser = () => {
    const [info,setInfo ] = useState({
        name: "",
        address: "",
        email : "",
        contact : ""
    })
    const [error, setError] = useState("");
    const {user} = useSelector((state) => state.user);

    const history = useHistory();
    const dispatch = useDispatch();
    const {name, address, email,contact} = info;
    const classes = useStyles();
    const btn = useBtnStyles();

    const handleInput = (e) => {
        let { name, value}  = e.target;
        setInfo({...info,[name] : value});
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !address || !email || !contact) {
            setError("Please Fill the all the input field")
        }else {
            dispatch(updateUser(info,id));
            history.push('/');
            setError("");
        }
    }
    const {id} = useParams();
    useEffect(() => {
        dispatch(getSingleUser(id));
    }, [])

    useEffect(()=> {
        if(user){
        setInfo({...user})
        }
    },[user])

    return (
        <>
        <div align="center">
            <Button style={{marginTop: "50px",width:"100px"}} variant="contained" type="submit" color="secondary" onClick={()=>history.push('/')}>Go back</Button>

            <h2>Edit User</h2>
            {error && <h3 style={{color:"red"}}>{error}</h3>}

            <form  className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField id="standard-basic" label="name" value={name} name="name" onChange={handleInput} type= "text" />
                <br />
                <TextField id="standard-basic" label="address" value={address} name="address" onChange={handleInput} type="text" />
                <br />
                <TextField id="standard-basic" label="email" value={email} name="email" onChange={handleInput} type="email" />
                <br />
                <TextField id="standard-basic" label="contact" value={contact} name="contact" onChange={handleInput} type="number" />
                <br /> 
                <Button style={{marginTop: "50px",width:"100px"}} variant="contained" type="submit"  color="primary">Edit</Button>
    
            </form>
        </div>
        </>
    );
}

export default EditUser;
