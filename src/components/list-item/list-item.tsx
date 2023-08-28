import { ListItem as ListItemProps } from 'api/api-types';

import styled from './list-item.module.css';

export const ListItem = ({ image, title }: ListItemProps) => {
  return (
    <div className={styled.root}>
      <img className={styled.img} alt="anime img" src={image} />
      <p className={styled.text}>{title}</p>
    </div>
  );
};
