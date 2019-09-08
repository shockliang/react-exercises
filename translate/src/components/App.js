import React from "react";
import UserCreate from "./UserCreatee";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag tw"
            onClick={() => this.onLanguageChange("traditionChinese")}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
