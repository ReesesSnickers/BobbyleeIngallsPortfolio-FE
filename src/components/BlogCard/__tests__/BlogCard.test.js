import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import BlogCard from "../BlogCard.js";

let props;
let mountedComponent;

describe("BlogCard", () => {
  const testComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<BlogCard {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      blog: undefined,
      onClick: undefined
    };
    mountedComponent = undefined;
  });

  // initial render
  it("Renders the BlogCard component", () => {
    let button = testComponent().find("button.portfolio-blogcard-wrapper");
    expect(button.length).toBe(1);
  });

  // snapshot
  it("should match snapshot", () => {
    const tree = renderer.create(<BlogCard {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // blog default
  it("Will use the default blog object if no blog is defined", () => {
    const image = testComponent().find("img");
    const h1 = testComponent().find("h1");
    const h2 = testComponent().find("h2");
    const h3 = testComponent().find("h3");
    expect(image.props().alt).toBe("");
    // expect(image.props().src).toBe('')
    expect(h1.text()).toBe("");
    expect(h2.text()).toBe("");
    expect(h3.text()).toBe("");
  });

  // blog defined
  describe("When a blog is defined", () => {
    beforeEach(() => {
      props.blog = {
        title: "MockTitle",
        description: "MockDescription",
        created: "MockCreated",
        photo: "MockPhoto"
      };
    });
    it("Will use the defined blog object", () => {
      const image = testComponent().find("img");
      const h1 = testComponent().find("h1");
      const h2 = testComponent().find("h2");
      const h3 = testComponent().find("h3");
      expect(image.props().alt).toBe("MockTitle");
      // expect(image.props().src).toBe('MockPhoto')
      expect(h1.text()).toBe("MockTitle");
      expect(h2.text()).toBe("MockDescription");
      expect(h3.text()).toBe("MockCreated");
    });
  });

  // onClick
  describe("When onClick is defined", () => {
    beforeEach(() => {
      props.onClick = jest.fn();
    });
    it("will trigger the onclick event when clicked", () => {
      const button = testComponent().find("button");
      button.simulate("click");
      expect(button.props().onClick).toHaveBeenCalled();
    });
  });
});
