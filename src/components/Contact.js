import { ReactComponent as Github } from "../img/github.svg";
import { ReactComponent as Instagram } from "../img/instagram.svg";
import { ReactComponent as Twitter } from "../img/twitter.svg";
import { ReactComponent as LinkedIn } from "../img/linkedin.svg";
import { ReactComponent as Call } from "../img/call.svg";
import { ReactComponent as Gmail } from "../img/gmail.svg";
import { ReactComponent as Outlook } from "../img/outlook.svg";
import { ReactComponent as WhatsApp } from "../img/whatsapp.svg";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-header">Contact Me</h2>
      <p>
        I would be delighted to connect with you and discuss any potential
        opportunities or collaborations.
      </p>

      <div className="contact">
        <div className="column">
          <ul>
            <li>
              Gmail:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:briankeny15@gmail.com"
              >
                <Gmail className="icon" />{" "}
              </a>
            </li>
             <li>
               Outlook:
               <a href="mailto:brianarapkeny@outlook.com">
               <Outlook className="icon" />
                </a>
             </li>

            <li>
              Call Me:{" "}
              <a target="_blank" rel="noreferrer" href="tel:+254721524154">
                <Call className="icon" />
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/brian-kipkemboi-aa949419a"
              >
                {" "}
                <LinkedIn className="icon" />
              </a>
            </li>
          </ul>
        </div>

        <div className="column">
          <ul>
            <li>
              Github:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.github.com/briankeny"
              >
                <Github className="icon white" />
              </a>
            </li>
            <li>
             WhatsApp:
             <a href="https://wa.me/254721524154">
              <WhatsApp className="icon" />
             </a>
            </li>

            <li>
              Instagram:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/iambrrian"
              >
                <Instagram className="icon" />
              </a>
            </li>

            <li>
              Twitter:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.twitter.com/Iambrianka"
              >
                <Twitter className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Contact;
