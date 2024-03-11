import './style.css'

export default function Modal(propModal: {isopen:boolean, children?:any}){


    return(
        <>
            {propModal.isopen && <div className="modal fadeIn">{propModal.children}</div>}
        </>
    )
}