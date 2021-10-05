import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { TestList } from '../../components';
import useStyles from './style.js';

function TestListPage() {
    const styles = useStyles();
    return (
      <Container className={styles.mainLayout}>
        <Grid container spacing={2}>
          <Grid container item direction="column" spacing={2} xs={7}>
            <Grid item>
              <Typography variant="h4" component="p" className={styles.pageTitle}>Tests</Typography>
            </Grid>
            <TestList item testsPerPage={3}/>
          </Grid>
          <Grid container item direction="column" spacing={2} xs={5}>
            <Grid item>
              <Typography variant="h5" component="p" className={styles.pageTitle}>Leaderboard</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    )
  }

  export default TestListPage;