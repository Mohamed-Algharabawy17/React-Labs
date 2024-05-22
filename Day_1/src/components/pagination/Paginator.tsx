import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface IProps {
  productsPerPage: number;
  totalProducts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Paginator = ({ productsPerPage, totalProducts, paginate, currentPage }: IProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const totalPages = pageNumbers.length;

  const handlePrevious = () => {
    paginate(currentPage == 1 ? totalPages : currentPage - 1);
  };

  const handleNext = () => {
    paginate(currentPage == totalPages ? 1 : currentPage + 1);
  };

  return (
    <div className="flex items-center rounded-3xl justify-between border-t border-gray-200 bg-white px-1 py-1 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={handlePrevious}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">
              {(currentPage - 1) * productsPerPage + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {Math.min(currentPage * productsPerPage, totalProducts)}
            </span>{" "}
            of <span className="font-medium">{totalProducts}</span> results
          </p>
        </div>
        <div>
          <nav
            className="inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={handlePrevious}
              className="inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md"
            >
              <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
            </button>
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`inline-flex items-center px-4 py-2 text-sm font-medium ${
                  number === currentPage
                    ? "text-white bg-black"
                    : "text-gray-700 bg-white hover:bg-gray-50"
                } border border-gray-300 focus:outline-none focus:border-none`}
              >
                {number}
              </button>
            ))}
            <button
              onClick={handleNext}
              className="inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50"
            >
              <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Paginator;
