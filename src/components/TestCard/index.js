import { Button, Card, Typography, Box} from "@material-ui/core"
import useStyles from './style.js'

function TestCard(props) {
    const styles = useStyles(); 
    var description = "Success rate: " + props.sucRate + "% | Participants: " + props.participants
    var tags = props.tags.join(', ')
    return (
      <Card elevation={3}>
        <Box className={styles.testLayout}>
          <Typography item variant="h6" component="p" className={styles.testTitle}>
            {props.name}
          </Typography>
          <Typography item component="p" className={styles.description}>
            {description}
          </Typography>
          <Button className={styles.button}>Try</Button>
          <Typography item component="p" className={styles.tags}>
            {tags}
          </Typography>
        </Box>
      </Card>
    )
}

export default TestCard;
