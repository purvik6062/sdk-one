import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const MyButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 15px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
      }}
    >
      {text}
    </button>
  );
};

export const sayHello = () => {
  return "Hello from My SDK!";
};
