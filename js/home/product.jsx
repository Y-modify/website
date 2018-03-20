import { h, app } from "hyperapp"
import { Link, Route, location } from "@hyperapp/router"
const products = [
    {
        title:"YamaX",
        image:"/",
        category:"A Humanoid Robot",
        detail:"YamaXはIntel Edisonを内蔵したヒューマノイドロボットです。内蔵linuxを活用して音声認識、音声合成、遠隔操作などができます。",
        functions:["完全な手作り","たくさんの用意されたアクション","会話もできる"],
        buttons:[
            {
                title:"Watch video",
                url:"https://www.youtube.com/embed/xoz5ZIjy3ck?rel=0&autoplay=1"
            },
            {
                title:"Learn more",
                url:""
            }
        ]
    },
    {
        title:"Flixa",
        image:"/",
        category:"X-Platform Gaming Toolkit",
        detail:'"Float, Flat, Flexible"どんな環境にも、軽快なゲーミングライブラリを',
        functions:["組み込みに対応","多数の対応言語","オープンソース"],
        buttons:[
            {
                title:"Coming soon",
                url:"/"
            }
        ]
    },
    {
        title:"Ozone OS",
        image:"/",
        category:"Alternative OSs for Intel Edison",
        detail:"Intel EdisonのためのOSです。慣れ親しんだ環境でEdisonを。",
        functions:["Debian, CentOS, Fedora","順次OS追加予定","オープンソース"],
        buttons:[
            {
                title:"Web Site",
                url:"http://ozone.y-modify.org/"
            },
            {
                title:"Down load now",
                url:"http://ozone.y-modify.org/download"
            }
        ]
    }
]
export const Products = () => (
    <div>
        {
        products.map(pd => 
            <div>
                <h3>{pd.category}</h3>
                <h1>{pd.title}</h1>
                <div>
                    <p>{pd.detail}</p>
                    <ul>
                    {
                    pd.functions.map(func => 
                        <li>func</li>
                    )
                    }
                    </ul>
                </div>
                {
                pd.buttons.map(btn => 
                    <Link to={btn.url}>{btn.title}</Link>         
                )
                }
            </div>
           )
           }
    </div>
)
