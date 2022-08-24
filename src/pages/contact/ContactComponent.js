import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    marginRight: "10px",
    marginLeft: "10px",
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <div id="schedule_form">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/shivamshekhar19/30min"
                  style={{ minWidth: "320px", height: "480px" }}
                />
              </div>
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyItems: "center",
                  alignItems: "center",
                  paddingBottom: "10px",
                }}
              >
                <a
                  {...styles}
                  className="general-btn"
                  href={greeting.resumeLink}
                  target="blank"
                >
                  My Resume
                </a>
                <a
                  {...styles}
                  className="general-btn"
                  href="https://forms.gle/XNurMwy9Kw5zFW7u7"
                  target="blank"
                >
                  Send me a Message
                </a>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {blogSection["subtitle"]}
              </p>
              <div className="blogsite-btn-div">
                <a
                  {...styles}
                  className="general-btn"
                  href={blogSection.link}
                  target="blank"
                >
                  My Blogs
                </a>
              </div>
            </div>
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
