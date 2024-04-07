'use client'
import { sendContactForm } from "@/app/lib/api";
import { Container,FormControl,FormErrorMessage,FormLabel,Heading, Input, Textarea,Button,Text,useToast} from "@chakra-ui/react";
import { useState } from "react";

const initValues = {name:"",email:"",message:""}
const initState = {values: initValues}
export default function ContactForm(){
    const toast = useToast()
    const [state, setState] = useState(initState);
    const {values , isLoading, error} = state;
    const [touched ,setTouched ] = useState({})

    const handleChange =({target}) => setState((prev)=>({
        ...prev , 
        values : {
            ...prev.values,
            [target.name]: target.value

        }
    }))
    const onBlurHandler = ({target}) => setTouched((prev) => ({...prev,
        [target.name]:true
    
    
    }))

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading:true
        }))

        try {
        await sendContactForm(values)
        setTouched({});
        setState(initState);

        toast({
            title:"Email sent",
            status:"success",
            duration:2000,
            position:"top"

        })

            
        } catch (error) {
            setState((prev) => ({
            ...prev,
            isLoading:false,
            error:error.message
        }))

            
        }
    }

    return (
        <Container maxW="450px" mt={12}>
            <Heading>Contact</Heading>
            {error && (
                <Text color="red.300" my={4} fontSize="xl">
                    {error}
                </Text>
            )}

            <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
                <FormLabel>Name</FormLabel>
                <Input 
                  type="text"
                  name="name"
                  errorBorderColor="red.300"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={onBlurHandler}
                />
            <FormErrorMessage>Required</FormErrorMessage>

            </FormControl>

            <FormControl isRequired isInvalid={ touched.email && !values.email} mb={5}>
                <FormLabel>Email</FormLabel>
                <Input 
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={onBlurHandler}

                />
            <FormErrorMessage>Required</FormErrorMessage>

            </FormControl>

            <FormControl isRequired isInvalid={touched.message && !values.message} mb={5}>
                <FormLabel>Message</FormLabel>
                <Textarea 
                  name="message"
                  rows="6"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={onBlurHandler}

                />
            <FormErrorMessage>Required</FormErrorMessage>

            </FormControl>

            <Button
            variant="outline"
            colorScheme="blue"
            isLoading={isLoading}
            disabled={!values.name || !values.email || !values.message}
            onClick={onSubmit}
            >
                Submit
            </Button>



        </Container>
    )
}