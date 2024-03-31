import React from 'react';
import { dm_serif_display } from '../fonts';


const projects=[
    {
        name:'Health Tracker',
        brief:"i created it using MERN stack to manage my mother's blood reports effectively.",
        TechStack:"Full-Stack",
        projectImage:'https://images.unsplash.com/photo-1662782387214-f16622e8fe47?q=80&w=2767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link:'https://github.com/pranavkotwal/healthTracker/',
        projectDetails:"",
        

    },
     {
        name:'Health Tracker',
        brief:"i created it using MERN stack to manage my mother's blood reports effectively",
        TechStack:"Full-Stack",
        projectImage:'https://images.unsplash.com/photo-1667373509687-4c4574541218?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link:'https://github.com/pranavkotwal/healthTracker/',
        projectDetails:""

    }

]

export default function ProjectCards() {
    return (
        <>

        {projects.map((project,index)=>{


            return(
                <div key={index} className='w-full  grid-cols-1 md:flex  m-2'>
            <div className='bg-gray-400 h-1/2 px-2 py-4 md:h-[400px] lg:h-[500px] lg:justify-between  lg:text-2xl lg:px-8 md:w-[600px] md:flex md:flex-col md:basis-1/2 md:justify-between md:py-6 '>
                <p className='opacity-50 pb-2 xl:pb-4'>{project.TechStack}</p>

                <div className='basis-1/3'>
                    <h2 className={`${dm_serif_display.className} text-2xl lg:text-3xl pb-4`}>{project.name}</h2>

                    <p className='pb-4 md:text-xl opacity-90'>{project.brief}</p>

                </div>

                <a className='underline' href={`${project.link}`}>View Project</a>
            </div>

            <div className=' md:flex md:basis-1/2 md:h-[400px] lg:max-w-full  lg:min-h-[500px]'>
                <img className="min-h-[250px] lg:w-[95%] md:min-h-[400px] lg:min-h-[500px]" src={`${project.projectImage}`} alt="" />
            </div>

            
        </div>

            )

        })}
        </>
        
    );
}


