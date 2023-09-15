import React from "react"
import { AlertDialogBody,AlertDialogOverlay,AlertDialogContent,AlertDialogHeader,Button,AlertDialogFooter,useDisclosure,AlertDialog, useToast } from "@chakra-ui/react"
import { deleteassignment, deleteassignmentfailure, deleteassignmentsuccess } from "../../../../Redux/InstructerSide/AllAssignments/DeleteAssignment/Action"
import { useDispatch, useSelector } from "react-redux"

export default function DeleteDialog({id,refresh}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

const dispatch=useDispatch()
const logindata=useSelector((state)=>state.loginreducer)
const {token}=logindata
const deletedata=useSelector((state)=>state.deleteassignmentreducer)
const {deleteisLoading,deleteisError}=deletedata
const toast=useToast()
const handleclick=()=>{
 dispatch(deleteassignment(token,id)).then((res)=>{
  toast({description:res.data.msg,status:"success","position":"top",duration:"2000"})
  onClose()
  refresh()
  dispatch(deleteassignmentsuccess())
 }).catch((err)=>{
  if(err.message=="Network Error"){
    toast({description:"Please check your internet connection",status:"error",position:"top",duration:3000})

 dispatch(deleteassignmentfailure())
  }else{
    toast({description:err.response.data.msg,status:"error",position:"top",duration:3000})

    dispatch(deleteassignmentfailure()) 
  }
 })
}
  // console.log(id)
  // console.log("hi")
    return (
      <>
        <Button w="80px" colorScheme='red' onClick={onOpen}>
          Delete 
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                {deleteisLoading?
                 <Button colorScheme='red'  ml={3}>
                 Loading...
               </Button>:<Button colorScheme='red' onClick={handleclick} ml={3}>
                  Delete
                </Button>
               }
                
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }