import { useState } from 'react';
import '../Assignmentcommon.css';
import RDPlanForm from './RDPlanForm';
import FDInvestmentForm from './FDInstallmentForm';
import BankBranchSelector from './BankBranchSelector';

export default function Assignment2() {
  const [selectedForm, setSelectedForm] = useState('rd');

  return (
    <div className="assignment-section full-screen" style={{ display: 'flex' }}>
      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Assignment 2: Form Handling & UI</h1>
        <div className="assignment-form-container">
          {selectedForm === 'rd' && (
            <div style={{ display: 'flex' }}>
              <RDPlanForm />
              {/* Navigation Bar (Right Side) */}
              <div
                className="assignment-card button-group-vertical"
                style={{
                  width: '200px',
                  backgroundColor: '#2c3e50',
                  color: 'white',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  marginLeft: '20px',
                }}
              >
                <button
                  className="assignment-button"
                  style={{
                    backgroundColor: selectedForm === 'rd' ? '#34495e' : 'transparent',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    textAlign: 'left',
                    width: '100%',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedForm('rd')}
                >
                  RD Plan Form
                </button>
                <button
                  className="assignment-button"
                  style={{
                    backgroundColor: selectedForm === 'fd' ? '#34495e' : 'transparent',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    textAlign: 'left',
                    width: '100%',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedForm('fd')}
                >
                  FD Investment Form
                </button>
                <button
                  className="assignment-button"
                  style={{
                    backgroundColor: selectedForm === 'bank' ? '#34495e' : 'transparent',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    textAlign: 'left',
                    width: '100%',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedForm('bank')}
                >
                  Bank Branch Selector
                </button>
              </div>
            </div>
          )}
          {selectedForm === 'fd' && (
            <div style={{ display: 'flex' }}>
              <FDInvestmentForm />
              {/* Navigation Bar (Right Side) */}
              <div
                className="assignment-card button-group-vertical"
                style={{
                  width: '200px',
                  backgroundColor: '#2c3e50',
                  color: 'white',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  marginLeft: '20px',
                }}
              >
                <button
                  className="assignment-button"
                  style={{
                    backgroundColor: selectedForm === 'rd' ? '#34495e' : 'transparent',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    textAlign: 'left',
                    width: '100%',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedForm('rd')}
                >
                  RD Plan Form
                </button>
                <button
                  className="assignment-button"
                  style={{
                    backgroundColor: selectedForm === 'fd' ? '#34495e' : 'transparent',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    textAlign: 'left',
                    width: '100%',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedForm('fd')}
                >
                  FD Investment Form
                </button>
                <button
                  className="assignment-button"
                  style={{
                    backgroundColor: selectedForm === 'bank' ? '#34495e' : 'transparent',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    textAlign: 'left',
                    width: '100%',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedForm('bank')}
                >
                  Bank Branch Selector
                </button>
              </div>
            </div>
          )}
          {selectedForm === 'bank' && (
            <div style={{ display: 'flex' }}>
              <BankBranchSelector />
              {/* Navigation Bar (Right Side) */}
              <div
                className="assignment-card button-group-vertical"
                style={{
                  width: '200px',
                  backgroundColor: '#2c3e50',
                  color: 'white',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  marginLeft: '20px',
                }}
              >
                <button
                  className="assignment-button"
                  style={{
                    backgroundColor: selectedForm === 'rd' ? '#34495e' : 'transparent',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    textAlign: 'left',
                    width: '100%',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedForm('rd')}
                >
                  RD Plan Form
                </button>
                <button
                  className="assignment-button"
                  style={{
                    backgroundColor: selectedForm === 'fd' ? '#34495e' : 'transparent',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    textAlign: 'left',
                    width: '100%',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedForm('fd')}
                >
                  FD Investment Form
                </button>
                <button
                  className="assignment-button"
                  style={{
                    backgroundColor: selectedForm === 'bank' ? '#34495e' : 'transparent',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    textAlign: 'left',
                    width: '100%',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedForm('bank')}
                >
                  Bank Branch Selector
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
