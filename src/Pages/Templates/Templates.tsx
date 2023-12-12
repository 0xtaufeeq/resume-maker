import React from 'react'

import './templates.scss'

import { Link } from 'react-router-dom';
import Panel from '../../Layouts/Panel';


const Templates = () => {
  return (
     <section id="resume-create">
       <Panel />

       <div className="resume-templates">
<div>
<Link to={'/create/scape'} >  <img src='/images/scape.jpg' alt="Scape" />  </Link>
<Link to={'/create/nikoDark'} >  <img src='/images/niko2.jpg' alt="Niko2" />  </Link>
<Link to={'/create/niko'} >  <img src='/images/niko.jpg' alt="Niko" />  </Link>
<Link to={'/create/minimal'} >  <img src='/images/minimal.jpg' alt="Minimal" />  </Link>
<Link to={'/create/orea'} > <img src='/images/orea.jpg' alt="Orea" /> </Link>
<Link to={'/create/scoop'} > <img src='/images/scoop.jpg'  alt="Scoop" /> </Link>
<Link to={'/create/blank'} > <img src='/images/blank.png'  alt="Blank" /> </Link>
</div>
       <p className='more'>More Templates Comming Soon ...</p>

       </div>


     </section>
    )
}

export default Templates
