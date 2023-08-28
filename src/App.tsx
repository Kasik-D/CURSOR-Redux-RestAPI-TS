import { Provider } from 'react-redux';
import { store } from 'store/store';

import { RoutersProvider } from './navigation/navigation';

function App() {
  return (
    <Provider store={store}>
      <RoutersProvider />
    </Provider>
  );
}

export default App;
