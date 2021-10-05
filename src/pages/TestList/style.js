import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    mainLayout: {
        flexDirection: 'column',
        flexGrow: '1'
    },
    pageTitle: {
        margin: '1rem 0rem 1rem 0rem',
        textAlign: 'left'
    }
}));

export default useStyles;