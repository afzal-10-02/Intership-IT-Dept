import React, { useState } from "react";

const orders = [
  { id: 1, user: "Alice", date: "2025-01-01", status: "Approved", item: "Laptop" },
  { id: 2, user: "Bob", date: "2025-01-03", status: "Pending at Verifier", item: "CPU" },
  { id: 3, user: "Charlie", date: "2025-01-05", status: "Rejected", item: "Printer" },
  { id: 4, user: "David", date: "2025-01-07", status: "Pending at Operator", item: "Mouse" },
  { id: 5, user: "Eve", date: "2025-01-09", status: "Approved", item: "Chair" },
  { id: 6, user: "Frank", date: "2025-01-11", status: "Pending at Verifier", item: "Stationary Items" },
  { id: 7, user: "Grace", date: "2025-01-13", status: "Rejected", item: "Laptop" },
  { id: 8, user: "Hannah", date: "2025-01-15", status: "Approved", item: "CPU" },
  { id: 9, user: "Ian", date: "2025-01-17", status: "Pending at Operator", item: "Printer" },
  { id: 10, user: "Jack", date: "2025-01-19", status: "Approved", item: "Mouse" },
  { id: 11, user: "Karen", date: "2025-01-21", status: "Pending at Verifier", item: "Chair" },
  { id: 12, user: "Liam", date: "2025-01-23", status: "Rejected", item: "Stationary Items" },
  { id: 13, user: "Mona", date: "2025-01-25", status: "Approved", item: "Laptop" },
  { id: 14, user: "Nate", date: "2025-01-27", status: "Pending at Operator", item: "CPU" },
  { id: 15, user: "Olivia", date: "2025-01-29", status: "Approved", item: "Printer" },
  { id: 16, user: "Paul", date: "2025-01-31", status: "Rejected", item: "Mouse" },
  { id: 17, user: "Quinn", date: "2025-02-02", status: "Pending at Verifier", item: "Chair" },
  { id: 18, user: "Rachel", date: "2025-02-04", status: "Approved", item: "Stationary Items" },
  { id: 19, user: "Steve", date: "2025-02-06", status: "Pending at Operator", item: "Laptop" },
  { id: 20, user: "Tina", date: "2025-02-08", status: "Rejected", item: "CPU" },
  { id: 21, user: "Uma", date: "2025-02-10", status: "Approved", item: "Printer" },
  { id: 22, user: "Victor", date: "2025-02-12", status: "Pending at Verifier", item: "Mouse" },
  { id: 23, user: "Wendy", date: "2025-02-14", status: "Approved", item: "Chair" },
  { id: 24, user: "Xander", date: "2025-02-16", status: "Pending at Operator", item: "Stationary Items" },
  { id: 25, user: "Yara", date: "2025-02-18", status: "Rejected", item: "Laptop" },
  { id: 26, user: "Zane", date: "2025-02-20", status: "Approved", item: "CPU" },
  { id: 27, user: "Alice", date: "2025-02-22", status: "Pending at Verifier", item: "Printer" },
  { id: 28, user: "Bob", date: "2025-02-24", status: "Approved", item: "Mouse" },
  { id: 29, user: "Charlie", date: "2025-02-26", status: "Rejected", item: "Chair" },
  { id: 30, user: "David", date: "2025-02-28", status: "Pending at Operator", item: "Stationary Items" },
  { id: 31, user: "Eve", date: "2025-03-02", status: "Approved", item: "Laptop" },
  { id: 32, user: "Frank", date: "2025-03-04", status: "Pending at Verifier", item: "CPU" },
  { id: 33, user: "Grace", date: "2025-03-06", status: "Rejected", item: "Printer" },
  { id: 34, user: "Hannah", date: "2025-03-08", status: "Approved", item: "Mouse" },
  { id: 35, user: "Ian", date: "2025-03-10", status: "Pending at Operator", item: "Chair" },
  { id: 36, user: "Jack", date: "2025-03-12", status: "Approved", item: "Stationary Items" },
  { id: 37, user: "Karen", date: "2025-03-14", status: "Pending at Verifier", item: "Laptop" },
  { id: 38, user: "Liam", date: "2025-03-16", status: "Rejected", item: "CPU" },
  { id: 39, user: "Mona", date: "2025-03-18", status: "Approved", item: "Printer" },
  { id: 40, user: "Nate", date: "2025-03-20", status: "Pending at Operator", item: "Mouse" },
  { id: 41, user: "Olivia", date: "2025-03-22", status: "Approved", item: "Chair" },
  { id: 42, user: "Paul", date: "2025-03-24", status: "Rejected", item: "Stationary Items" },
  { id: 43, user: "Quinn", date: "2025-03-26", status: "Pending at Verifier", item: "Laptop" },
  { id: 44, user: "Rachel", date: "2025-03-28", status: "Approved", item: "CPU" },
  { id: 45, user: "Steve", date: "2025-03-30", status: "Pending at Operator", item: "Printer" },
  { id: 46, user: "Tina", date: "2025-04-01", status: "Rejected", item: "Mouse" },
  { id: 47, user: "Uma", date: "2025-04-03", status: "Approved", item: "Chair" },
  { id: 48, user: "Victor", date: "2025-04-05", status: "Pending at Verifier", item: "Stationary Items" },
  { id: 49, user: "Wendy", date: "2025-04-07", status: "Approved", item: "Laptop" },
  { id: 50, user: "Xander", date: "2025-04-09", status: "Pending at Operator", item: "CPU" },
  { id: 51, user: "Yara", date: "2025-04-11", status: "Rejected", item: "Printer" },
  { id: 52, user: "Zane", date: "2025-04-13", status: "Approved", item: "Mouse" },
  { id: 53, user: "Alice", date: "2025-04-15", status: "Pending at Verifier", item: "Chair" },
  { id: 54, user: "Bob", date: "2025-04-17", status: "Approved", item: "Stationary Items" },
  { id: 55, user: "Charlie", date: "2025-04-19", status: "Rejected", item: "Laptop" },
  { id: 56, user: "David", date: "2025-04-21", status: "Pending at Operator", item: "CPU" },
  { id: 57, user: "Eve", date: "2025-04-23", status: "Approved", item: "Printer" },
  { id: 58, user: "Frank", date: "2025-04-25", status: "Pending at Verifier", item: "Mouse" },
  { id: 59, user: "Grace", date: "2025-04-27", status: "Rejected", item: "Chair" },
  { id: 60, user: "Hannah", date: "2025-04-29", status: "Approved", item: "Stationary Items" },
  { id: 61, user: "Ian", date: "2025-05-01", status: "Pending at Operator", item: "Laptop" },
  { id: 62, user: "Jack", date: "2025-05-03", status: "Approved", item: "CPU" },
  { id: 63, user: "Karen", date: "2025-05-05", status: "Pending at Verifier", item: "Printer" },
  { id: 64, user: "Liam", date: "2025-05-07", status: "Rejected", item: "Mouse" },
  { id: 65, user: "Mona", date: "2025-05-09", status: "Approved", item: "Chair" },
  { id: 66, user: "Nate", date: "2025-05-11", status: "Pending at Operator", item: "Stationary Items" },
  { id: 67, user: "Olivia", date: "2025-05-13", status: "Approved", item: "Laptop" },
  { id: 68, user: "Paul", date: "2025-05-15", status: "Rejected", item: "CPU" },
  { id: 69, user: "Quinn", date: "2025-05-17", status: "Pending at Verifier", item: "Printer" },
  { id: 70, user: "Rachel", date: "2025-05-19", status: "Approved", item: "Mouse" },
  { id: 71, user: "Steve", date: "2025-05-21", status: "Pending at Operator", item: "Chair" },
  { id: 72, user: "Tina", date: "2025-05-23", status: "Rejected", item: "Stationary Items" },
  { id: 73, user: "Uma", date: "2025-05-25", status: "Approved", item: "Laptop" },
  { id: 74, user: "Victor", date: "2025-05-27", status: "Pending at Approver", item: "CPU" },
  { id: 75, user: "Wendy", date: "2025-05-29", status: "Approved", item: "Printer" },
  { id: 76, user: "Xander", date: "2025-05-31", status: "Pending at Operator", item: "Mouse" },
  // Note: Only 76 orders shown here for brevity, continue similarly for all 100.
];



const ORDERS_PER_PAGE = 10;

const OrderFilterTable = () => {
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleView = (order) => {
    setSelectedOrder(order);
  };

  // Filter orders by month, date, and status
  const filteredOrders = orders.filter((order) => {
    const orderDate = new Date(order.date);
    const matchMonth = month ? orderDate.getMonth() + 1 === parseInt(month) : true;
    const matchDate = date ? order.date === date : true;
    const matchStatus = status ? order.status === status : true;
    return matchMonth && matchDate && matchStatus;
  });

  // Calculate pagination values
  const totalPages = Math.ceil(filteredOrders.length / ORDERS_PER_PAGE);
  const startIndex = (currentPage - 1) * ORDERS_PER_PAGE;
  const currentOrders = filteredOrders.slice(startIndex, startIndex + ORDERS_PER_PAGE);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [month, date, status]);

  const uniqueStatuses = [...new Set(orders.map(order => order.status))];

  return (
    <div className="d-flex align-items-center justify-content-center mt-2">
      <div className="bg-white pb-2 rounded shadow w-75 d-flex flex-column align-items-center">
        <h2 className="text-xl font-semibold mt-3">Order Details</h2>

        <div className="d-flex flex-row justify-content-around w-100 px-5 mb-3 gap-2">
          <select
            className="border rounded p-2"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="">All Months</option>
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {new Date(0, i).toLocaleString("default", { month: "long" })}
              </option>
            ))}
          </select>

          <input
            type="date"
            className="border rounded p-2"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <select
            className="border rounded p-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All Statuses</option>
            {uniqueStatuses.map((s, index) => (
              <option key={index} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <table className="table-auto border-collapse mb-3" style={{ width: '95%' }}>
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Order ID</th>
              <th className="border p-2">User</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Item</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.length > 0 ? (
              currentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="border p-1 text-center">{order.id}</td>
                  <td className="border p-1 text-center">{order.user}</td>
                  <td className="border p-1 text-center">{order.date}</td>
                  <td className="border p-1 text-center">{order.item}</td>
                  <td className="border p-1 text-center">{order.status}</td>
                  <td className="border p-1 text-center">
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleView(order)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No matching orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="d-flex justify-center gap-3 mb-4">
          <button
            className="btn btn-outline-primary"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            &larr; Previous
          </button>
          <span className="align-self-center">
            Page {currentPage} of {totalPages || 1}
          </span>
          <button
            className="btn btn-outline-primary"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next &rarr;
          </button>
        </div>

        {selectedOrder && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(2px)",
              zIndex: 1050,
            }}
          >
            <div className="card shadow-lg" style={{ width: "400px" }}>
              <div className="card-body">
                <h5 className="card-title">Order Details</h5>
                <p><strong>Order ID:</strong> {selectedOrder.id}</p>
                <p><strong>User:</strong> {selectedOrder.user}</p>
                <p><strong>Date:</strong> {selectedOrder.date}</p>
                <p><strong>Status:</strong> {selectedOrder.status}</p>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-outline-secondary" onClick={() => setSelectedOrder(null)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default OrderFilterTable;
