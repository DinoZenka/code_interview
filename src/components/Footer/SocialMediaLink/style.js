import { makeStyles } from '@material-ui/styles';
 
const useStyles = makeStyles((theme) => ({
    socialContainer: {
        width: 30,
        height: 30,
        marginRight: 15,
        padding: '10px',
        backgroundColor: 'white',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

export default useStyles;