import React from 'react'
import Gallery from './Gallery';
import {useState} from "react"
import Posts from './Posts';
import "../styles/GallerySelector.css"
function GallerySelector() {
const [state, setstate] = useState(0)
var select=<Posts/>
if(state==0){
    select=<Gallery/>
}
    return (
        <div className="align-gallery" id="Gallery">
     
            <div className="under_line"/>
           <p className="para_gallery">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <div className="options">
            <div className="photos" onClick={()=>setstate(0)}>Photos</div>
            <div className="posts" onClick={()=>setstate(1)}>Posts</div>
        </div>
           {select}
        </div>

)

}

export default GallerySelector
