import logo from './logo.svg';
import './App.css';
import Table from './component/Table';
import curriculum from './data/curriculum';

function App() {
  return (
    <>
      <div style={{ minWidth: '800px' }}>
        <Table data={curriculum} rowsPerPage={10} />
      </div>
    </>
  );
}

export default App;
