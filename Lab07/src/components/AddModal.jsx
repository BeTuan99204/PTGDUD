import { useRef } from "react";

const AddModal = ({ isOpen, onClose, fetchOrderData }) => {
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const orderValueRef = useRef(null);

  if (!isOpen) return null;

  const handleAddUser = async () => {
    const name = nameRef.current.value;
    const company = companyRef.current.value;
    const orderValue = orderValueRef.current.value;
    if (name === "" || company === "" || orderValue === "") {
      alert("Vui lòng điền đủ thông tin!");
      return;
    }

    const newOrder = {
      customerName: name,
      company,
      orderValue: Number(orderValue),
      orderDate: new Date().toLocaleDateString(),
      status: "New",
    };

    const response = await fetch("http://localhost:3001/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });

    if (response.ok) {
      alert("Thêm thành công!");
      fetchOrderData();
      onClose();
    }
    else {
      alert("Không thể thêm!")
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "modalOverlay") {
      onClose();
    }
  };

  return (
    <div
      id="modalOverlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-white/20 backdrop-blur-xs flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Import Data</h2>
        </div>
        <div>
          <label htmlFor="">Customer Name</label>
          <input
            ref={nameRef}
            type="text"
            placeholder="customerName..."
            className="border border-gray-300 px-3 py-2 w-full mb-4 rounded"
          />
        </div>
        <div>
          <label htmlFor="">Company</label>
          <input
            ref={companyRef}
            type="text"
            placeholder="company..."
            className="border border-gray-300 px-3 py-2 w-full mb-4 rounded"
          />
        </div>
        <div>
          <label htmlFor="">Order Value</label>
          <input
            ref={orderValueRef}
            type="number"
            placeholder="orderValue..."
            className="border border-gray-300 px-3 py-2 w-full mb-4 rounded"
          />
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Đóng
          </button>
          <button
            onClick={handleAddUser}
            className="px-4 py-2 rounded bg-[#E64F84] text-white hover:bg-[#ff1491]"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
