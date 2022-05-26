

import React from 'react'

const Contactbody = () => {
  return (
      <section className='contact-sec-form'>
          <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='contact-body-left'>
                        <form>
                            <input type="text" placeholder='Enter Your Name'/>
                            <input type="email" placeholder='Enter Your Email'/>
                            <input type="text" placeholder='Enter Subject'/>
                            <textarea placeholder='Your Message'>

                            </textarea>
                        </form>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='contact-body-right'>

                    </div>
                </div>
            </div>
          </div>
      </section>
  )
}

export default Contactbody
