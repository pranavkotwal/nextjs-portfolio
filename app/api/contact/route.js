import { transporter , mailOptions} from "@/app/config/nodemailer"
import { NextResponse } from "next/server"


const CONTACT_MESSAGE_FIELDS = {
    name:"Name",
    email:"Email",
    message:"Message"
}
const generateEmailContent = (data) => {
    const stringData  = Object.entries(data).reduce((str,[key,val])=>{
        str += `${CONTACT_MESSAGE_FIELDS[key]}:${val}}`

    },"")
}
export async function POST(request) {

    if(request.method=="POST"){
        const data = await request.json()
        if(!data.name || !data.email || !data.message){
            return NextResponse.json({message:"Bad request"},{ status: 400 })

        }

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject:data.name,
                text:"This is a test string",
                html:"<h1> Test Title </h1> <p>Some body text </p>"
            })

            return NextResponse.json({success:true},{status:200})
            
        } catch (error) {
            console.log(error)
            
        }


    }

    const body = await request.json()
    console.log(body)
    return NextResponse.json({message:"Bad request"},{ status: 400 })
}