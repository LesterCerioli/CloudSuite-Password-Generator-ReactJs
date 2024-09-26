import React, { useState } from 'react';
import './PasswordForm.css';

const PasswordForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const generatePassword = () => {
    const newPassword = generateSecurePassword();
    setPassword(newPassword);
    setButtonClicked(true);
  };

  const generateSecurePassword = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = '';
    for (let i = 0, n = charset.length; i < 12; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
  };

  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <button
            type="button"
            onClick={generatePassword}
            className={buttonClicked ? 'generate-button clicked' : 'generate-button'}
          >
            Gerar Senha
          </button>
        </div>
        {password && (
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="text"
              id="password"
              name="password"
              value={password}
              readOnly
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default PasswordForm;
