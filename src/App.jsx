import './App.css'

export default function App() {

  return (
      // <div className='h-screen items-center justify-center flex align-center'>
      //   <h1 className='text-lg font-bold text-blue-400'>
      //       Tailwind CSS is Working 🚀
      //   </h1>
      // </div>
      <div className="h-screen flex justify-center items-center p-6">
        <div className="bg-white p-6 rounded-xl shadow-lg w-80">
        
          <h1 className="text-2xl text-red-400 font-bold mb-3">
            React + Tailwind
          </h1>
        
          <p className="text-blue-600 mb-4">
            Tailwind makes styling super fast.
          </p>
        
          <button className="bg-black text-white p-2 rounded-lg hover:bg-gray-800">
            Learn More
          </button>
        
        </div>
      </div>
  );
}