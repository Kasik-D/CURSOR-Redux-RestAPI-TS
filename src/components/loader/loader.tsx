import styled from './loader.module.css';

export const Loader = () => {
  return (
    <div className={styled.root}>
      <span className={styled.loader}></span>
    </div>
  );
};
