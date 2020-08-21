import React from 'react';

type Props = {
  children: any,
  compareBy: string,
  compareObj: string,
  isReverse: boolean,
};

// Compare function needed by the Sort component
const compare = (a: any, b: any, compareBy: string, compareObj: string, isReverse: boolean) => {
  
  // for numbers
  if (!isNaN(a.props[compareObj][compareBy])) {
    if (parseInt(a.props[compareObj][compareBy]) > parseInt(b.props[compareObj][compareBy])) {
      return isReverse ? -1 : 1;
    }
    if (parseInt(a.props[compareObj][compareBy]) < parseInt(b.props[compareObj][compareBy])) {
      return isReverse ? 1 : -1;
    }
    return 0;
  }
    
  if (a.props[compareObj][compareBy] > b.props[compareObj][compareBy]) {
    return isReverse ? -1 : 1;
  }
  if (a.props[compareObj][compareBy] < b.props[compareObj][compareBy]) {
    return isReverse ? 1 : -1;
  }
  return 0;
}

const Sort: React.FC<Props> = ({ children, compareBy, compareObj, isReverse }) => {
  if (!compareBy) {
    // If no 'sort by property' provided, return original list
    return children
  }
  return React.Children.toArray(children).sort((a, b) => compare(a, b, compareBy, compareObj, isReverse))
}

export default Sort;