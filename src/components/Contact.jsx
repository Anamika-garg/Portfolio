import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="container contact" id ="Contact">
        <div className="contact-heading-div">
        <h1 className="topHeading">Contact Me!</h1>
        <h2 className="contact-detail">Get in Touch!</h2>
        <br /><br />
        <h1 className='contact-sub-heading'>Let's Build Something Together🔥</h1>
        </div>

        <div className="form-div">
          <form action="">
            <label htmlFor="name"> <div className="label-text"> Name </div></label>
              <input className='input' type="text" name='name' placeholder='Enter Your Name' />
              
            <label htmlFor="email"> <div className="label-text"> Email </div></label>
              <input className='input' type="email" name='email' placeholder='Enter Your Email' />
            <label htmlFor="message"><div className="label-text"> Message </div></label>
              <textarea className='message' type="text" name='message' placeholder='Enter Your Message!' />
            <button className='btn submit'>Submit</button>
          </form>
        </div>
    </div>
    </>
  )
}

export default Contact