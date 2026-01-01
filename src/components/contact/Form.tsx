import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Toaster, toast } from 'sonner'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
}

interface FormData {
  name: string
  email: string
  message: string
}

/**
 * Contact form component with validation
 * Uses react-hook-form for form handling
 * EmailJS integration for sending messages
 */
export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (_data: FormData) => {
    const toastId = toast.loading('Sending your message, please wait...')

    // Demo mode - show info message
    toast.info(
      'Form submissions are demo-only. Contact me via email for real inquiries.',
      { id: toastId }
    )

    // TODO: Enable EmailJS integration
    // emailjs.send(
    //   process.env.PUBLIC_SERVICE_ID,
    //   process.env.PUBLIC_TEMPLATE_ID,
    //   { to_name: 'Charles', from_name: data.name, reply_to: data.email, message: data.message },
    //   { publicKey: process.env.PUBLIC_PUBLIC_KEY }
    // )
  }

  return (
    <>
      <Toaster richColors />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="contact-form"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="name"
          {...register('name', {
            required: 'This field is required!',
            minLength: {
              value: 3,
              message: 'Name should be at least 3 characters long.',
            },
          })}
          className="contact-input glass"
        />
        {errors.name && (
          <span className="contact-error">{errors.name.message}</span>
        )}

        <motion.input
          variants={item}
          type="email"
          placeholder="email"
          {...register('email', { required: 'This field is required!' })}
          className="contact-input glass"
        />
        {errors.email && (
          <span className="contact-error">{errors.email.message}</span>
        )}

        <motion.textarea
          variants={item}
          placeholder="message"
          {...register('message', {
            required: 'This field is required!',
            maxLength: {
              value: 500,
              message: 'Message should be less than 500 characters',
            },
            minLength: {
              value: 50,
              message: 'Message should be more than 50 characters',
            },
          })}
          className="contact-textarea glass"
        />
        {errors.message && (
          <span className="contact-error">{errors.message.message}</span>
        )}

        <motion.button
          variants={item}
          type="submit"
          className="contact-submit glass"
        >
          Cast your message!
        </motion.button>
      </motion.form>
    </>
  )
}
