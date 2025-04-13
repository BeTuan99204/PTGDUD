import { useEffect, useState } from "react";

const EditModal = ({ fetchOrderData, id, isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [orderValue, setOrderValue] = useState(0);
  const [orderDate, setOrderDate] = useState("");
  const [status, setStatus] = useState("");
  const [order, setOrder] = useState(null);

  const fetchGetOrder = async () => {
    await fetch(`http://localhost:3001/orders/${id}`)
      .then((response) => response.json())
      .then((data) => setOrder(data));
  };

  useEffect(() => {
    if (id) {
      fetchGetOrder();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (order) {
      setName(order.customerName || "");
      setCompany(order.company || "");
      setOrderValue(order.orderValue || 0);
      setOrderDate(order.orderDate || "");
      setStatus(order.status || "");
    }
  }, [order]);

  const handleEditUser = async () => {
    const response = await fetch(`http://localhost:3001/orders/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...order,
        customerName: name,
        company,
        orderValue: Number(orderValue),
        status,
      }),
    });

    if (response.ok) {
      alert("Cập nhật thành công!")
      fetchOrderData()
    }
    else {
      alert("Không thể cập nhật!")
    }
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "modalOverlay") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="modalOverlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-white/20 backdrop-blur-xs flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Update Orders</h2>
        </div>
        <div>
          <label htmlFor="">Customer Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="customerName..."
            className="border border-gray-300 px-3 py-2 w-full mb-4 rounded"
          />
        </div>
        <div>
          <label htmlFor="">Company</label>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            placeholder="company..."
            className="border border-gray-300 px-3 py-2 w-full mb-4 rounded"
          />
        </div>
        <div>
          <label htmlFor="">Order Value</label>
          <input
            value={orderValue}
            onChange={(e) => setOrderValue(Number(e.target.value))}
            type="number"
            placeholder="orderValue..."
            className="border border-gray-300 px-3 py-2 w-full mb-4 rounded"
          />
        </div>

        <div>
          <label htmlFor="">Order Date</label>
          <p className="border border-gray-300 px-3 py-2 w-full mb-4 rounded">
            {orderDate || "N/A"}
          </p>
        </div>

        <div>
          <label htmlFor="">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full mb-4 rounded"
          >
            <option value="New">New</option>
            <option value="In-progress">In-progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Đóng
          </button>
          <button
            onClick={handleEditUser}
            className="px-4 py-2 rounded bg-[#E64F84] text-white hover:bg-[#ff1491]"
          >
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
