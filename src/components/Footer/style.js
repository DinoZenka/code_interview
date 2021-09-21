import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        width: '100%',
        backgroundColor: 'green',
    },
    footerContainer: {
        width: '90%',
        margin: '0 auto',
        padding: '0 20px',
    },
    footerLogo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textDecoration: 'none'
    },

    footerFollowUs: {
        width: '50px',
        height: '50px',
        padding: '20px',
        margin: '0 10px',
        backgroundColor: 'pink'
    }
}));

export default useStyles;