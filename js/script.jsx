import { h, app } from "hyperapp"
import { Link, Route, location } from "@hyperapp/router"

import styles from "../css/style.css"

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Projects = () => <h2>Projects</h2>
const Contact = () => <h2>Contact</h2>

const views = [
  {
    path:"/",
    display: "Y-modify",
    view: Home
  },
  {
    path:"/about",
    display: "about us",
    view: About
  },
  {
    path:"/projects",
    display: "projects",
    view: Projects
  },
  {
    path:"/contact",
    display: "contact",
    view: Contact
  }
];

const state = {
  location: location.state
}

const actions = {
  location: location.actions
}

const view = (state, actions) => (
  <div>
    <header>
      <nav>
        <ul>
          {
            views.map(view =>
              <li>
                <Link to={view.path}>{view.display}</Link>
              </li>
            )
          }
        </ul>
      </nav>
    </header>
    <main>
      {
        views.map(view =>
          <Route path={view.path} render={view.view} />
        )
      }
    </main>
  </div>
)

const main = app(state, actions, view, document.body)

const unsubscribe = location.subscribe(main.location)