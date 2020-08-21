import React from 'react';

interface IProps {
  onChange: Function,
}

interface IState {
  search: string
}

class Search extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      search: ''
    }
  }

  _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search : e.target.value });
    this.props.onChange(e.target.value);
  };

  render() {
    const { search } = this.state;
    return (
      <>
        <input type="text" value={search} onChange={this._handleChange}/>
      </>
    );
  }
}

export default Search;