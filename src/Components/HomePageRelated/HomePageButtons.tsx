


const HomePageButtons =(props:any)=>{

console.log(props.img)
    return(

        <div>
        <div className='w-full flex  justify-center items-center gap-10 mt-12'>
             <div className="flex flex-col items-center gap-2 ">
              <img src={require(`../../Assets/Icons/${props.img}`)} className='w-[70px] h-[80px]
                   ' alt="logo"/>
                
                <div className="text-white	">{props.title}</div>
            </div>


        </div>
        </div>
    )
}


export default HomePageButtons;


