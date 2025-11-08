"use client";

import { useState } from "react";
import AddressModal from "@/components/checkout/address-modal";
import AddressCard from "@/components/checkout/address-card";
import { handleCart } from "@/hooks/handle-cart";
import OrderSummary from "@/components/checkout/order-card"; // <-- new component

type Address = {
  id: string;
  fullName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
};

const CheckoutPage = () => {
  const { cart } = handleCart();

  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      fullName: "John Doe",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "+1 555 555 5555",
    },
  ]);
  const [selectedAddress, setSelectedAddress] = useState<string>("1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);

  const handleAddAddress = (address: Address) => {
    setAddresses((prev) => [
      ...prev,
      { ...address, id: Date.now().toString() },
    ]);
    setIsModalOpen(false);
  };

  const handleUpdateAddress = (updated: Address) => {
    setAddresses((prev) =>
      prev.map((addr) => (addr.id === updated.id ? updated : addr))
    );
    setIsModalOpen(false);
  };

  const handleEdit = (address: Address) => {
    setEditingAddress(address);
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setEditingAddress(null);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-10 p-6 md:p-10 max-w-7xl mx-auto">
      {/* LEFT SECTION — Address Management */}
      <div className="flex flex-col flex-1 space-y-6">
        <h1 className="text-3xl font-semibold">Checkout</h1>
        <h2 className="text-xl font-semibold">Delivery Address</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addresses.map((address) => (
            <AddressCard
              key={address.id}
              address={address}
              selected={selectedAddress === address.id}
              onSelect={() => setSelectedAddress(address.id)}
              onEdit={() => handleEdit(address)}
            />
          ))}

          <button
            onClick={handleCreate}
            className="border-2 border-dashed border-gray-400 rounded-xl p-6 text-gray-500 hover:text-black hover:border-black transition"
          >
            + Add New Address
          </button>
        </div>
      </div>

      {/* RIGHT SECTION — Order Summary */}
      <div className="flex-1 max-w-md w-full">
        <OrderSummary cart={cart} />
      </div>

      {/* ADDRESS MODAL */}
      {isModalOpen && (
        <AddressModal
          onClose={() => setIsModalOpen(false)}
          onSave={editingAddress ? handleUpdateAddress : handleAddAddress}
          initialData={editingAddress}
        />
      )}
    </div>
  );
};

export default CheckoutPage;
