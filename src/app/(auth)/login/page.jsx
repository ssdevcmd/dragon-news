'use client';
import { authClient } from '@/lib/auth-client';
import { is } from 'date-fns/locale';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFunc = async (data) => {
    console.log('data', data);

    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(res, error);
  }

  // console.log('errors', errors);
  // console.log(watch('email'));
  // console.log(watch('password'));


  return (
    <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
      <div className='p-4 rounded-xl bg-white'>
        <h2 className='font-bold text-3xl text-center mb-6 text-[#403F3F]'>Login your account</h2>

        <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>

          {/* email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend  text-[#403F3F] text-lg">Email address</legend>
            <input 
            type="email"
            className="input"
            placeholder="Type here email"
            {...register('email', { required: 'email field is required' })}
            />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </fieldset>

          {/* password */}
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend  text-[#403F3F] text-lg">Password</legend>
            <input 
            type= {isShowPassword ? 'text' : 'password'} 
            className="input"
            placeholder="Type here password"
            {...register('password', { required: 'password field is required' })}
            />
            <span className='absolute right-2 top-4 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>
             {isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </fieldset>

          <button className="btn w-full bg-[#403F3F]">Login</button>
        </form>

        <p className='text-[#403F3F] mt-4 text-center'>Don't have an account? <Link href={'/register'} className='text-red-500'>Register</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;