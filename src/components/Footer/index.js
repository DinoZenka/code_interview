import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './style';

function Footer() {
    const styles = useStyles();
    return (
        <Grid container className={styles.footer}>
            <Grid container className={styles.footerContainer}>
                <Grid item xs={3}>
                    <Link to='/' className={styles.footerLogo}>Code<span>Interview</span></Link>
                    <Grid container>
                        <Grid item xs={6}>
                            <p>dsds</p>
                            <p>dsds</p>
                            <p>dsds</p>
                            <p>dsds</p>
                        </Grid>
                        <Grid item xs={6}>
                            <p>ewjqen</p>
                            <p>ewjqen</p>
                            <p>ewjqen</p>
                            <p>ewjqen</p>
                        </Grid>
                    </Grid>
                    <div>
                        <p>Follow us</p>
                        {
                            ['img', 'img', 'img'].map(elem=>(
                                <span className={styles.footerFollowUs}>{elem}</span>
                            ))
                        }
                    </div>
                </Grid>
                <Grid item xs={9}>
                    dsad
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer
