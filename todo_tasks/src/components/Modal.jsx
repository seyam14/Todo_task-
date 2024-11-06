/* eslint-disable react/prop-types */

function Modal({ onClose, children }) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg w-1/3">
        <h2 className="text-xl font-bold">Upload Attachments</h2>
        {children} 
        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
