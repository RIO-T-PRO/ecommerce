import { useState } from "react";

type Props = {
  onClose: () => void;
  onSave: (address: any) => void;
  initialData?: any;
};

const AddressModal = ({ onClose, onSave, initialData }: Props) => {
  const [form, setForm] = useState(
    initialData || {
      fullName: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg relative">
        <h2 className="text-2xl font-semibold mb-4">
          {initialData ? "Edit Address" : "Add New Address"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {["fullName", "street", "city", "state", "zip", "phone"].map(
            (field) => (
              <input
                key={field}
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder={
                  field.charAt(0).toUpperCase() +
                  field.slice(1).replace(/([A-Z])/g, " $1")
                }
                className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            )
          )}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
