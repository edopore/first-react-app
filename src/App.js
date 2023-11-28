import "./App.css";
import Testimonio from "./components/testimonio.js";

function App() {
  return (
    <div className="App">
      <div className="contenedor-ppal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freecodecamp:</h1>
        <Testimonio
          image="emma"
          nombre="Emma Hormqvist"
          pais="Suecia"
          cargo="Software Developer"
          empresa="amipet"
          descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio augue, tristique quis ullamcorper nec, luctus in mi. Phasellus interdum scelerisque finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent feugiat sagittis gravida. Nam bibendum finibus nibh ut molestie. Quisque vitae urna in justo ullamcorper imperdiet quis in augue. Ut ornare laoreet scelerisque. Ut congue felis ultricies ipsum hendrerit suscipit. Duis purus purus, blandit non velit eu, suscipit placerat diam. Donec dui tortor, pretium ac turpis id, rhoncus fringilla lacus. Nulla aliquet eu leo pharetra eleifend. Pellentesque habitant morbi tristique senectus et netus et."
        />
        <Testimonio
          image="sarah"
          nombre="Sarah Perjs"
          pais="Wakanda"
          cargo="Front End Analyst"
          empresa="Google"
          descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio augue, tristique quis ullamcorper nec, luctus in mi. Phasellus interdum scelerisque finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent feugiat sagittis gravida. Nam bibendum finibus nibh ut molestie. Quisque vitae urna in justo ullamcorper imperdiet quis in augue. Ut ornare laoreet scelerisque. Ut congue felis ultricies ipsum hendrerit suscipit. Duis purus purus, blandit non velit eu, suscipit placerat diam. Donec dui tortor, pretium ac turpis id, rhoncus fringilla lacus. Nulla aliquet eu leo pharetra eleifend. Pellentesque habitant morbi tristique senectus et netus et."
        />
        <Testimonio
          image="shawn"
          nombre="Shawn Kwan"
          pais="Corea"
          cargo="Desempleado"
          empresa="Casa"
          descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio augue, tristique quis ullamcorper nec, luctus in mi. Phasellus interdum scelerisque finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent feugiat sagittis gravida. Nam bibendum finibus nibh ut molestie. Quisque vitae urna in justo ullamcorper imperdiet quis in augue. Ut ornare laoreet scelerisque. Ut congue felis ultricies ipsum hendrerit suscipit. Duis purus purus, blandit non velit eu, suscipit placerat diam. Donec dui tortor, pretium ac turpis id, rhoncus fringilla lacus. Nulla aliquet eu leo pharetra eleifend. Pellentesque habitant morbi tristique senectus et netus et."
        />
      </div>
    </div>
  );
}

export default App;
