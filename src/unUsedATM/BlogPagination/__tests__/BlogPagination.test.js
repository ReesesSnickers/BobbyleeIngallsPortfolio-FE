import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import BlogPagination from "../BlogPagination.js";

let props;
let mountedComponent;

describe("BlogPagination", () => {
  const testComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<BlogPagination {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {};
    mountedComponent = undefined;
  });

  // initial render
  it("Will load the BlogPagination component", () => {
    const component = testComponent().find("portfolio-BlogsPagination");
    expect(component.length).toBe(1);
  });

  // snapshot
  it("should match snapshot", () => {
    const tree = renderer.create(<BlogPagination {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
