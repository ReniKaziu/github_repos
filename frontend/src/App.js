import { BrowserRouter } from 'react-router-dom'
import Navigator from './common/components/Navigator'
import AuthProvider from './context/Auth'

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
