export default function CustomHR({ vertical, className }){
    return(
        <div className={`${vertical ? 'h-full w-[1px]' : 'h-[1px] w-full' } ${className} bg-gradient-to-r from-white via-skylerBlack to-white`}></div>
    )
}