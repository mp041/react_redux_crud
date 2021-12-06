import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, loadUsers } from '../redux/actions';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useHistory } from 'react-router';


const useBtnStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));



const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
    table: {
        minWidth: 900,
        marginTop: 100
    },
});



const Home = () => {
    const classes = useStyles();
    const btn = useBtnStyles();
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.user)
    const history = useHistory();

    useEffect(() => {
        dispatch(loadUsers());
    }, [])

    const handleDelete = (id) => {
        if(window.confirm("are you sure")){
            dispatch(deleteUser(id))
        }
    }
    return (
        <>  
                <div className={btn.root}>
                 <Button style={{marginTop: "50px"}} variant="contained" onClick={()=> history.push('/addUser')} color="primary">Add User</Button>
                 </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Name</StyledTableCell>
                            <StyledTableCell align="center">Address</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">Contact</StyledTableCell>
                            <StyledTableCell align="center">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((row) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell align="center" component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.address}</StyledTableCell>
                                <StyledTableCell align="center">{row.email}</StyledTableCell>
                                <StyledTableCell align="center">{row.contact}</StyledTableCell>
                                <StyledTableCell align="center">
                                <div className={btn.root}>
                                    <ButtonGroup variant="contained" aria-label="contained primary button group">
                                        <Button style={{marginRight : "5px"}} color="secondary" onClick = {() => handleDelete(row.id)} >Delete</Button>
                                        <Button color="primary" onClick={() => history.push(`/editUser/${row.id}`)}>Edit</Button>
                                        
                                    </ButtonGroup>
                                </div>

                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default Home