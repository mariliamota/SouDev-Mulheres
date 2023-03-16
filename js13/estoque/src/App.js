import "./estilo.css"
import {Link} from 'react-router-dom'

function Lista(){
  let cursos = [
    'Marketing',
    'FullStack',
    'Data Analytics',
  ];
  return(
      <ul>
        {cursos.map(x =>{return(<li>{x}</li>)})}
      </ul>
  )
}

export default function App(){
  return (
    <>
      <div>
        <header>
          <Link />
        </header>
      </div>

      <div>
        <h1 className="margenta">Olá Mundo</h1>
        <h2 className="purple">Digital College</h2>
      </div>

      <hr/>

      <p>
        Bem vindo
      </p>

      <Lista />

      <hr/>

      <Lista />
    </>
  )
}