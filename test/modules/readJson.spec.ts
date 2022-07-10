import * as chai from "chai";
import * as path from "path";
import * as sinonChai from "sinon-chai";
import * as sinon from "ts-sinon";
import { validatePaths } from "../../src/modules/readJson";

chai.use(sinonChai);

describe("validatePaths", () => {
  it("calls path.normalize exactly twice with paths from args", () => {
    const ioPathArrayMock = [
      "~/Users/fake/dashlane.json",
      "~/Users/fake/Desktop/dashout",
    ];
    const pathMock = sinon.stubObject(path, ["normalize"]);
    validatePaths(ioPathArrayMock, pathMock);
    chai
      .expect(pathMock.normalize)
      .to.have.been.calledTwice.to.have.been.calledWithExactly(
        ioPathArrayMock[0]
      )
      .to.have.been.calledWithExactly(ioPathArrayMock[1]);
  });
});
