import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import About from "../About.js";
import {
  paragraph1,
  paragraph2,
  paragraph3
} from "../../../configs/aboutMeConfig";
import SocialList from "../../../components/SocialList";

let props;
let mountedComponent;

describe("About", () => {
  const testComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<About {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      photo: "MockPhotoString"
    };
    mountedComponent = undefined;
  });

  // initial render
  it("Renders the About component", () => {
    let section = testComponent().find("section.portfolio-about-wrapper");
    expect(section.length).toBe(1);
  });

  // snapshot
  it("should match snapshot", () => {
    const tree = renderer.create(<About {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // photo
  it(`passes the photo prop to Avatar's src prop`, () => {
    const Avatar = testComponent().find("Avatar");
    expect(Avatar.props().src).toBe("MockPhotoString");
  });
});
