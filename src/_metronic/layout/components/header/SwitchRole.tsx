import React, { useEffect, useState } from 'react';

const ROLES = [
  { value: 'operator', label: 'Operator' },
  { value: 'bendahara', label: 'Bendahara' },
  { value: 'direktur', label: 'Direktur' },
];

export const SwitchRole: React.FC = () => {
  const [role, setRole] = useState<string>(() => localStorage.getItem('ekoberseka_role') || 'operator');

  useEffect(() => {
    localStorage.setItem('ekoberseka_role', role);
    // Trigger custom event for dashboard update
    window.dispatchEvent(new CustomEvent('roleChanged', { detail: { role } }));
  }, [role]);

  return (
    <div className='d-flex align-items-center'>
      <label htmlFor='switch-role' className='me-2 fw-semibold'>Peran:</label>
      <select
        id='switch-role'
        className='form-select form-select-sm w-auto'
        value={role}
        onChange={e => setRole(e.target.value)}
      >
        {ROLES.map(r => (
          <option key={r.value} value={r.value}>{r.label}</option>
        ))}
      </select>
    </div>
  );
}; 