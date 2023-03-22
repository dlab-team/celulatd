import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import '../../../scss/components/landing/header/_input.scss';
 import '../../../scss/layout/_landing.scss'; 


import iconlupa from '../../../assets/img/iconlupa.svg';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';



function InputHero() {
  return (
    <>
      <div className='input--hero input--footer' /* style={{borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}} */>
        <InputGroup /* className="input--hero input--footer" */ >
          <Form.Control /* className='form-imput' */
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" className="button-addon2">
            <img src={iconlupa} />
          </Button>
        </InputGroup>
      </div>
    </>
  );
}

export default InputHero;