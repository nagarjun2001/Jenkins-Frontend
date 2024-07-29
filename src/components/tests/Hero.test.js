import {render,screen} from '@testing-library/react';
import Hero from '../UI/Hero';

jest.mock("axios");
jest.mock("react-router-dom");

describe("Rendered Hero Page Content",() => {
    it("Rendered Hero Page", () => {
        render(<Hero />);
        const title = screen.getByRole('titl');
        expect(title).toBeInTheDocument();
    });

    if("Rendered Login Link", () => {
        render(<Hero />);
        const logb = screen.getByRole("loginlink");
        expect(logb).toBeInTheDocument();
    });

    if("Rendered Signup Link", () => {
        render(<Hero />);
        const signb = screen.getByRole("signuplink");
        expect(signb).toBeInTheDocument();
    });
})