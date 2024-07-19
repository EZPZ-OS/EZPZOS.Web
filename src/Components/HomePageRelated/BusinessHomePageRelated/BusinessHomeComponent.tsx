import BusinessLoggedInComponent from "./BusinessLoggedInComponent";
import BusinessNotLoggedInComponent from "./BusinessNotLoggedInComponent";



const BusinessHomeComponent =()=>{


    const isLoggedIn =true;

    return(
        <div>
            <div className='w-full flex flex-col justify-center items-center'>

            </div>

            { isLoggedIn ? <BusinessLoggedInComponent/>:<BusinessNotLoggedInComponent/>}
            

        </div>
    )
}


export default BusinessHomeComponent;


