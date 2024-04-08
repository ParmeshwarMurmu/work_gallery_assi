import React, { useRef } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
} from '@chakra-ui/react'
import style from '../CSS/AddNewProject.module.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { shallowEqual, useDispatch, useSelector  } from 'react-redux'
import { additionalDetailsAction, descriptionAction, titleAction } from '../Redux/NewProjectReducer/action'
import axios from 'axios'

const AddNewProject = () => {
    const fileInput = useRef(null);

    const dispatch = useDispatch();
    const { title, description, additionalDetails} = useSelector((store)=>{
        return {
          title: store.newProjectReducer.title,
          description: store.newProjectReducer.description,
          additionalDetails: store.newProjectReducer.additionalDetails
        }
    }, shallowEqual)


    const submitFormHandler =  async(e) => {
        e.preventDefault();
        console.log(title, description, additionalDetails);
        let formData =new FormData();
        formData.append('workGallery', fileInput.current.files[0])
        formData.append('title', title)
        formData.append('description', description)
        formData.append('additionalDetails', additionalDetails)
        
        console.log(formData)

        axios.post('http://localhost:8000/upload/newSubmission', formData)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
        
         


    }




    return (
        <div className={style.container}>

            <div className={style.formControl}>
                <form onSubmit={submitFormHandler} enctype="multipart/form-data">
                    <FormControl>
                        <FormLabel>Title</FormLabel>
                        <Input type='text'
                        value={title}
                        onChange={(e)=>{dispatch(titleAction(e.target.value))}}
                         />

                        <FormLabel>Description</FormLabel>
                        <Input type='text'
                        value={description}
                        onChange={(e)=>{dispatch(descriptionAction(e.target.value))}}
                         />

                        <FormLabel>Additional Information</FormLabel>
                        <Input type='text'
                        value={additionalDetails}
                        onChange={(e)=>{dispatch(additionalDetailsAction(e.target.value))}}
                         />

                        <FormLabel>Upload Image</FormLabel>
                        <Input type='file'
                            name='workGallery'
                            ref={fileInput}
                        />

                    </FormControl>



                    <Input
                        type="submit"
                        value="submit"
                        size="sm"
                        className="Btn"
                        backgroundColor={"#63B3ED"}
                        color={"white"}
                        fontSize={"20px"}
                    />

                </form>

            </div>
        </div>
    )
}

export default AddNewProject
