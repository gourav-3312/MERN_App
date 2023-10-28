import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
            {/* Phone Number */}
            <div className="contact_info_item d-flex justify-content-start align-items-center">
              <img src="" alt="phone" />
              <div className="contact_info_content">
                <div className="contact_info_title">Phone</div>
                <div className="contact_info_text">+91 7000810216</div>
              </div>
            </div>

            {/* Email */}
            <div className="contact_info_item d-flex justify-content-start align-items-center">
              <img src="" alt="email" />
              <div className="contact_info_content">
                <div className="contact_info_title">Email</div>
                <div className="contact_info_text">
                  gouravkushwahacj@gmail.com
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="contact_info_item d-flex justify-content-start align-items-center">
              <img src="" alt="address" />
              <div className="contact_info_content">
                <div className="contact_info_title">Address</div>
                <div className="contact_info_text">Jabalpur, MP, India</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact us */}
      <div className="contact_form">
        <div className="container">
          <dv className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">Get In Touch</div>

                <div id="contact_form">
                  <div className="contact_form_name d-flex justify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_for_name input_field"
                      placeholder="Nour Name"
                      required="true"
                    />

                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="Nour Email"
                      required="true"
                    />

                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      placeholder="Nour Phone Number"
                      required="true"
                    />
                  </div>

                  <div className="contact_form_text mt-4">
                    <textarea name="" id="" cols="30" rows="10" className="text-field contact_form_message" placeholder="Message"></textarea>
                  </div>

                  <div className="contact_form_button">
                    <button type="submit" className="button contact_submit_button">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </dv>
        </div>
      </div>
    </>
  );
};

export default Contact;
