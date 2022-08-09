import React from 'react';

const SubmitButton = ({ submitValidator, formSubmitHandler }) => {
  return (
    <div>
      <button
        type="submit"
        class="btn btn-primary"
        disabled={!submitValidator()}
        onClick={formSubmitHandler}
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
