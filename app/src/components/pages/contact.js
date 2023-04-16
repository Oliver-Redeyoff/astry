import '../../css/pages/contact.css'

import Fade from 'react-reveal/Fade'
import ReCAPTCHA from "react-google-recaptcha"

import { useState, useEffect, createRef } from 'react'
import axios from "axios"


function Contact() {

    const recaptchaRef = createRef()
    const [inputs, setInputs] = useState({
        email: "",
        subject: "",
        message: "",
    })
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleOnChange = (event) => {
        event.persist()
        setInputs((prev) => ({
          ...prev,
          [event.target.id]: event.target.value,
        }))
    }

    const handleOnSubmit = (event) => {
        setLoading(true)

        event.preventDefault()

        axios({ 
          method: "POST",
          url: "https://formbold.com/s/oWgYO",
          data: {...inputs, 'g-recaptcha-response': recaptchaRef.current.getValue()},
        })
            .then((r) => {
                setLoading(false)
                setSubmitted(true)
            })
            .catch((r) => {
                setLoading(false)
                console.log("error")
            })
    }

    return (
        <div className='contact'>
            <div className="dialog">
                Think we could be a good fit for your project? <br />Or want to ask some questions? 
                <br /><br />
                Feel free to <span className='multicolored-text thick'>contact us!</span>
            </div>
            

            <Fade fraction={0.2}>
                <form onSubmit={handleOnSubmit}>
                    {loading && <div className='loading'>
                        <div class="ball"></div>
                        <div class="ball"></div>
                        <div class="ball"></div>
                    </div>}

                    {submitted && <div className='submitted'>
                        <div className="icon multicolored-text">
                            <i class="fa-solid fa-thumbs-up"></i>
                        </div>
                        <div className="description">
                            Submitted! We will be in touch with you soon.
                        </div>
                    </div>}

                    <div className="form-section form-address">
                        <label>Your email address</label>
                        <input
                            onChange={handleOnChange}
                            value={inputs.email}
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email address"
                        />
                    </div>
                    <div className="form-section form-subject">
                        <label>Subject</label>
                        <input
                            onChange={handleOnChange}
                            value={inputs.subject}
                            id="subject"
                            type="text"
                            name="subject"
                            placeholder="Subject"
                        />
                    </div>
                    <div className="form-section form-message">
                        <label>Your message</label>
                        <textarea
                            onChange={handleOnChange}
                            value={inputs.message}
                            id="message"
                            name="message"
                            placeholder="Message"
                        />
                    </div>
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LebQ5ElAAAAAHeriP68xopO1Q780T4sIWR3bLli"
                    />
                    <div className="form-section form-submit">
                        <button type="submit"> Send Message </button>
                    </div>
                </form>
            </Fade>
        </div>
    )

}

export default Contact