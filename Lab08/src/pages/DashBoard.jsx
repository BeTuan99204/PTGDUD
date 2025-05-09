import { useEffect, useState } from "react";
import { images } from "../assets/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AddModal from "../components/AddModal";
import EditModal from "../components/EditModal";

const DashBoard = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const fetchOrderData = async () => {
    fetch("http://localhost:3001/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data));
  };

  const itemStatus = (status) => {
    if (status === "New") return "text-blue-700 bg-blue-100";
    else if (status === "In-progress") return "text-yellow-700 bg-yellow-100";
    else return "text-green-700 bg-green-100";
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  const totalPages = Math.ceil(orders.length / itemPerPage);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEditClick = (id) => {
    setSelectedOrderId(id); // Cập nhật ID khi click vào chỉnh sửa
    setEditModal(true); // Mở modal chỉnh sửa
  };

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-bold flex gap-4 w-80">
          <img src={images.File_text_1} alt="File_text_1" />
          <p>Detailed report</p>
        </div>
        <div className="flex gap-5">
          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer flex items-center gap-3 px-3 py-1.5 text-[#E64F84] border border-[#E64F84] rounded-md"
          >
            <img src={images.Download} alt="Download" />
            <p>Import</p>
          </button>
          <button className="flex items-center gap-3 px-3 py-1.5 cursor-pointer text-[#E64F84] border border-[#E64F84] rounded-md">
            <img src={images.Move_up} alt="Move_up" />
            <p>Export</p>
          </button>
        </div>
      </div>
      <div className="mt-7">
        <table className="min-w-full border border-gray-300 rounded-sm border-separate">
          <thead>
            <tr className="text-gray-500">
              <td className="p-3">
                <input type="checkbox" />
              </td>
              <td className="px-4 py-3 font-bold">CUSTOMER NAME</td>
              <td className="px-4 py-3 font-bold">COMPANY</td>
              <td className="px-4 py-3 font-bold">ORDER VALUE</td>
              <td className="px-4 py-3 font-bold">ORDER DATE</td>
              <td className="px-4 py-3 font-bold">STATUS</td>
              <td className="px-4 py-3 font-bold"></td>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3 font-medium">{item.customerName}</td>
                <td className="px-4 py-3">{item.company}</td>
                <td className="px-4 py-3">${item.orderValue}</td>
                <td className="px-4 py-3 text-gray-400">{item.orderDate}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2.5 py-1.5 rounded-xl text-xs font-medium ${itemStatus(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3 cursor-pointer">
                  <img
                    onClick={() => handleEditClick(item.id)}
                    src={images.create}
                    alt="create"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 flex justify-between">
        <p className="text-sm">{orders.length} results</p>
        <div className="flex">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-gray-700 rounded-md cursor-pointer"
          >
            <ChevronLeft />
          </button>
          <div className="flex items-center mx-2">
            <p className="text-gray-700">
              Page {currentPage} of {totalPages}
            </p>
          </div>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-gray-700 rounded-md cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <AddModal
        fetchOrderData={fetchOrderData}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      {editModal && selectedOrderId !== null && (
        <EditModal
          fetchOrderData={fetchOrderData}
          id={selectedOrderId}
          isOpen={editModal}
          onClose={() => setEditModal(false)}
        />
      )}
    </div>
  );
};

export default DashBoard;
