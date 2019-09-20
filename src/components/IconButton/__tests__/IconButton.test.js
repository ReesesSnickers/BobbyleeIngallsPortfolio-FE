import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import IconButton from "../IconButton.js";

import { ReactComponent as Facebook } from "../../../assets/Facebook-Logo-Square.svg";

let props;
let mountedComponent;

describe("IconButton", () => {
  const testComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<IconButton {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      icon: <Facebook />,
      href: undefined
    };
    mountedComponent = undefined;
  });

  // initial render
  it("Renders the IconButton component", () => {
    let button = testComponent().find("a.portfolio-IconButton");
    expect(button.length).toBe(1);
  });

  // snapshot
  it("should match snapshot", () => {
    const tree = renderer.create(<IconButton {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // icon
  it("Renders the Icon in the ancors inner text", () => {
    let button = testComponent().find("a");
    expect(button.text()).toBe("Facebook-Logo-Square.svg");
  });

  // href
  describe("When href is defined", () => {
    beforeEach(() => {
      props.href = "MockHref";
    });
    it("Should pass the href prop to the ancors href prop", () => {
      const component = testComponent().find("a");
      expect(component.props().href).toBe("MockHref");
    });
  });
});
