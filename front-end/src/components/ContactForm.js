import React, {Component} from 'react';
import axios from 'axios';

class ContactForm extends Component{
  
    handleSubmit(e){
        e.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;

        const emailAddress = document.getElementById('emailAddress').value;

        const rsvp = document.getElementById('rsvp').value;

        const attendee1FirstName = document.getElementById('attendee1FirstName').value;
        const attendee1LastName = document.getElementById('attendee1LastName').value;
        const attendee1Meal = document.getElementById('attendee1Meal').value;

        const attendee2FirstName = document.getElementById('attendee2FirstName').value;
        const attendee2LastName = document.getElementById('attendee2LastName').value;
        const attendee2Meal = document.getElementById('attendee2Meal').value;

        const attendee3FirstName = document.getElementById('attendee3FirstName').value;
        const attendee3LastName = document.getElementById('attendee3LastName').value;
        const attendee3Meal = document.getElementById('attendee3Meal').value;

        const attendee4FirstName = document.getElementById('attendee4FirstName').value;
        const attendee4LastName = document.getElementById('attendee4LastName').value;
        const attendee4Meal = document.getElementById('attendee4Meal').value;


        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3000/send",
            data: {
                firstName: firstName,
                lastName: lastName,
                emailAddress: emailAddress,
                rsvp: rsvp,
                attendee1FirstName: attendee1FirstName,
                attendee1LastName: attendee1LastName,
                attendee1Meal: attendee1Meal,
                attendee2FirstName: attendee2FirstName,
                attendee2LastName: attendee2LastName,
                attendee2Meal: attendee2Meal,
                attendee3FirstName: attendee3FirstName,
                attendee3LastName: attendee3LastName,
                attendee3Meal: attendee3Meal,
                attendee4FirstName: attendee4FirstName,
                attendee4LastName: attendee4LastName,
                attendee4Meal: attendee4Meal,
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
        return(
            <div className="contact-container">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group half">
                        <input type="text" className="form-control" id="firstName" placeholder="First Name" required />
                    </div>
                    <div className="form-group half">
                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" required />
                    </div>
                    <div className="form-group full">
                        <input type="email" className="form-control" id="emailAddress" aria-describedby="emailHelp" placeholder="Email Address" required/>
                    </div>
                    <div className="form-group half">
                        <select id="rsvp" placeholder="RSVP Response" required>
                            <option value="" disabled selected>RSVP Response</option>
                            <option value="yes">Joyfully Accepts</option>
                            <option value="no">Regretfully Declines</option>
                        </select>
                    </div>
                    <div className="form-group half">
                        <select id="quantity">
                            <option value="" disabled selected>Number of Attendees</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <label htmlFor="quantity">Please reference your invitation for allowed quantity.</label>
                    </div>
                    <hr></hr>
                    <div className="form-group half">
                        <label htmlFor="attendee1FirstName">Attendee #1</label>
                        <input type="text" className="form-control" id="attendee1FirstName" aria-describedby="textHelp" placeholder="First Name" />
                    </div>
                    <div className="form-group half">
                        <label htmlFor="attendee1LastName">-</label>
                        <input type="text" className="form-control" id="attendee1LastName" aria-describedby="textHelp" placeholder="Last Name" />
                    </div>
                    <div className="form-group full">
                        <select id="attendee1Meal">
                            <option value=""disabled selected>Select Meal</option>
                            <option value="chicken">Chicken</option>
                            <option value="pork">Pork</option>
                            <option value="vegetarian">Vegetarian</option>
                        </select>
                    </div>
                    <hr></hr>
                    <div className="form-group half">
                        <label htmlFor="attendee2FirstName">Attendee #2</label>
                        <input type="text" className="form-control" id="attendee2FirstName" aria-describedby="textHelp" placeholder="First Name" />
                    </div>
                    <div className="form-group half">
                        <label htmlFor="attendee1LastName">-</label>
                        <input type="text" className="form-control" id="attendee2LastName" aria-describedby="textHelp" placeholder="Last Name" />
                    </div>
                    <div className="form-group full">
                        <select id="attendee2Meal">
                            <option value="" disabled selected>Select Meal</option>
                            <option value="chicken">Chicken</option>
                            <option value="pork">Pork</option>
                            <option value="vegetarian">Vegetarian</option>
                        </select>
                    </div>
                    <hr></hr>
                    <div className="form-group half">
                        <label htmlFor="attendee3FirstName">Attendee #3</label>
                        <input type="text" className="form-control" id="attendee3FirstName" aria-describedby="textHelp" placeholder="First Name" />
                    </div>
                    <div className="form-group half">
                        <label htmlFor="attendee3LastName">-</label>
                        <input type="text" className="form-control" id="attendee3LastName" aria-describedby="textHelp" placeholder="Last Name" />
                    </div>
                    <div className="form-group full">
                        <select id="attendee3Meal">
                            <option value="" disabled selected>Select Meal</option>
                            <option value="chicken">Chicken</option>
                            <option value="pork">Pork</option>
                            <option value="vegetarian">Vegetarian</option>
                        </select>
                    </div>
                    <hr></hr>
                    <div className="form-group half">
                        <label htmlFor="attendee4FirstName">Attendee #4</label>
                        <input type="text" className="form-control" id="attendee4FirstName" aria-describedby="textHelp" placeholder="First Name" />
                    </div>
                    <div className="form-group half">
                        <label htmlFor="attendee4LastName">-</label>
                        <input type="text" className="form-control" id="attendee4LastName" aria-describedby="textHelp" placeholder="Last Name" />
                    </div>
                    <div className="form-group full">
                        <select id="attendee4Meal">
                            <option value="" disabled selected>Select Meal</option>
                            <option value="chicken">Chicken</option>
                            <option value="pork">Pork</option>
                            <option value="vegetarian">Vegetarian</option>
                        </select>
                    </div>
                    <hr></hr>
                    <div className="form-group full">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" id="message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default ContactForm; 
