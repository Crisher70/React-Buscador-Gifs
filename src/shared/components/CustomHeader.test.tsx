import { describe, test, expect } from "vitest"
import {render, screen} from '@testing-library/react'
import CustomHeader from './CustomHeader'

//screen: usar cuando los elementos son renderizados o cambian por causa de react
//container: cuando los elementos no cambian desde su renderizado, containeres mejor

describe('CustomHeader', () => {
    const title = 'Cabecera';

    test('should render the title correctly', () => {
        render(<CustomHeader title={title}/>);
        //si no sabemos que se esta renderizando usamos screen.debug
        //screen.debug()
        expect(screen.getByText(title)).toBeDefined();
        
    });

    test('should render the description when provided', () => {
        const description = 'description';
        render(<CustomHeader title={title} descripcion={description}/>);

        //opcion 1
        expect(screen.getByText(description)).toBeDefined();
        //opcion 2
        expect(screen.getByRole('paragraph')).toBeDefined();
        //opcion 3
        expect(screen.getByRole('paragraph').innerHTML).toBe(description);

    });

    test('should not render description when not provided', () => {
        
        const {container} = render(<CustomHeader title={title} />);
        const divElement = container.querySelector('.content-center');

        const h1 = divElement?.querySelector('h1')
        expect(h1?.innerHTML).toBe(title);

        const p = divElement?.querySelector('p')
        expect(p).toBeNull();
        
        
    })
});