import * as chai from "chai";
import * as sinon from "sinon";
import { main } from "../src/index";
import readline = require("readline");
import sinonChai = require("sinon-chai");

chai.use(sinonChai);

describe("main", () => {
  it("calls question method of readline", () => {
    const ioMock: readline.Interface = (sinon.createStubInstance(
      readline.Interface
    ) as any) as readline.Interface;
    main(ioMock);
    chai.expect(ioMock.question).to.have.been.calledOnce;
  });
});
