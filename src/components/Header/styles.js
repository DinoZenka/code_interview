import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	header: {
		height: '60px',
        backgroundColor: 'rgba(40, 50, 160, 1)',
	},
    headerContainer: {
        width: '90%',
        height: '100%',
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: '0 auto',
        overflow: 'hidden'
    },
    headerLogo: {
        textTransform: 'uppercase',
        fontSize: 23,
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'bold',
    },
    headerLogoSpan: {
        color: 'rgba(255, 99, 102, 1)',
    },
    headerLink: {
        textDecoration: 'none',
        padding: '21px',
        transition: '1s',
        color: 'white',
        textTransform: 'uppercase',
        '&:hover':{
            backgroundColor: 'rgba(40, 50, 210, 1)',
            color: 'rgba(210, 210, 210, 1)',
            transition: '1s'
        }
    },
    headerLogin: {
        marginLeft: 'auto',
        padding: '15px',
        backgroundColor: 'red',
        borderRadius: '10px',
        transition: '2s'
    }
}));

export default useStyles;