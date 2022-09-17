// JSX: Javascript + XML (HTML)


//Componentes / Propriedades - Base de React
interface ButtonProps{ //Propriedades, para diferenciar um botão do outro
  title: string;
}

function Button(props: ButtonProps){ //Criação de um componente, que é uma function,
  return (         //para ser usada no return do App, que é usado no main.tsx
    <button>
      {props.title}
    </button>
  );
}

function App() {
  return (
    <div>
      <Button title="Send 1"/>
      <Button title="Send 2"/>
      <Button title="Send 3"/>
      <Button title="Hello World"/>
    </div>
  )
}

export default App
