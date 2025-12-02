'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        reset();
        setTimeout(() => setSuccess(false), 6000);
        setError('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div className="name-grid">
        <div>
          <input
            {...register('firstName', { required: 'First name is required' })}
            placeholder="First name"
            className="form-input"
          />
          {errors.firstName && <p className="error-text">{errors.firstName.message}</p>}
        </div>
        <div>
          <input
            {...register('lastName', { required: 'Last name is required' })}
            placeholder="Last name"
            className="form-input"
          />
          {errors.lastName && <p className="error-text">{errors.lastName.message}</p>}
        </div>
      </div>

      <input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
        type="email"
        placeholder="Your email"
        className="form-input"
      />
      {errors.email && <p className="error-text">{errors.email.message}</p>}

      <input
        {...register('phone')}
        type="tel"
        placeholder="Phone number (optional)"
        className="form-input"
      />

      <textarea
        {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message too short' } })}
        rows="5"
        placeholder="How can we help?"
        className="form-textarea"
      />
      {errors.message && <p className="error-text">{errors.message.message}</p>}

      {success && <p className="message-success">Thank you! We'll reply soon.</p>}
      {error && <p className="message-error">{error}</p>}

      <button type="submit" disabled={isSubmitting} className="submit-btn">
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>

      
    </form>
  );
}