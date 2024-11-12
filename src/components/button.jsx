import { useNavigate } from "react-router-dom"

export default function Button({ type, link, content, paddingX, paddingY, className, id, rounded, ghost }){
    const navigate = useNavigate();
    return(
        <button 
            type={type ? type : null}
            style={
                {
                    maskImage: 'radial-gradient(circle, white 100%, transparent 100%)', 
                    WebkitMaskImage: 'radial-gradient(circle, white 100%, transparent 100%)',
                }
            } 
            onClick={link ? () => navigate(link) : null}
            id={id ? id : null} 
            className={`
            ${className ? className : null} 
            overflow-hidden 
            relative 
            group 
            pointer-events-auto
            ${paddingX ? paddingX : 'px-8'} 
            ${paddingY ? paddingY : 'py-4'} 
            ${ghost ? 'bg-transparent border border-skylerBlack' : 'bg-skylerBlue'} 
            ${rounded ? 'rounded-full' : 'rounded-sm'}
            `}>
            <span className="w-0 h-full rounded-sm absolute top-0 right-0 group-hover:left-0 group-hover:right-[unset] group-hover:w-full transition-all duration-300 bg-skylerBlack"></span>
            <span className={`font-teko font-[600] text-xl ${ghost ? 'text-skylerBlack group-hover:text-white' : 'text-white'} z-10 relative whitespace-nowrap`}>{content}</span>
        </button>
    )
}