import React from 'react';
import { Player } from '../../services/BaseService';
import styled from 'styled-components';
import './Listview.css';

type Props = {
  player: Player,
  i: number,
};

type TRowWrapperProps = {
  TeamColor?: string,
}

const RowWrapper = styled.div<TRowWrapperProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px;
  &:hover {
    opacity: 0.8;
  }
  background: ${(props) => props.TeamColor};
`

const ListviewRow: React.FC<Props> = ({ player }) => (
  <RowWrapper TeamColor={player.TeamColor}>
    <div className="player-column">{player.Name}</div>
    <div className="player-column">{player.Team}</div>
    <div className="player-column">{player.JerseyNumber}</div>
  </RowWrapper>
)

export default ListviewRow;