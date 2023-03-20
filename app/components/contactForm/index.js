'use client';

import { H3 } from '../typography';
import { useState } from 'react';
import { Spinner } from '../spinner';

export const ContactForm = () => {
  const [state, setState] = useState({});
  const [sending, setSending] = useState(false);
  const [succesOrFailureMessage, setSucessOrFailureMessage] = useState('Lets Get Started');
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    fetch('/api/email', {
      body: JSON.stringify(state),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((res) => {
        setSending(false);
        console.log('Response received');
        if (res.status === 200) {
          setSucessOrFailureMessage('Your Message Has Been Sent');
        }
      })
      .catch((err) => {
        console.log(err);
        setSucessOrFailureMessage('There was an error, please try again later');
      });
  };

  return (
    <>
      {!sending ? (
        <form onSubmit={handleSubmit} className='w-full max-w-screen-lg  bg-white p-4'>
          <H3 variants='text-black'> {succesOrFailureMessage} </H3>
          <div className='mb-6 grid gap-6 md:grid-cols-2'>
            <div>
              <label
                htmlFor='first_name'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                First name
              </label>
              <input
                type='text'
                id='first_name'
                name='first_name'
                className='focus:ring-black-500 focus:border-black-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                placeholder='Jon'
                onChange={(e) => setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                required
              />
            </div>
            <div>
              <label
                htmlFor='last_name'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Last name
              </label>
              <input
                type='text'
                id='last_name'
                name='last_name'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                placeholder='Doe'
                required
                onChange={(e) => setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
              />
            </div>

            <div>
              <label
                htmlFor='phone'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Phone number
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                placeholder='1234567890'
                pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
                onChange={(e) => setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
              />
            </div>
            <div>
              <label
                htmlFor='referral'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                How did you hear about me?
              </label>
              <input
                type='text'
                id='referral'
                name='refer'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                placeholder='instagram'
                onChange={(e) => setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                required
              />
            </div>
          </div>
          <div className='mb-6 gap-6'>
            <label
              htmlFor='email'
              className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
            >
              Email address
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='focus:ring-black-500 focus:border-black-500 mb-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              placeholder='john.doe@company.com'
              onChange={(e) => setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
              required
            />

            <label
              htmlFor='message'
              className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
            >
              Your message
            </label>
            <textarea
              id='message'
              rows='4'
              name='message'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              placeholder='Write your thoughts here...'
              onChange={(e) => setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            ></textarea>
          </div>
          <button
            type='submit'
            className='focus:ring-black-300 w-full rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white  hover:bg-gray-800 focus:outline-none focus:ring-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Submit
          </button>
        </form>
      ) : (
        <div className='text-center'>
          <Spinner />
        </div>
      )}
    </>
  );
};
