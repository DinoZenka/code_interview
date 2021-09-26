import { Box, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Subscribe from '../Subscribe';
import useStyles from './style';
import SocialMedia from './SocialMediaLink';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const links = [
    {
        to:'/about-us',
        title:'About Us',
    },
    {
        to:'/press',
        title:'In The Press',
    },
    {
        to:'/awards',
        title:'Our Awards',
    },
    {
        to:'/contact-us',
        title:'Contact Us',
    },
    {
        to:'/privacy',
        title:'Privacy Policy',
    },
    {
        to:'/terms',
        title:'Terms & Conditions',
    }
]

function Footer() {
    const styles = useStyles();
    const urlLinks = links.map(elem=>(
        <Grid item xs={5}>
            <Link to={elem.to} className={styles.footerMenuLink}>{elem.title}</Link>
        </Grid>
    ))
    return (
        <Grid container className={styles.footer}>
            <Grid container className={styles.footerContainer}>
                <Grid item xs={4}>
                    <Link to='/' className={styles.footerLogo}>
                        Code<span className={styles.footerLogoSpan}>Interview</span>
                    </Link>
                    <Grid container className={styles.footerMenuContainer} spacing={1}>
                        {
                            urlLinks
                        }
                    </Grid>
                </Grid>
                <Grid item xs={3} className={`${styles.subscribe} ${styles.marginLeft}`}>
                    <Typography variant="h6" component="p" className={styles.socialMediaTitle}>
                        Follow CodeInterview
                    </Typography>
                    <Box className={styles.socialMediaContainer}>
                        <SocialMedia link="#" icon={faYoutube} size="2x" color="red"/>
                        <SocialMedia link="#" icon={faFacebook} size="2x" color="#3b5998"/>
                        <SocialMedia link="#" icon={faInstagram} size="2x" color="#405de6" />
                        <SocialMedia link="#" icon={faTwitter} size="2x" color="#1da1f2" />
                    </Box>
                </Grid>
                <Grid item xs={4} className={`${styles.subscribe} ${styles.marginLeft}`}>
                    <Subscribe title='Subscribe To Our Newsletter' />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer
