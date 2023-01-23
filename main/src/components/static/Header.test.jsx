import Header from "./Header";
import { render } from "@testing-library/react";
import debug from "debug";

describe("Basic test", function () {
    test("Basic test", function () {
        render(<Header />)
        debug()
    })
})