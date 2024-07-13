import './App.css'
import { MyComponent } from './components/MyComponent'
import { SecondComponent } from './components/SecondComponent';

function App() {
  const name = 'Javier Uribe';

  return (
    <>
      <div>
        <h1>Practica de Componentes</h1>

        {/*Cargar el primer componente*/}
        <MyComponent
          name={name}
          lastName='Uribe'
        />
        <hr />
        <h4>Segundo componente</h4>
        <SecondComponent />

      </div>

    </>
  )
}

export default App
