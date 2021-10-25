import { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <article className={`mt-4 md:mt-0 ${this.props.css}`}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <button className="px-4 mt-8 py-2 font-semibold shadow-xl bg-blue-400 rounded-lg text-lg">
          More
        </button>
      </article>
    );
  }
}
