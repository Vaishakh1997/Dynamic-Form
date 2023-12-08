import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Flexi = ({ onSubmit, config }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const getDynamicFormItems = (item) => {
    const { name, label, type, values, items } = item;

    switch (type) {
      case 'TextField':
        return (
          <div key={name}>
            <label>{label}:</label>
            <input
              type="text"
              className='form-control mb-4 mt-2'
              value={formData[name] || ''}
              onChange={(e) => handleChange(name, e.target.value)}
            />
          </div>
        );

      case 'DropDown':
        return (
          <div key={name}>
            <label>{label}:</label>
            <select
              value={formData[name] || ''}
              className='form-control mb-4 mt-2'
              onChange={(e) => handleChange(name, e.target.value)}
            >
              <option value="">Select here..</option>
              {values.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );

      case 'Group':
        return (
          <div key={name}>
            <hr className='w-100' />
            <h5>{label}</h5>
            {items.map((nestedItem) => getDynamicFormItems(nestedItem))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {config?.items?.map((item) => getDynamicFormItems(item))}
      <Button variant="primary" onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default Flexi;
