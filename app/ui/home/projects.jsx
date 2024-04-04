import React from 'react';
import ProjectCards from './project-cards';
import { dm_serif_display } from '../fonts';

export default function Projects() {
    return (
        <section id="projects" className='mt-[35px] mx-[15px] flex w-full justify-center flex-col'>
            
            
            <h1 className={`${dm_serif_display.className} text-3xl md:text-4xl px-2 pb-6 text-[#ffffff] text-start`}>Selected Projects </h1>
            
            <div className='flex w-full md:flex-col '>
                <ProjectCards/>

            </div>
            

            
        </section>
    );
}


