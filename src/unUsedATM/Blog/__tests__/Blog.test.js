import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Blog from "../Blog.js";

let props;
let mountedComponent;

describe("Blog", () => {
  const testComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <MemoryRouter>
          <Blog {...props} />
        </MemoryRouter>
      );
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      blogs: [{ _id: "MockId" }]
    };
    mountedComponent = undefined;
  });

  // initial render
  it("Will load the Blog component when blogs are present", () => {
    const component = testComponent().find("section.portfolio-blog-wrapper");
    expect(component.length).toBe(1);
  });

  // error render
  describe("When no blogs are available", () => {
    beforeEach(() => {
      props.blogs = [];
    });
    it("Will render the Loading screen", () => {
      const component = testComponent().find("Loading");
      expect(component.length).toBe(1);
    });
  });

  // snapshot
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Blog {...props} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // blogs
  it("should load a link per blog in blogs plus one for most recent", () => {
    const links = testComponent().find("Link");
    expect(links.length).toBe(2);
  });
});
