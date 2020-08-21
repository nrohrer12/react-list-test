import Constants from "../constants/Constants"

type PlayerObj = {
  id: string,
  fields: any,
  createdTime: Date,
}

// export type Player = {
//   Name: string,
//   Team: string,
//   JerseyNumber: number,
//   TeamColor: string,
// };

export class Player {
  Name?: string;
  Team?: string;
  JerseyNumber?: number;
  TeamColor?: string;
};

export const getPlayers = async () => {
  const endpoint = Constants.Config.AirTable.BaseUri + Constants.Config.AirTable.TableId + "/" + Constants.Config.AirTable.TableName;
  const headers: any = {};
  Constants.Config.AirTable.Headers.map(x => {
    headers[x.key] = x.value;
  });
  const data = await (await fetch(endpoint, { headers })).json();
  console.log(data.records);
  const players: Player[] = [];
  data.records.map((player: PlayerObj) => (
    players.push({
      Name: player.fields.Name,
      Team: player.fields.Team,
      JerseyNumber: player.fields.JerseyNumber,
      TeamColor: player.fields.TeamColor
    })
    ));
    return players;
}