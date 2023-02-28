import { ProgressBar } from 'react-loader-spinner'

export const Loading = ({ message, center }) => (
  <div
    className={`${
      center ? 'justify-center' : 'justify-start'
    } flex flex-col items-center w-full h-[calc(100vh-120px)]`}>
    <ProgressBar
      barColor="#DC2626"
      borderColor="#EF4444"
      height={70}
      width={250}
    />
    {message && <p className="px-2 -mt-5 text-center text-md">{message}</p>}
  </div>
)
