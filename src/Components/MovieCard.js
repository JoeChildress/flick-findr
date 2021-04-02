import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { getYear } from '../util/helpers';
import { Autorenew } from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400, //345,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  media: {
    height: 40,
    width: '45%',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MovieCard(props) {
  console.log('movie data', props.movie);
  const classes = useStyles();
  const [value, setValue] = React.useState(props.movie.vote_average / 2);
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const baseImgPath = 'https://image.tmdb.org/t/p/w200/';

  const missingImg =
    'https://cdn4.vectorstock.com/i/thumb-large/19/58/no-image-vector-30371958.jpg';

  const imgSrc = props.movie.poster_path
    ? baseImgPath + props.movie.poster_path
    : missingImg;
  console.log('card data: ', props);
  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.movie.title}
        subheader={getYear(props.movie.release_date)}
      />
      <CardMedia
        className={classes.media}
        image={imgSrc}
        title={props.movie.title + ' poster'}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.movie.overview}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Rating
          name="simple-controlled"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </CardActions>
    </Card>
  );
}
