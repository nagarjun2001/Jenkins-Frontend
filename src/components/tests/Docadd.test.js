import {render,screen} from '@testing-library/react';
import Docadd from '../Pages/Docadd';
import axios from 'axios';
import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));
 
const mock = new MockAdapter(axios);
 
const mockNavigate = jest.fn();
useNavigate.mockReturnValue(mockNavigate);
 
afterEach(() => {
    mock.reset();
});

describe("Add Doctor Page",() => {
    it("Rendered Add Doctor Page", () => {
        render(<Docadd />);
        const addtitle = screen.getByRole("addtit");
        expect(addtitle).toBeInTheDocument();
    });

    it("Rendered Add Doctor Input labels", () => {
        render(<Docadd />);
        const docname = screen.getByRole("docname");
        const yoe = screen.getByRole("yoe");
        const spl = screen.getByRole("spl");

        expect(docname).toBeInTheDocument();
        expect(yoe).toBeInTheDocument();
        expect(spl).toBeInTheDocument();
    });

    it("Rendered Add Doc input fields",() => {
        render(<Docadd />);
        const dname = screen.getByRole("dnameinp");
        const yoe = screen.getByRole("yoeinp");
        const spl = screen.getByRole("splinp");

        expect(dname).toBeInTheDocument();
        expect(yoe).toBeInTheDocument();
        expect(spl).toBeInTheDocument();
    });
})