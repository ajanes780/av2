'use client';

import { H3 } from '../typography';
import { useState } from 'react';
import { Spinner } from '../spinner';

export const ContactForm = () => {
  const [state, setState] = useState({});
  const [sending, setSending] = useState(false);
  const [succesOrFailureMessage, setSucessOrFailureMessage] = useState("Lets Get Started")
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    fetch('/api/email', {
      body: JSON.stringify(state),
      headers: {

        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
      .then((res) => {
        setSending(false);
        console.log('Response received');
        if (res.status === 200) {
          setSucessOrFailureMessage("Your Message Has Been Sent")
        }
      })
      .catch((err) => {
        console.log(err)
         setSucessOrFailureMessage("There was an error, please try again later")
      });
  };

  return (
    <>
      {
        !sending ?

          <form onSubmit={handleSubmit} className='bg-white w-full  max-w-screen-lg p-4'>
            <H3 variants='text-black'> {succesOrFailureMessage} </H3>
            <div className='grid gap-6 mb-6 md:grid-cols-2'>
              <div>
                <label
                  htmlFor='first_name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  First name
                </label>
                <input
                  type='text'
                  id='first_name'
                  name='first_name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Jon'
                  onChange={(e) => setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                  required />
              </div>
              <div>
                <label
                  htmlFor='last_name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Last name
                </label>
                <input
                  type='text'
                  id='last_name'
                  name='last_name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Doe' required
                  onChange={(e) => setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                />
              </div>

              <div>
                <label
                  htmlFor='phone'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Phone number
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='123-456-7890'
                  pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                  onChange={(e) => setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                />
              </div>
              <div>
                <label
                  htmlFor='referral'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  How did you hear about me?
                </label>
                <input
                  type='text'
                  id='referral'
                  name='refer'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='instagram'
                  onChange={(e) => setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                  required />
              </div>

            </div>
            <div className='mb-6 gap-6'>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email
                address</label>
              <input
                type='email'
                id='email'
                name='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 mb-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='john.doe@company.com'
                onChange={(e) => setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                required

              />

              <label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your
                message
              </label>
              <textarea
                id='message'
                rows='4'
                name='message'
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Write your thoughts here...'
                onChange={(e) => setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
              >

        </textarea>

            </div>
            <button
              type='submit'
              className='text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Submit
            </button>

          </form> :(<div className="text-center">
          <Spinner/>
          </div>  )
      }
    </>
  );
};
