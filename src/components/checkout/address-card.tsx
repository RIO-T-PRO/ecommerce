type Props = {
  address: {
    id: string;
    fullName: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
  };
  selected: boolean;
  onSelect: () => void;
  onEdit: () => void;
};

const AddressCard = ({ address, selected, onSelect, onEdit }: Props) => {
  return (
    <div
      onClick={onSelect}
      className={`border rounded-xl p-4 cursor-pointer flex flex-col justify-between transition 
        ${selected ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
    >
      <div>
        <h3 className="text-lg font-semibold">{address.fullName}</h3>
        <p className="text-gray-600">
          {address.street}, {address.city}, {address.state}, {address.zip}
        </p>
        <p className="text-gray-600">{address.phone}</p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onEdit();
        }}
        className="mt-3 text-sm text-blue-600 hover:underline self-start"
      >
        Edit
      </button>
    </div>
  );
};

export default AddressCard;
