import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          خوش آمدی
        </h1>
        <p className="text-gray-600 mb-6">
          شما وارد اپلیکیشن دوم شدید!
        </p>
        <button
          onClick={() => {
            window.location.href = "http://localhost:3001";
          }}
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-400 transition"
        >
          بازگشت به اپ اول
        </button>
      </div>
    </div>
  );
};

export default App;
