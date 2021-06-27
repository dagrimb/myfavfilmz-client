import React, {Fragment} from 'react'; 
import { FaveMovies } from '../fave-movies/fave-movies';

import Image from 'react-bootstrap/Image';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
//import { Button } from '../button/button';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

//create MovieView component
export class ProfileView extends React.Component {

  //function for both adding and removing event listener
  keypressCallback(event) {
    console.log(event.key);
  }

  render() {
    const { onBackClick, user } = this.props;

    return (
        <div className="profile-view pt-5 bg-dark" style={{ paddingBottom: '1rem', width: '100%', color: 'white', background: '#292b2c'}}>
          <div style={{ height: '100%', maxWidth: '100%' }} >
            <div className="user-profile" style={{ color: 'white' }}>
              <div className="user-intro mb-4 justify-content-left text-left ml-3">
                <h2>my profile</h2>
                <img src={user.ImagePath} height="5%" width="20%"/>
              </div>
                <div>
                <div style={{ display: 'inline-flex', marginLeft: '10rem'}}>
                  <h5>Username</h5>
                  <span className="value ml-5">{user.Username}</span>
                </div><br/>
                <div style={{ display: 'inline-flex', marginLeft: '10rem'}}>
                  <h5>Password</h5>
                  <p className="ml-5"> ********** </p>
                </div><br/>
                <div style={{ display: 'inline-flex', marginLeft: '10rem'}}>
                  <h5 className="value mr-4">E-mail</h5>
                  <span className="value ml-5"> {user.Email}</span>
                </div><br/>
                <div style={{ display: 'inline-flex', marginLeft: '10rem'}}>
                  <h5>Date of Birth</h5>
                  <span className="value ml-4">{ (new Date(user.Birthday)).toLocaleDateString() } </span>
              </div>
              </div>
              <Link to={`/users/${user.Username}/edit_profile`}>
              <Button className="mt-4" style={{ marginLeft: '10rem'}} variant="primary">Edit Profile or Unregister</Button> 
              </Link>
            </div>
              <div style={{ textAlign: 'right', marginRight: '2rem' }}>
                <Link to={`/`}>
                  <Button className="mt-5" style={{display: 'float-right'}} variant="primary">Back to All Movies</Button>
                </Link>
              </div>
              <h4 className="text-left mt-5 ml-3">{user.Username}'s fav filmz</h4>
              </div>
              </div>            
          );
        }
      }