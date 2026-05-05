'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleRegisterFunc = async (data) => {
        console.log('data', data);
        const { email, name, photo, password } = data;
        console.log(email, name);

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });

        console.log(res, error);
        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("signup successful")
        }
    }



    // console.log('errors', errors);
    // console.log(watch('email'));
    // console.log(watch('password'));


    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6 text-[#403F3F]'>Register your account</h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend  text-[#403F3F] text-lg">Name</legend>
                        <input type="text" className="input"
                            placeholder="Type your name"
                            {...register('name', { required: 'name field is required' })}
                        />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend  text-[#403F3F] text-lg">Photo URL</legend>
                        <input type="text" className="input"
                            placeholder="Type here photo url"
                            {...register('photo', { required: 'photo url field is required' })}
                        />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend  text-[#403F3F] text-lg">Email</legend>
                        <input type="email" className="input"
                            placeholder="Type here email"
                            {...register('email', { required: 'email field is required' })}
                        />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend  text-[#403F3F] text-lg">Password</legend>
                        <input type={isShowPassword ? 'text' : 'password'} className="input"
                            placeholder="Type here password"
                            {...register('password', { required: 'password field is required' })}
                        />
                        <span className='absolute right-2 top-4 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>
                            {isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                        </span>
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className="btn w-full bg-[#403F3F]">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;