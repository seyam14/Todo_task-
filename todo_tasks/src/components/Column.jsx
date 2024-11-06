/* eslint-disable react/prop-types */
import Card from './Card';

function Column({ title, onAddAttachment, attachmentCount }) {
  return (
    <div className="w-64 p-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="space-y-2 h-[500px] overflow-y-auto border p-2 rounded-lg">
        {[...Array(6)].map((_, i) => (
          <Card key={i} onAddAttachment={onAddAttachment} attachmentCount={attachmentCount} />
        ))}
      </div>
    </div>
  );
}

export default Column;
