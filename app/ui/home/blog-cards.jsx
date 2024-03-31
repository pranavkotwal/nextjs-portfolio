// import img1 from '../../../public/cards/img1.avif'
const blogs = [
    {
        title: "Lorem ipsum dolor sit!",
        breif: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure eos animi hic.",
        image :"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date : "23/01/24",
        author: "Pranav Kotwal",


    }


]



export default function BlogCard(){
    return (
        <>
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
         <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 pt-8 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img-blur-shadow"
            
            />
        </div>
        <div className="p-4">
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {blogs[0].title}
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {blogs[0].breif}
            </p>
        </div>
        <div className="p-6 pt-0 flex flex-row justify-between items-center" >
            <button
            class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            >
            Read More
            </button>

            <div>
                <p className="opacity-90 text-xs antialiased">Author:</p>
                <p className="text-sm opacity-70">{blogs[0].author}</p> 
            </div>
        </div>
        </div>

        
    </>
    )
}