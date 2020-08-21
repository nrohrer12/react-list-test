import React from "react";
import Icon from '@material-ui/core/Icon';

type Props = {
  IconName: string,
  Color?: string,
  Size?: number
}

const MIcon: React.FC<Props> = ({ IconName, Color = '#282c34', Size = 24}) => {
  return <Icon style={{ color: Color, fontSize: Size}}>{IconName}</Icon>
}

export default MIcon;