import { ReactComponent as Javascript } from "../img/javascript.svg";
import { ReactComponent as Python } from "../img/python.svg";
import { ReactComponent as Java } from "../img/java.svg";
import { ReactComponent as Mariadb } from "../img/mariadb.svg";
import { ReactComponent as Android } from "../img/android.svg";
import { ReactComponent as C } from "../img/c.svg";
import { ReactComponent as Cplus } from "../img/c++.svg";
import { ReactComponent as Django } from "../img/django.svg";
import { ReactComponent as Rjs } from "../img/react.svg";
import { ReactComponent as Mongo } from "../img/mongodb.svg";
import { ReactComponent as Mysql } from "../img/mysql.svg";
import { ReactComponent as Postgresql } from "../img/postgresql.svg";
import { ReactComponent as Nodejs } from "../img/nodejs.svg";
import { ReactComponent as Express } from "../img/express.svg";
const Skills = () => {
  return (
    <div className="skill-section">
      <h2 className="section-header">Proficiencies</h2>
      <div className="skills">
        <div className="skill">
          <i className="fas fa-code"></i>
          <h3 className="section-header-small">Programming Languages</h3>
          <ul>
            <li>
              <Javascript className="icon" />
              JavaScript
            </li>
            <li>
              <Python className="icon" /> Python
            </li>
            <li>
              <Java className="icon white" /> Java
            </li>
            <li>
              <C className="icon" />C
            </li>
            <li>
              <Cplus className="icon" /> C++
            </li>
          </ul>
        </div>

        <div className="skill">
          <i className="fas fa-laptop-code"></i>
          <h3 className="section-header-small">Frameworks and Libraries</h3>
          <ul>
            <li>
              <Rjs className="icon white" /> React
            </li>
            <li>
              <Nodejs className="icon" />
              Node js
            </li>
            <li>
              <Express className="icon white" />
              Express
            </li>
            <li>
              <Django className="icon" />
              Django
            </li>
            <li>
              <Android className="icon" />
              Android
            </li>
          </ul>
        </div>
        <div className="skill">
          <i className="fas fa-database"></i>
          <h3 className="section-header-small">Databases</h3>
          <ul>
            <li>
              <Mysql className="icon" /> MySQL
            </li>
            <li>
              <Mariadb className="icon" /> MariaDB
            </li>
            <li>
              <Mongo className="icon" /> MongoDB
            </li>
            <li>
              <Postgresql className="icon" /> PostgreSQL
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Skills;
