export default function ThirdPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-700 to-cyan-300 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Unlock The Future
        </h1>


       
        <span className="relative flex size-6 mx-auto">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex size-6 rounded-full bg-white"></span>

        </span>
                  <button className="text-black rounded-2xl bg-cyan-500 opacity-50  border-black border-2 w-20 mt-3 font-medium ">Click</button>

      </div>
    </div>
  );
}