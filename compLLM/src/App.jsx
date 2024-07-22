import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { getGroqChatCompletion } from "./Req/reqLLM"; // or any other theme

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleButtonClick = async () => {
    const chatCompletion = await getGroqChatCompletion(userInput);
    const res = chatCompletion.choices[0]?.message?.content || "";
    setResponse(res);
  };

  return (
    <div className="h-screen bg-gray-950 flex flex-col justify-between p-4">
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          The LLM
        </h1>
        {response && (
          <div className="mt-4 text-white">
            <p>{response}</p>
          </div>
        )}
      </div>

      <div className="mb-4 flex items-center">
        <InputText
          className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="inputtext"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter your query"
        />
        <Button
          label="Submit"
          icon="pi pi-check"
          onClick={handleButtonClick}
          className="ml-2 bg-lime-100"
        />
      </div>
    </div>
  );
};

export default App;
