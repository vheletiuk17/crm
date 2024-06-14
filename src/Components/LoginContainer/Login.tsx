import React from 'react';

import css from './login.module.css'
import {useAppDispatch, useAppSelector} from "../../Hooks/reduxHooks";

import {IAuth} from "../../Interfaces/authInterface";
import {authActions} from "../../Redux/Slice/AuthsSlice";
import {useNavigate} from "react-router";
import {SubmitHandler, useForm} from "react-hook-form";


const Login = () => {
    const {register, handleSubmit} = useForm<IAuth>()
    const {error} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const login:SubmitHandler<IAuth> = async (user) =>{
        const {meta:{requestStatus}} = await dispatch(authActions.login({user}));
        if (requestStatus === 'fulfilled'){
            navigate('/list')
        }
    }

    return (
        <div className={css.Father_container}>
            <div className={css.login_container}>
                <form onSubmit={handleSubmit(login)} className={css.login_form}>
                    <p>Email</p>
                    <input className={css.input} type="email" placeholder={'Enter email'} {...register('email')}/>
                    <p>Password</p>
                    <input className={css.input} type="password" placeholder={'Enter password'} {...register('password')}/>
                    <div>
                        <button className={css.btn}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export {Login};