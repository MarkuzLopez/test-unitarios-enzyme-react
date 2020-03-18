import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import List from './List';
// importacion de la libreria para que mejore la vizualizacion del onSanpShot.
import toJson from 'enzyme-to-json';

configure({
    adapter: new Adapter()
})

describe(' Probando componentes <List /> con nodos en componentes', () => { 
    test('validar nodos', () => {
        const frutis = [
            {name: 'fresa', id: 1},
            {name: 'manzana', id: 2},
            {name: 'pera', id: 3},
            {name: 'mango', id: 4},
        ];

        const wrapper = shallow(<List title="Frutas" list={frutis} />)
       // si existe la propiedad en este csao es el title  (sinexiste el nodo)
        expect(wrapper.find('h1').exists()).toBe(true)

        // validar si tiene clase css   
        expect(wrapper.find('h1').hasClass('big')).toBe(true)

        //validar la cantidad de elementos hijos
        expect(wrapper.find('ul').children().length).toBe(4)

        //validar el contenido de texto
        expect(wrapper.find('ul').childAt(2).text()).toBe('pera')
        // console.log(wrapper.find('li').first().html());
        // console.log(wrapper.find('li').last().html());
        // console.log(wrapper.find('ul').childAt(2).html());

        //validar elñ tipo de nodo / elemento
        expect(wrapper.find('ul').childAt(2).html()).toBe('<li>pera</li>')

        // vaalidar html 
        expect(wrapper.find('ul').childAt(2).html()).toBe('<li>pera</li>');
    });

    // tst paa actualización 
    test('Validaacion de actualización en props', () => {
        const fruits = [
            {name: 'fresa', id: 1},
            {name: 'manzana', id: 2},
            {name: 'pera', id: 3},
            {name: 'mango', id: 4},
        ];

        const wrapper = shallow(<List title={'Frutas'} list={fruits} />)

        // validar cantidad de elementos li
        expect(wrapper.find('li').length).toBe(4);

        // validar lo qur tiene algun arreglo,
        wrapper.setProps({
            list: [
                { name: 'kiwi', id: 5 }
            ]
        })

        // validaar cantidad de elementos li
        expect(wrapper.find('li').length).toBe(1)

        wrapper.setProps({
            title: 'Super Frutas'
        })

        expect(wrapper.find('.big').text()).toBe('Super Frutas')
    });

    // este metodo ayuda a testeeaar el arbol de elementos del componente que este de acueerdo a
    //  lo desarollado, si en caso dee no coincidir te motrarara
    // eexactamente donde estaa el problema.
    test('Validar que coincidan con snapshot',  () => {
        const fruitas = [
            {name: 'fresa', id: 1},
            {name: 'manzana', id: 2},
            {name: 'pera', id: 3},
            {name: 'mango', id: 4},
        ];

        const wrapper =  shallow(<List title={'Frutas'} list={fruitas}  />)

        // expect(wrapper.html()).toMatchSnapshot()
        expect(toJson(wrapper)).toMatchSnapshot()
        // instalacion dee enxyme y de otro paquete para poder ser mas legibree el archivo que se generaa a la hpra del 
        // onSnapshot que es
        // npm i -D enzyme-to-json
   })
})