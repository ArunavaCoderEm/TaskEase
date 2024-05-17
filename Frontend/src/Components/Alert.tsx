

export default function Alert(props:any) {
  return (
    <div className="bg-red-100 text-center border m-3 border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
  <strong className="font-bold mx-3">{props.title}</strong>
  <span className="block sm:inline">{props.desc}</span>  
</div>
  )
}
