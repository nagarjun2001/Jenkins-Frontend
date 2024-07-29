import {render,screen} from '@testing-library/react';
import Login from '../Login';

jest.mock("axios");
jest.mock("react-router-dom");

describe("Login Page Test", () => {
    it("Rendered Login Page Title", () => {
        render(<Login />);
        const logt = screen.getByRole("logtitle");
        expect(logt).toBeInTheDocument();
    });

    it("Rendered Username", () => {
        render(<Login />);
        const uname = screen.getByRole("uname");
        expect(uname).toBeInTheDocument();
    });

    it("Rendered Username placeholder", () => {
        render(<Login />);
        const unamephold = screen.getByPlaceholderText("Enter username");
        expect(unamephold).toBeInTheDocument();
    });

    it("Rendered Password field", () => {
        render(<Login />);
        const pass = screen.getByRole("pass");
        expect(pass).toBeInTheDocument();
    });

    it("Rendered Username placeholder", () => {
        render(<Login />);
        const unamephold = screen.getByPlaceholderText("Enter username");
        expect(unamephold).toBeInTheDocument();
    });

    it("Rendered Password placeholder", () => {
        render(<Login />);
        const passphold = screen.getByPlaceholderText("Enter password");
        expect(passphold).toBeInTheDocument();
    });

    it("Rendered Checkbox", () => {
        render(<Login />);
        const check = screen.getByTestId("remember");
        expect(check).toBeChecked();
    });

    it("Rendered 'Forgot Password'", () => {
        render(<Login />);
        const forgot = screen.getByRole("forgot")
        expect(forgot).toBeInTheDocument();
    });

    it("Rendered 'Login Button'", () => {
        render(<Login />);
        const logbutton = screen.getByRole('but');
        expect(logbutton).toBeInTheDocument();
    });
})
