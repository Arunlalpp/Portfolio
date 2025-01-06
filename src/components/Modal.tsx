import defaultPortfolioData from "../data";

export interface ModalProps {
  activeID: string;
  handleShowCloseModal: () => void;
}

function Modal({ activeID, handleShowCloseModal }: ModalProps) {
  const portfolio = defaultPortfolioData.find(
    (portfolio) => portfolio.id === activeID
  );

  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-blue-900 bg-opacity-40">
      <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-lg transform -translate-x-1/2 -translate-y-1/2 p-5">
        <img src={portfolio?.imgUrl} alt="portfolio" className="rounded-lg" />

        <div>
          <h2 className="text-2xl text-blue-900 font-bold my-5">
            {portfolio?.title}
          </h2>
          <p className="text-base leading-7 text-blue-500">
            {portfolio?.description}
          </p>
          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-blue-900 text-lg font-bold">Technologies:</h4>
            {portfolio?.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 rounded-[5px] text-sm leading-0"
              >
                {item}
              </span>
            ))}
          </div>
          <a href={portfolio?.imgUrl}>
            <button className="bg-violet-700 text-white py-2 px-4 my-8 rounded-lg font-normal hover:bg-black ease-in duration-300">
              Live site
            </button>
          </a>
        </div>
        <button
          className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-sm leading-0 cursor-pointer"
          onClick={handleShowCloseModal}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default Modal;
