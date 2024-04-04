import {dm_serif_display} from '@/app/ui/fonts'
export default function Hero(){
    return(
       <section id="hero" className="my-[15px]">
        <div className="px-[15px] md:px-[30px] ">
            
            <p className="text-white font-black  text-xl md:text-2xl">Hi! 👋 </p>

            <h1 className={`${dm_serif_display.className} antialiased text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-[20px] mb-[20px] text-[#cbb8ff]`}>I build Web Apps </h1>
        
        </div>

        <img className='md:h-[400px] lg:h-[600px] xl:h-[800px]  w-full' src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

       </section>
    )
}