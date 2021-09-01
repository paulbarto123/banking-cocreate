import './App.css';
import EnrollmentRequest from './component/EnrollmentRequest'

function App() {
  return (
   <div className="admin-dashboard">
     <div className="sidebar">
          <h1 className="sidebar-header">Nama Bank</h1>
          <div className="sidebar-menu">
            <ul>
              <li>Enrolment Request</li>
              <li>Sign Out</li>
            </ul>
          </div>
     </div>
     <div className="dashboard">
       <div className="dashboard-header">
         Enrollment Request
       </div>
       <EnrollmentRequest />
       <button>Approve</button>
     </div>
   </div>
  );
}

export default App;
