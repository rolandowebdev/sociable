import { ProgressBar } from 'react-loader-spinner';

const Loading = ({ message, center }) => {
  return (
    <div
      className={`${
        center ? 'justify-center' : 'justify-start'
      } flex flex-col items-center w-full h-[calc(100vh-120px)]`}>
      <ProgressBar color="#00BFFF" borderColor="#00a6dd" height={70} width={250} />
      {message && <p className="px-2 -mt-5 text-center text-md">{message}</p>}
    </div>
  );
};

export default Loading;
