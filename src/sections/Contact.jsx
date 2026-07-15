import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const formRef = useRef();

    const [loading,setLoading] = useState(false);
    const[form, setForm] = useState({
        name:'',
        email:'',
        message:'',
    })

    const handleChange = ({target:{name,value}}) => {
        setForm({...form, [name]:value});
    }

    //service_9dx5u1l
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                'service_9dx5u1l',
                'template_1ovvgw6',
                {
                    from_name:form.name,
                    to_name:"Hassan Alzourei",
                    from_email:form.email,
                    to_email:"Hassan-Alzourei@outlook.com",
                    message:form.message,
                },
                "yeSRtZVsaJrUYKo5M"
            )

            setLoading(false);

            alert('Your message has been sent!')

            setForm({
                name: '',
                email:'',
                message:'',
            })

        }catch(err){
            setLoading(false);
            console.log(err);
            alert('Something went wrong!')
        }


    }

    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src={`${import.meta.env.BASE_URL}assets/terminal.png`} alt="terminal background" className="absolute inset-0 min-h-screen" />
                <div className="contact-container">
                    <h3 className="head-text">Contact Me</h3>
                    <p className="text-lg text-white-600 mt-3">I'm currently open to full-time software engineering opportunities.
                        Feel free to reach out if you'd like to connect or discuss a role.</p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input type="text" name="name" value={form.name} onChange={handleChange} required className="field-input" placeholder="Hassan Alzourei" />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input type="email" name="email" value={form.email} onChange={handleChange} required className="field-input" placeholder="Hassan-Alzourei@outlook.com" />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea  name="message" value={form.message} onChange={handleChange} required rows={5} className="field-input" placeholder="Hi,I'm interested in..." />
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading?'Sending...':'Send Message'}
                            <img src={`${import.meta.env.BASE_URL}assets/arrow-up.png`} alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}
export default Contact
