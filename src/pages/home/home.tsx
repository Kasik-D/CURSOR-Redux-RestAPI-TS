import { useHomeState } from './home.state';

import styled from './home.module.css';
import { Loader } from '@/components/loader/loader';
import { ListItem } from '@/components/list-item/list-item';

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
