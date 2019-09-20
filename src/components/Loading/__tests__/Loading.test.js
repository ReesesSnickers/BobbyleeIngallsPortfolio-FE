import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import Loading from "../Loading.js";

let props;
let mountedComponent;

describe("Loading", () => {
  const testComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<Loading {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      load: "MockLoad"
    };
    mountedComponent = undefined;
  });

  // initial render
  it("Renders the Loading component", () => {
    let button = testComponent().find("section.portfolio-loading");
    expect(button.length).toBe(1);
  });

  // snapshot
  it("should match snapshot", () => {
    const tree = renderer.create(<Loading {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // load
  it("When load is defined", () => {
    const h1 = testComponent().find("h1");
    expect(h1.text()).toBe(
      "Sorry. Please standby while the MockLoad are retrieved."
    );
  });
});
