import { ListItem } from 'components/list-item/list-item';
import { Loader } from 'components/loader/loader';

import styled from './home.module.css';
import { useHomeState } from './home.state';

export const Home = () => {
  const { isLoadingListItems, listItems } = useHomeState();

  if (isLoadingListItems) {
    return (
      <div className={styled.root}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styled.root}>
      <div className={styled.container}>
        {listItems?.map((item, index) => (
          <ListItem {...item} key={index} />
        ))}
      </div>
    </div>
  );
};
