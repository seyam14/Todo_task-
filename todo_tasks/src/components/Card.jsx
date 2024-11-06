/* eslint-disable react/prop-types */
import { GrAttachment } from 'react-icons/gr';
import { FiMessageCircle, FiCalendar } from 'react-icons/fi';

function Card({ onAddAttachment, attachmentCount }) {
  return (
    <div className="card bg-base-100 w-full max-w-5xl shadow-xl overflow-hidden">
      <div className="card-body">
        <div className="flex items-center mb-4">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <p className="font-semibold">Client Name</p>
        </div>
        
        <div className="mb-4">
          <p className="text-gray-600 text-sm truncate">
            This is a short description about the client or project.
          </p>
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <FiMessageCircle className="text-gray-500" />
            <span>15</span>
          </div>
          <button onClick={onAddAttachment} className="flex items-center space-x-1">
            <GrAttachment className="text-gray-500" />
            <span>{attachmentCount}</span> 
          </button>
          <div className="flex items-center space-x-1 ml-auto">
            <FiCalendar className="text-gray-500" />
            <span>30-12-2022</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
