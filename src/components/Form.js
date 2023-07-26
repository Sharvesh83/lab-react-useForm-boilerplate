import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Registration Form</h2>
        <label>
          First Name:
          <input type="text" {...register('firstName', { required: true })} />
          {errors.firstName && <p className="error">Please enter your first name!</p>}
        </label>
        <label>
          Last Name:
          <input type="text" {...register('lastName', { required: true })} />
          {errors.lastName && <p className="error">Please enter your last name!</p>}
        </label>
        <label>
          Email:
          <input
            type="email"
            {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          {errors.email && (
            <p className="error">
              {errors.email.type === 'required'
                ? 'Please enter your email!'
                : 'Invalid email'}
            </p>
          )}
        </label>
        <label>
          Password:
          <input
            type="password"
            {...register('password', {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
          />
          {errors.password && (
            <p className="error">
              {errors.password.type === 'required'
                ? 'Please enter your password!'
                : errors.password.type === 'minLength'
                ? 'Password must be more than 4 characters!'
                : 'Password cannot be more than 20 characters!'}
            </p>
          )}
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;
