import React, { useState } from 'react';
import './LandingContact.scss';

import { send } from 'emailjs-com';

const LandingContact = () => {
  const [modalText, setModalText] = useState('');
  const [showModal, toggleShowModal] = useState(false);
  const [canSend, toggleCanSend] = useState(true);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const textOptions = {
    sending: 'Sending Message',
    success: 'Message Sent',
    failure: 'Failed to Send Message',
    invalid: 'Invalid E-mail',
  };

  const inputChanged = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    if (form.name !== '' && form.message !== '' && form.email !== '' && canSend) {
      toggleCanSend(false);
      setModalText(textOptions.sending);
      toggleShowModal(true);

      const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (emailRegex.test(form.email)) {
        send(
          process.env.EMAILJS_SERVICE,
          process.env.EMAILJS_TEMPLATE,
          form,
          process.env.EMAILJS_USER
        ).then(
          (result) => {
            console.log('Success', result.status, result.text);
            setModalText(textOptions.success);
            setTimeout(() => {
              toggleShowModal(false);
              toggleCanSend(true);
            }, 5000);
          },
          (error) => {
            console.log('Failed', error);
            setModalText(textOptions.failure);
            setTimeout(() => {
              toggleShowModal(false);
              toggleCanSend(true);
            }, 2000);
          }
        );
      } else {
        setModalText(textOptions.invalid);
        setTimeout(() => {
          toggleShowModal(false);
          toggleCanSend(true);
        }, 2000);
      }
    }
  };

  return (
    <div className='LandingContact'>
      {showModal && <Modal text={modalText} />}
      <div className='Content'>
        <div className='Left'>
          <h4>A business you can grow starts here</h4>
          <p>
            A bright future starts here. Start growing your business today. I’ve helped over a
            billion clients find the perfect web design for them. Start now!
          </p>
          <p className='Number'>(613) 869-2343</p>
        </div>
        <div className='ContactForm'>
          <div className='Row'>
            <div className='Col'>
              <label>Name:</label>
              <input type='text' name='name' onChange={(e) => inputChanged(e)} />
            </div>
            <div className='Col'>
              <label>Email:</label>
              <input type='text' name='email' onChange={(e) => inputChanged(e)} />
            </div>
          </div>
          <div className='Row2'>
            <label>Message:</label>
            <textarea name='message' onChange={(e) => inputChanged(e)}></textarea>
          </div>
          <button onClick={() => submitForm()}>Send Message</button>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ text }) => {
  if (text == 'Message Sent') {
    return (
      <div className='Modal Modal-Success'>
        <p>{text}</p>
      </div>
    );
  } else {
    return (
      <div className='Modal'>
        <p>{text}</p>
      </div>
    );
  }
};

export default LandingContact;
