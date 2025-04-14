import { useState } from 'react';
import '../Assignmentcommon.css';

const branches = {
  KARAD: { address: 'Dk Road, Karad', code: 'KAR123', ifsc: 'BANK141365' },
  MUMBAI: { address: 'Thane, Mumbai', code: 'MUM456', ifsc: 'BANK0002' },
  PUNE: { address: 'FC Road, Pune', code: 'PUN789', ifsc: 'BANK0003' },
};

export default function BankBranchSelector() {
  const [selected, setSelected] = useState('');
  const branch = branches[selected];

  console.log('Selected Branch:', selected); // Debugging the selected branch

  return (
    <div className="assignment-section">
      <h2>Bank Branch Selector</h2>
      <div className="assignment-card">
        <div className="detail-row">
          <label>Select Branch:</label>
          <select
            className="assignment-input"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">-- Select --</option>
            {Object.keys(branches).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {branch && (
          <div className="mt-4">
            <p><strong>Address:</strong> {branch.address}</p>
            <p><strong>Branch Code:</strong> {branch.code}</p>
            <p><strong>IFSC:</strong> {branch.ifsc}</p>
          </div>
        )}
      </div>
    </div>
  );
}
