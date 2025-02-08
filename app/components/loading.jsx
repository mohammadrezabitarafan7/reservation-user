import { Spinner } from "@heroui/react"

const Loading=()=>{
    return(
         <Spinner className="h-screen flex justify-center text-white" color="primary"
         labelColor="primary" size="lg"
         label="لطفا منتظر بمانید..." />
    )
}
export default Loading