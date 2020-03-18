// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App, { Title } from './App';

configure({
  adapter: new Adapter()
})

describe('Probando componente <App />', () => { 
  test('Probando reenderizado de componente', () => {

    const wrapper =  shallow(<App />)

    //*  selecionaar nodos  o eleementoss desde un componentee 
    // console.log(wrapper.find('div + p').html())
    // console.log(wrapper.find('div > p').html())
    // console.log(wrapper.find('[num="3"]').html())
    // console.log(wrapper.find('[type="text"]').html())
    // console.log(wrapper.find(Title).html());

    
    

    // * wrapper.find('.container').html() // para realizar la bsuqueda por medio de clase
    // *  wrapper.find('#maain').html() // para crear una busqueda por medio de id.

    // en esta forna se  hace la pruebna de un solo tag en html y no todo el marcado del componente
    // expect(wrapper.find('p').html()).toBe('<p>Introduccion a pruebas unitarias enzyme</p>')
    // expect(wrapper.find('p')).toHaveLength(1)

    /// eesta forma de testear solo servira siempre y cuando el marcado seaa de manera estatico.
    // expect(wrapper.html()).toBe('<div class="App"><header class="App-header"><img src="logo.svg" class="App-logo" alt="logo"/><p>Introduccion a pruebas unitarias enzyme</p></header></div>');
    
    
  });
  
})


