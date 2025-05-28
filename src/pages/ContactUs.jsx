import { useState } from "react";
import { useForm } from "react-hook-form"
function ContactUs()
{

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors,isSubmitting },
      } = useForm();

      const onSubmit = (data) => {
        console.log("Form submitted with:", data);
        // You can handle data here (e.g., send to API)
      };
    return (
    
        <>
        <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div cols="12"><h1>Contact Us</h1></div>
            </div>
            <div className="row">
                <div cols="4">First Name</div>
                <div cols="4"><input type="text" name="firstname" {...register('firstname',{required:true})}></input>
                {errors.firstname && <span>This field is required</span>}
                </div>
            </div>
            <div className="row">
                <div cols="4">Sur Name</div>
                <div cols="4"><input type="text" name="surname" {...register('surname',{required:true})}></input>
                {errors.surname && <span>This field is required</span>}
                </div>
            </div>
            <div className="row">
                <div cols="4">Email</div>
                <div cols="4"><input type="text" name="email" {...register('email',{required:true})}></input>
                {errors.email && <span>This field is required</span>}
                </div>
            </div>
            <div className="row">
                <div cols="12"><input disabled={isSubmitting} type="submit" value={isSubmitting ? 'Submitting...' : 'Submit'}></input></div>
                
            </div>
            </form>
        </>
    
        )
}
export default ContactUs;