import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import Avatar from "../Avatar.js";

let props;
let mountedComponent;

describe("Avatar", () => {
  const testComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<Avatar {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      src: "MockSrc",
      alt: undefined,
      border: undefined,
      name: undefined,
      title: undefined
    };
    mountedComponent = undefined;
  });

  // initial render
  it("Renders the Avatar component", () => {
    let section = testComponent().find("section.portfolio-avatar-wrapper");
    expect(section.length).toBe(1);
  });

  // snapshot
  it("should match snapshot", () => {
    const tree = renderer.create(<Avatar {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // src
  it("should pass the src prop to the img src prop", () => {
    const image = testComponent().find("img");
    expect(image.props().src).toBe("MockSrc");
  });

  // alt default
  it("should pass the default alt prop to the img alt prop", () => {
    const image = testComponent().find("img");
    expect(image.props().alt).toBe("Profile Photo");
  });

  // border default
  it("should use the default border prop", () => {
    const section = testComponent()
      .find("section")
      .at(1);
    expect(section.hasClass("portfolio-avatar-border")).toBe(false);
  });

  // alt defined
  describe("When alt is defined", () => {
    beforeEach(() => {
      props.alt = "MockAlt";
    });
    it("should pass the alt prop to the img alt prop", () => {
      const image = testComponent().find("img");
      expect(image.props().alt).toBe("MockAlt");
    });
  });

  // border false
  describe("When border is defined false", () => {
    beforeEach(() => {
      props.border = false;
    });

    it("Will not use the border classname", () => {
      const section = testComponent()
        .find("section")
        .at(1);
      expect(section.hasClass("portfolio-avatar-border")).toBe(false);
    });
  });

  // border true
  describe("When border is defined true", () => {
    beforeEach(() => {
      props.border = true;
    });

    it("Will use the border classname", () => {
      const section = testComponent()
        .find("section")
        .at(1);
      expect(section.hasClass("portfolio-avatar-border")).toBe(true);
    });
  });

  // name defined
  describe("When name is defined", () => {
    beforeEach(() => {
      props.name = "MockName";
    });

    it("Will pass the name prop to the h1 inner text", () => {
      const header1 = testComponent().find("h1");
      expect(header1.text()).toBe("MockName");
    });
  });

  // title defined
  describe("When title is defined", () => {
    beforeEach(() => {
      props.title = "MockTitle";
    });

    it("Will pass the title prop to the h2 inner text", () => {
      const header2 = testComponent().find("h2");
      expect(header2.text()).toBe("MockTitle");
    });
  });
});
