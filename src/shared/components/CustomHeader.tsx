// rafc crea un nuevo componente

interface Props {
    title:string;
    descripcion?: string
}

const CustomHeader = ({title, descripcion} : Props) => {
  return (
    <div className='content-center'>
        <h1>{ title }</h1>
        { descripcion && <p>{descripcion}</p> }
    </div>
  )
}

export default CustomHeader
