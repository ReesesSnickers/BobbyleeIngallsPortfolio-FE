import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import BottomNavigation from "../BottomNavigation.js";

let props;
let mountedComponent;

describe("BottomNavigation", () => {
  const testComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<BottomNavigation {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      page: "MockPage",
      goToPage: jest.fn()
    };
    mountedComponent = undefined;
  });

  // initial render
  it("Renders the BottomNavigation component", () => {
    let button = testComponent().find("button.portfolio-BottomNavigation");
    expect(button.length).toBe(1);
  });

  // snapshot
  it("should match snapshot", () => {
    const tree = renderer.create(<BottomNavigation {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // page Not About
  it("Will not render div.portfolio-BottomNavigation-navigation-container if page is not `/About`", () => {
    const component = testComponent().find(
      "div.portfolio-BottomNavigation-navigation-container"
    );
    expect(component.length).toBe(0);
  });

  // page About
  describe("When page is defined as `/About`", () => {
    beforeEach(() => {
      props.page = "/About";
    });

    it("will render div.portfolio-BottomNavigation-navigation-container", () => {
      const component = testComponent().find(
        "div.portfolio-BottomNavigation-navigation-container"
      );
      expect(component.length).toBe(1);
    });

    // goToPage
    it("will pass goToPage to the NavigationTabs goToPage prop", () => {
      const NavigationTabs = testComponent().find("NavigationTabs");
      expect(NavigationTabs.props().goToPage).toBe(jest.fn());
    });

    // page
    it("will pass page to the NavigationTabs page prop", () => {
      const NavigationTabs = testComponent().find("NavigationTabs");
      expect(NavigationTabs.props().page).toBe("/About");
    });
  });
});
