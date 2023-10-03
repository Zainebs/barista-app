import React from 'react';

const RecipeChoices = ({ handleChange, label, choices, currentVal }) => {
  return (
    <div className="radio-buttons">
      <input
        type="text"
        name={label}
        value={currentVal}
        placeholder="Guess the ingredient..."
        onChange={handleChange}
        className="textbox"
      />
      {choices &&
        choices.map((choice) => (
          <li key={choice}>
            <label>
              <input
                type="radio"
                name={label}
                value={choice}
                checked={currentVal === choice}
                onChange={handleChange}
              />
              {choice}
            </label>
          </li>
        ))}
    </div>
  );
};

export default RecipeChoices;

