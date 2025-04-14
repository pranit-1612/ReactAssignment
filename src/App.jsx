import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Assignment from './Assignment';
import FixedDepositSummary from './Assignment1/FixedDepositeSummary';
import Assignment2 from './Assignment2/Assignment2';
import Assignment3 from './Assignment3/Assignment3';
import FDAndRDPortal from './Assignment3/FDandRDPortal';
import InvestmentDetailRoutes from './Assignment3/InvestmentDetailRoutes';
import UserDashboardNavigation from './Assignment3/UserDashboardNavigation';
import Assignment4 from './Assignment4/Assignment4';
import Assignment5 from './Assignment5/Assignment5';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        {/* Short Sidebar */}
        <nav style={{ width: '200px', backgroundColor: '#2c3e50', color: 'white', padding: '10px' }}>
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1.2rem' }}>Menu</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ margin: '10px 0' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            </li>
            <li style={{ margin: '10px 0' }}>
              <Link to="/assignment1" style={{ color: 'white', textDecoration: 'none' }}>Assignment 1</Link>
            </li>
            <li style={{ margin: '10px 0' }}>
              <Link to="/assignment2" style={{ color: 'white', textDecoration: 'none' }}>Assignment 2</Link>
            </li>
            <li style={{ margin: '10px 0' }}>
              <Link to="/assignment3" style={{ color: 'white', textDecoration: 'none' }}>Assignment 3</Link>
            </li>
            <li style={{ margin: '10px 0' }}>
              <Link to="/assignment4" style={{ color: 'white', textDecoration: 'none' }}>Assignment 4</Link>
            </li>
            <li style={{ margin: '10px 0' }}>
              <Link to="/assignment5" style={{ color: 'white', textDecoration: 'none' }}>Assignment 5</Link>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#f4f6f8' }}>
          <Routes>
            <Route path="/" element={<h1>Welcome to React Assignment</h1>} />
            <Route path="/assignment1" element={<FixedDepositSummary />} />
            <Route path="/assignment2" element={<Assignment2 />} />
            <Route path="/assignment3" element={<Assignment3 />} />
            <Route path="/assignment4" element={<Assignment4 />} />
            <Route path="/assignment5" element={<Assignment5 />} />

            {/* Assignment 3 internal routes */}
            <Route path="/assignment3/fd-rd-portal/*" element={<FDAndRDPortal />} />
            <Route path="/assignment3/dashboard/*" element={<UserDashboardNavigation />} />
            <Route path="/assignment3/investments/*" element={<InvestmentDetailRoutes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;