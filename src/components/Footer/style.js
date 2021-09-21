import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        width: '100%',
        backgroundColor: 'rgba(40, 50, 160, 1)',
    },
    footerContainer: {
        width: '90%',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'left',
    },
    footerLogo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    footerLogoSpan: {
        color: 'rgba(255, 99, 92, 1)',
    },
    footerMenuContainer: {
        textAlign: 'left',
        fontSize: 14,
        color: 'white'
    },

    footerFollowUs: {
        width: '50px',
        height: '50px',
        margin: '0 10px',
        backgroundColor: 'pink'
    },
    footerMenuLink: {
        color: 'white',
        textDecoration: 'none'
    }
}));

export default useStyles;