export default function Location() {
  return (
    <div className="relative group">
      <div className="flex items-center gap-3">
        <div className="flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-lg border border-transparent hover:border-primary transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-map-pin text-primary mr-2"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>

          <span className="font-medium text-gray-800">Тюмень, Россия</span>
        </div>
        <button
          className="p-2 text-gray-500 hover:text-primary transition-colors"
          aria-label="Изменить город"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-square-pen "
          >
            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
