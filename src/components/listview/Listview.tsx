import React from "react";
import { getPlayers, Player } from "../../services/BaseService";
import ListviewRow from "./ListviewRow";
import './Listview.css';
import Sort from "../utils/Sort";
import MIcon from "../utils/Icon";
import Search from "../utils/Search";

interface IProps {
}

interface IState {
  loading?: boolean,
  players?: Player[],
  filteredPlayers?: Player[],
  sortBy: string,
  isReverseSort: boolean,
}

enum Headers {
  TEAM = "Team",
  NAME = "Name",
  JERSEYNUMBERS = "JerseyNumbers"
}

class Listview extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      loading: false,
      players: [],
      filteredPlayers: [],
      sortBy: Headers.TEAM,
      isReverseSort: false,
    }
  }

  componentDidMount = async () => {
    const players = await getPlayers();
    this.setState({ players, filteredPlayers: players });
  }

  _handleClick = (event: React.MouseEvent, header: string) => {
    event.preventDefault();
    if (header === this.state.sortBy) this.setState({ isReverseSort: !this.state.isReverseSort });
    else this.setState({ sortBy: header, isReverseSort: false });
  }

  _handleFilter = (filterBy: string) => {
    const { players } = this.state;
    const lowercasedFilter = filterBy.toLowerCase();
    if (players) {
      const filteredData = players.filter((p: any) => {
        return Object.keys(p).some(key =>
          p[key].toLowerCase().includes(lowercasedFilter)
        );
      });
      this.setState({ filteredPlayers: filteredData});
    }
  }

  _renderColumnHeaders = () => {
    const Header = (props: any) => (
      <div className="header-column" onClick={(e) => this._handleClick(e, props.header)}>
        {props.header}
        {this.state.sortBy === props.header && (
          !this.state.isReverseSort ? <MIcon IconName="keyboard_arrow_down" />
            : <MIcon IconName="keyboard_arrow_up" />
        )}
      </div>
    )

    const x: Player = new Player();
    return Object.keys(x).map((key: string) => {
      if (key !== 'TeamColor')
        return <Header header={key} />
      else return <React.Fragment />
    })
  }

  _renderPlayers = () => {
    const { isReverseSort, sortBy } = this.state;
    if (this.state.filteredPlayers) {
      return <Sort compareBy={sortBy} compareObj="player" isReverse={isReverseSort}>
        {this.state.filteredPlayers.map((p: Player, i: number) => {
          return (<ListviewRow player={p} i={i} key={i} />)
        })}
      </Sort>
    } else {
      return <React.Fragment />
    }
  }

  render() {
    return (
      <div className="listview-container">
        <Search onChange={this._handleFilter} />
        <div className="header-container">
          {this._renderColumnHeaders()}
        </div>
        {this._renderPlayers()}
      </div>
    );
  }
}

export default Listview;
