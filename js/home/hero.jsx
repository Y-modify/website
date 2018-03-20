import { h, app } from 'hyperapp'
import fontawesome from '@fortawesome/fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faGooglePlusG from '@fortawesome/fontawesome-free-brands/faGooglePlusG'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faTumblr from '@fortawesome/fontawesome-free-brands/faTumblr'
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube'
import { Link, Route, location } from '@hyperapp/router'

fontawesome.library.add(faFacebook)
fontawesome.library.add(faTwitter)
fontawesome.library.add(faGooglePlusG)
fontawesome.library.add(faInstagram)
fontawesome.library.add(faTumblr)
fontawesome.library.add(faYoutube)

const heros = [
  {
    title:'YamaX',
    detail:' 趣味のためのヒューマノイド'},
  {
    title:'Ozone OS',
    detail:'お気に入りのOSを、Edisonに'},
  {
    title:'Enjoy Making',
    detail:'私達は仕事のように趣味をしているだけで、あくまでそれは趣味なのです'}
]
const snss = [
  {
    icon:'fab fa-twitter',
    url:'https://twitter.com/ymodify314'
  },
  {
    icon:'fab fa-facebook',
    url:'https://www.facebook.com/Ymodify314'
  },
  {
    icon:'fab fa-google-plus-g',
    url:'https://plus.google.com/u/0/b/109945619381118132728/+YmodifyOrg314/'
  },
  {
    icon:'fab fa-instagram',
    url:'https://instagram.com/ymodify314/'
  },
  {
    icon:'fab fa-tumblr',
    url:'https://y-modify.tumblr.com/'
  },
  {
    icon:'fab fa-youtube',
    url:'https://www.youtube.com/channel/UCnDs9Rdml-Z_bYAn3CSBxeg'
  }
]
export const Hero = () => ( 
  <div>
    { heros.map(hero => 
      <div>
        <h1>{hero.title}</h1>
        <p>{hero.detail}</p>
      </div>
    )}
  </div>
)
export const Description = () => (
  <div>
    {
      snss.map(sns =>
        <Link to={sns.url}>
          <i className={sns.icon}></i>
        </Link>
      )
    }
    <p>
        Y-modifyは、ものづくりを楽しむ学生達のコミュニティです。
    </p>
    <p>
        メンバーの得意な分野をかけあわせ、世の中にテクノロジーで変化をもたらします。
    </p>
  </div>
)
