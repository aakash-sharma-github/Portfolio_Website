import React, { useState, useRef } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { fadeIn } from '../../variants'
// react-toastify imports
import { ToastContainer, toast } from 'react-toastify'

const Contact = () => {
  const initialState = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  const [contact, setContact] = useState(initialState)

  const handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    setContact(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const validate =
        contact.name === '' ||
        contact.email === '' ||
        contact.subject === '' ||
        contact.message === ''

      if (!validate) {
        await emailjs.send(
          process.env.SERVICE_KEY,
          process.env.TEMPLATE_KEY,
          contact,
          process.env.PUBLIC_KEY
        )
      }

      const toastVariables = {
        position: 'bottom-center',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      }
      if (!validate) {
        toast.success('We will contact you soon!', toastVariables)
      } else if (validate) {
        toast.warn('Please fill in all the fields', toastVariables)
      }
      setContact(initialState)
    } catch (err) {
      toast.error('Something went wrong!', toastVariables)
      console.log(err)
    }
  }

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text  */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let&apos;s <span className='text-accent'>Connect.</span>
          </motion.h2>
          {/* form  */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            onSubmit={handleSubmit}
            action='#'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input
                type='text'
                name='name'
                value={contact.name}
                onChange={handleChange}
                placeholder='Full Name'
                className='input normal-case'
              />
              <input
                type='email'
                name='email'
                value={contact.email}
                onChange={handleChange}
                placeholder='Email'
                className='input normal-case'
              />
            </div>
            <input
              type='text'
              name='subject'
              value={contact.subject}
              onChange={handleChange}
              placeholder='Subject'
              className='input normal-case'
            />
            <textarea
              placeholder='Message'
              name='message'
              value={contact.message}
              rows={10}
              onChange={handleChange}
              className='textarea normal-case'
            ></textarea>
            <button
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Connect
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
            <ToastContainer
              position='bottom-center'
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='colored'
            />
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact
