import './App.css';
import Header from '../Components/Header';
import Employees from '../Page/Employees/Employees';
import BasicDetail from '../Components/BasicDetails/BasicDetails';
import { Typography } from '@material-ui/core';
import ContainedButtons from '../Components/ContainedButtons/ContainedButtons';

function App() {
  return (
    <div className="App">
        <Header />
        <main className="Main">
          <BasicDetail />
          <Typography variant="h6" gutterBottom>
                Basic Details
            </Typography>
          <Employees />
          <ContainedButtons />
        </main>

    </div>
  );
}

export default App;
