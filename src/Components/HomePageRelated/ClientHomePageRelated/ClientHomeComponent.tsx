import ClientLoggedInComponent from "./ClientLoggedInComponent";
import ClientNotLoggedInComponent from "./ClientNotLoggedInComponent";



const ClientHomeComponent =()=>{


    const isLoggedIn =false;

    return(
        <div>
            <div className='w-full flex flex-col justify-center items-center'>

            </div>

            { isLoggedIn ? <ClientLoggedInComponent/>:<ClientNotLoggedInComponent/>}
            

        </div>
    )
}


export default ClientHomeComponent;


