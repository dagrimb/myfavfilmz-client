import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

//import { IoArrowForwardCircle } from 'react-icons/io';
// Wanted to use  <div><IoArrowForwardCircle /> </div> to create arrow button in movies mockup


//create MovieCard component
export class MovieCard extends React.Component {
  render() {
    const { movie, onClick } = this.props;

    return (
      <CardDeck variant="h-50" class="bg-dark">
        <Card className="text-center" style={{ height: '46rem', width: '18rem', color: 'white', background: '#292b2c'}}>
          <Card.Body class="bg-dark h-100 mx-2">
            <Card.Title style={{marginTop: 25, paddingRight: 0 }}>{movie.Title}</Card.Title>
            <Card.Img variant="top mb-3" style={{ height: '20rem', width: '13rem'}} src={movie.ImagePath} />
            <Card.Text style={{ width: '100%', marginBottom: 25}}>{movie.Description.Synopsis}</Card.Text>
            <Button variant="primary" onClick={() => onClick(movie)}>Read More</Button>
          </Card.Body>
        </Card>
      </CardDeck>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Description: PropTypes.shape({
      Synopsis: PropTypes.string.isRequired,
      Source: PropTypes.string.isRequired
    }),
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      Source: PropTypes.string.isRequired
    }),                   
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Source: PropTypes.string.isRequired
    }),
    Actors: PropTypes.array.isRequired,
    _id: PropTypes.string.isRequired,    
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Featured: PropTypes.bool.isRequired,
    Rotten_Tomatoes_score: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};