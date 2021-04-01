import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { getYear } from '../util/helpers';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function MovieModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  //const [open, setOpen] = React.useState(!!props.selectedMovie);
  const handleClose = () => {
    //setOpen(false);
    props.handleCloseModal();
  };
  const movie = props.selectedMovie;
  // console.log('movie data in modal', movie);
  if (movie) {
    const baseImgPath = 'https://image.tmdb.org/t/p/w200/';
    const missingImg =
      'https://cdn4.vectorstock.com/i/thumb-large/19/58/no-image-vector-30371958.jpg';
    const imgSrc = movie.poster_path
      ? baseImgPath + movie.poster_path
      : missingImg;
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <img src={imgSrc}></img>
        <h2 id="simple-modal-title">{movie.title}</h2>
        <p id="simple-modal-description">{getYear(movie.release_date)}</p>
        <p id="simple-modal-description">{movie.overview}</p>
      </div>
    );
    return (
      <div>
        <Modal
          open={true}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    );
  } else {
    return null;
  }
}

export default MovieModal;
