import { makeStyles } from "@material-ui/styles";

const getColor = ({focus, error, touched, submitError, color = 'rgba(0, 0, 0, 0.54)'}) => {
    return (touched || submitError) && error?'#f44336':focus?'rgb(40, 40, 220)':color;
}

const useStyles = makeStyles((theme) => ({
    title: {
        color: ({focus, error, touched, submitError}) => 
            getColor({focus, error, touched, submitError}),
        marginTop: 10,
        marginBottom: 3,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: "10px",
        cursor: 'text',
        boxSizing: 'content-box',
        border: ({focus, error, touched, submitError}) => (
            focus?
                `2px solid ${getColor({focus, error, touched, submitError})}`:
                `1px solid ${getColor({focus, error, touched, submitError})}`),
        borderRadius: 5,
        marginBottom: 15,
        '&:hover':{
            borderColor: ({focus, error, touched, submitError}) => (
                getColor({focus, error, touched, submitError, color: 
                    'rgba(0, 0, 0, 0.87)'})),
        },
        '&:active': {
            border: '2px solid #00f',
        },
        '&:active': {
            borderColor: 'rgba(0, 0, 250, 0.87)',
        }
    },
    listContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 0,
        margin: 0,
    },
    listElement: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'default',
        padding: '2px 4px',
        color: '#8a858d',
        backgroundColor: '#f2f2f2',
        borderRadius: 3,
        margin: '3px 4px 3px 4px',
    },
    elementText: {
        color: '#4a4548',
        fontSize: 17,
        lineHeight: '22px',
        margin: 0,
        padding: 0,
    },
    elementDelete: {
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: 16,
        lineHeight: '19px',
        marginLeft: 5
    },
    input: {
        border: 0,
        outline: 'none',
        fontSize: 16,
        padding: 6,
    },
    error: {
        marginTop: -12,
        color: '#f44336',
        marginLeft: 15,
        fontSize: 13,
    }
}));

export default useStyles;