import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

function ContactUs() {

  const form = useRef();

  const { register, handleSubmit, formState: { errors }, reset } = useForm();


  const onSubmit = async(data) => {

    try {

      emailjs.sendForm('service_k0kk7qp', 'template_lee6b17', form.current, {

        publicKey: 'y8ZyxcDUAA7UKV1YM',

      });

      toast.success("Your message has been sent");

      reset(); // Clear the form fields

    } catch (error) {

      console.log(error);

      toast.error("Something went wrong");

    }

  }

  return (
    <>
      <div name="Contract" className='max-w-screen-2xl mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contract Me</h1>
        <span>Please fill out the form below to contract me</span>

        <div className='flex flex-col items-center justify-center mt-5'>
          <form 
            onSubmit={handleSubmit(onSubmit)}
            ref={form}
            className='bg-slate-200 md:w-96 w-80 px-8 py-6 rounded-xl'>
            <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700 '>Full Name</label>
              <input 
                {...register("name", { required: true })}
                className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline'
                id='name'
                name="name"
                placeholder='Enter Your Name'
                autocomplete="off"
                type="text" />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700 '>E-mail</label>
              <input 
                {...register("email", { required: true })}
                className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline'
                id='email'
                name='email'
                placeholder='Enter Your E-mail Address'
                autocomplete="off"
                type="text" />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700 '>Message</label>
              <textarea
                {...register("message", { required: true })}
                className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline'
                id='message'
                name='message'
                placeholder='Enter Your Message'
                autocomplete="off"
                type="text" />
              {errors.message && <span>This field is required</span>}
            </div>
            <button type="submit" className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Send</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactUs