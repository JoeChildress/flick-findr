import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import MovieCard from './MovieCard';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

function MovieModal(props) {
  // const classes = useStyles();
  // const [modalStyle] = React.useState(getModalStyle);
  const handleClose = () => {
    props.handleCloseModal();
  };
  const movie = props.selectedMovie;
  if (movie) {
    return (
      <div>
        <Modal
          open={true}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <MovieCard movie={movie} />
        </Modal>
      </div>
    );
  } else {
    return null;
  }
}

export default MovieModal;
