import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import '../../../scss/components/landing/header/_input-hero.scss';


 import '../../../scss/layout/_landing.scss'; 


import iconlupa from '../../../assets/img/iconlupa.svg';




function InputHero() {
  return (
    <>
      <div className='input--hero input--footer input--footer-desktop'>
        <InputGroup  >
          <Form.Control 
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