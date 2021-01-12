import React from 'react'
import  perfil from '../assets/img/perfil.jpg'
import  './styles.css'
export const AboutMe = () => {

    
    
    return (
        
           <div className="card ms-3">
                <div className="row no-gutters">
                       <div className="gradiente col-md-4">
                           <img src={perfil} style={{borderRadius: 190}} className="imagen card-img mt-2" alt={'Eduardo'} />
                       </div>
                       <div className="col-md-8">
                           <div className="card-body">
                             <h5 className="hola">Hi, my name is</h5><br/>
                             <h1 className="nombre">EDUARDO ARIAS.</h1><br/>
                             <h1 className="build">I BUILD THINGS FOR THE WEB.</h1>
                             <p className="ingeniero">I am a systems engineer, and front end developer, I have knowledge in layout, creation and design of web pages and web applications, using different technologies such as <b>HTML, CSS, JavaScript, React.js, Node.js, Angular.js, MongoDB, Firebase , SqlServer, Bootstrap, SaSS, Microsoft Excel and intermediate English.</b></p><br/>
                                
                                
                                <div className="btn fadeup-enter-done" style={{transitionDelay: 500}}>
                                   <a className="link" href="https://www.linkedin.com/in/eduardomaz/" target="_blank" rel="noreferrer">Get In Touch</a>
                                </div>
                             
                             
                           </div>
                
                       </div>
                </div>

            

           </div>
        
        
    )
}