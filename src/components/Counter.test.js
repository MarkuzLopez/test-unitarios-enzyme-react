import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from './Counter';
import toJson from 'enzyme-to-json';

configure({
    adapter: new Adapter()
})

describe('Probando Componente con Hooks <Counter />', () => {
    let wrapper;

    beforeEach(() => { 
        wrapper = shallow(<Counter />)
    })

    test('Validar que coincida con snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    test('Validar funcionamieento de botones ', () => {
      
        wrapper.find('button').first().simulate('click')

        expect(wrapper.find('h1').text()).toBe('1')

        wrapper.find('button').last().simulate('click')
        wrapper.find('button').last().simulate('click')
        wrapper.find('button').last().simulate('click') 
        
        expect(wrapper.find('h1').text()).toBe('-2')

    });
    
    
})