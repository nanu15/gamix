import React from 'react';

const Contact = () => {
    return (
        <div className='contact'>
        <form >
            <h1>Contact <span>Here</span></h1>
            <input type="text" name="name" id=""  placeholder='Enter name'/>
            <input type="email" name="email" id="" placeholder='example@gmail.com' />
            <input type="phone" name="phone" id="" placeholder='+92' />
            <textarea name="message" id="" cols="30" rows="10" placeholder='Type here' />
            <button className='contactbtn' type="submit" value="">Send</button>

        </form>
        </div>
    );
};

export default Contact;