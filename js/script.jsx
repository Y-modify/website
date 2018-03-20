import { h, app } from 'hyperapp'
import { Link, Route, location } from '@hyperapp/router'
import fontawesome from '@fortawesome/fontawesome'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import { Hero,Description } from './home/hero.jsx'
import {Products} from './home/product.jsx'
import {AboutUs} from './about/us.jsx'
import styles from '../css/style.css'
fontawesome.library.add(faFacebook)

const Home = () => ( 
  <main>
    <h2>Home</h2>
    <Hero />
    <Description /> 
    <Products />
  </main>)
const About = () => (
  <main>
    <h2>About</h2>
    <Description />
    <AboutUs />
  </main>)
const Projects = () => (
  <main>
    <h2>Projects</h2>
  </main>)
const Contact = () => <h2>Contact</h2>

const Footer = () => (
  <footer>
    <p>Copyright © 2017 Y-modify All Rights Reserved.</p>
  </footer>
)

const views = [
  {
    path:'/',
    display: 'Y-modify',
    view: Home,
    menu:[]
  },
  {
    path:'/about',
    display: 'about us',
    view: About,
    menu:[['About','/about'],['Members','/about/members']]
  },
  {
    path:'/projects',
    display: 'projects',
    view: Projects,
    menu:[['YamaX','/projects/yamax'],['Flixa','projects/flixa'],['Ozone OS','projects/ozone_os']]
  },
  {
    path:'/contact',
    display: 'contact',
    view: Contact,
    menu:[]
  }
]

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
                <ul>
                  {
                    view.menu.map(menu =>
                      <li><Link to={menu[1]}>{menu[0]}</Link></li>
                    )
                     
                  }
                </ul>
              </li>
            )
          }
        </ul>
      </nav>
    </header>
    {
      views.map(view =>
        <div>
          <Route path={view.path} render={view.view} />
        </div>
      )
    }
    <Footer />
  </div>
)

const main = app(state, actions, view, document.body)

const unsubscribe = location.subscribe(main.location)
