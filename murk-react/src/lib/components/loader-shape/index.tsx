
export const LoaderShape = ({width}:{width:number}) => {
  return (
    <div className='loader-shape' style={{width,borderWidth:width/6.25}}></div>
  )
}
