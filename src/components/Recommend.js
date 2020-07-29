import React from "react";

class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickGood = this.handleClickGood.bind(this);
    this.handleClickBad = this.handleClickBad.bind(this);
  }
  state = {
    checkGood: false,
    checkBad: false,
    countGood: 0,
    countBad: 0,
  };
  handleClickGood() {
    if (this.state.checkBad) {
      this.setState((current) => ({
        checkBad: false,
        countBad: current.countBad - 1,
      }));
    }
    if (!this.state.checkGood) {
      this.setState((current) => ({
        checkGood: true,
        countGood: current.countGood + 1,
      }));
    } else {
      this.setState((current) => ({
        checkGood: false,
        countGood: current.countGood - 1,
      }));
    }
  }
  handleClickBad() {
    if (this.state.checkGood) {
      this.setState((current) => ({
        checkGood: false,
        countGood: current.countGood - 1,
      }));
    }
    if (!this.state.checkBad) {
      this.setState((current) => ({
        checkBad: true,
        countBad: current.countBad + 1,
      }));
    } else {
      this.setState((current) => ({
        checkBad: false,
        countBad: current.countBad - 1,
      }));
    }
  }
  changeEmoji = () => {
    let emojiList = [];
    const { checkGood, checkBad } = this.state;
    checkGood
      ? emojiList.push(<i className="fas fa-thumbs-up"></i>)
      : emojiList.push(<i className="far fa-thumbs-up"></i>);
    checkBad
      ? emojiList.push(<i className="fas fa-thumbs-down"></i>)
      : emojiList.push(<i className="far fa-thumbs-down"></i>);
    return emojiList;
  };
  render() {
    console.log(this.props);
    const { countGood, countBad } = this.state;
    const emojiList = this.changeEmoji();
    return (
      <div className="recommend">
        <button className="recommend__good" onClick={this.handleClickGood}>
          {emojiList[0]}
          {countGood}
        </button>
        <button className="recommend__bad" onClick={this.handleClickBad}>
          {emojiList[1]}
          {countBad}
        </button>
      </div>
    );
  }
}

export default Recommend;
