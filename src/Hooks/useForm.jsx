import { useState } from 'react';

const useForm = (init) => {
  const [formData, setFormData] = useState(init);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const clearForm = () => {
    setFormData(init);
  };
  return [formData, handleOnChange, clearForm];
};

export default useForm;
