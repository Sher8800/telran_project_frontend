import React from 'react'
import 'react-toastify/dist/ReactToastify.css';

export default function Notifications({ ToastContainer }) {
  return (
    <ToastContainer
      position="top-left"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      pauseOnHover={false}
      closeOnClick
      rtl={false}
      theme="light"
    />
  )
}
