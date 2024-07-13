import PropTypes from 'prop-types'
export const MyComponent = ({name, lastName}) => {
    const student ={
        name: 'Jhonatan',
        lastName: 'Trujillo',
        mobile: '3102422673',
        linkeindProfile: 'https//www.linkeind.com/jhonatan'
    }

    console.log(student);
  return (
    <div>
        <hr />
        <h4>Este es Mi primer componente</h4>
        <p>Curso de React</p>
        <p><strong>Docente:</strong> {name} {lastName}</p>
        <ul>
            <li>Componentes</li>
            <li>Eventos</li>
            <li>Estados-Hooks</li>
            <li>Comunicación</li>
        </ul>
        <p><strong>Estudiante:</strong> {student.name} {student.lastName}</p>
        <p> </p>
        <ul>
            <li><strong>Celular:</strong> {student.mobile}</li>
            <li><strong>Linkeind:</strong> {student.linkeindProfile}</li>
            <li>Componentes</li>
            <li>Eventos</li>
            <li>Estados-Hooks</li>
            <li>Comunicación</li>
        </ul>
        <hr />
        <p>Estudiante: {JSON.stringify (student)} </p>


    </div>
  )
}

MyComponent.propTypes = {
    name:PropTypes.string, 
    lastName:PropTypes.string
}
