import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Subscribe from '../Subscribe';
import useStyles from './style';

function Footer() {
    const styles = useStyles();
    return (
        <Grid container className={styles.footer}>
            <Grid container className={styles.footerContainer}>
                <Grid item xs={3}>
                    <Link to='/' className={styles.footerLogo}>
                        Code<span className={styles.footerLogoSpan}>Interview</span>
                    </Link>
                    <Grid container className={styles.footerMenuContainer}>
                        <Grid item xs={6}>
                            <Link to='/about-us' className={styles.footerMenuLink}>About Us</Link>
                            <Link to='/press' className={styles.footerMenuLink}>In The Press</Link>
                            <Link to='/awards' className={styles.footerMenuLink}>Our Awards</Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link to='/contact-us' className={styles.footerMenuLink}>Contact Us</Link>
                            <Link to='/privacy' className={styles.footerMenuLink}>Privacy Policy</Link>
                            <Link to='/terms' className={styles.footerMenuLink}>Terms & Conditions</Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <p>Follow us</p>
                </Grid>
                <Grid item xs={5}>
                    <p>Subscribe To Our Newsletter</p>
                    <Subscribe />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer
