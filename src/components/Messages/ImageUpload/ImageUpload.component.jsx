import React,{useState} from "react";
import{Modal,Input,Button,Icon } from "semantic-ui-react";
import mime from "mime-types"

 const ImageUplaod=(props)=>{
    const [fileState,setFileState]=useState(null)
    const acceptedTypes=["image/png","image/jpeg"]
    const onFileAdded=(e)=>{
            const file=e.target.files[0]
            if(file){
                setFileState(file);
            }
    }
    const Submit=()=>{
        if(fileState && acceptedTypes.includes(mime.lookup(fileState.name)))
        {   props.uploadImage(fileState,mime.lookup(fileState.name));
            props.onClose();
            setFileState(null);
        }
    }
    return(
        <>
        <Modal open={props.open} onClose={props.onClose} >
            <Modal.Header>Select a Image</Modal.Header>
            <Modal.Content>
                <Input type="file" 
                name="file"
                onChange={onFileAdded}
                label="file type (png,jpeg)" />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={Submit}>
                    <Icon name="checkmark" /> Add
                </Button>
                <Button onClick={props.onClose} >
                    <Icon name="remove" /> Cancel
                </Button>
            </Modal.Actions>
        </Modal>
        </>
    )

}
export default ImageUplaod;