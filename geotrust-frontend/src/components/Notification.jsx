import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore'; // Firestore methods

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  // Fetch notifications from Firestore
  useEffect(() => {
    const fetchNotifications = async () => {
      const querySnapshot = await getDocs(collection(db, "notifications"));
      const notificationsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotifications(notificationsData);
    };

    fetchNotifications();
  }, []);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, status: "read" } : notif
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Notifications</h1>
      {notifications.length === 0 ? (
        <p className="text-center">You have no notifications.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notif) => (
            <li
              key={notif.id}
              className={`p-4 rounded-lg shadow-md ${
                notif.status === "unread" ? "bg-blue-100" : "bg-gray-100"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p>{notif.message}</p>
                  <span className="text-sm text-gray-500">{notif.date}</span>
                </div>
                {notif.status === "unread" && (
                  <button
                    className="ml-4 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                    onClick={() => markAsRead(notif.id)}
                  >
                    Mark as Read
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
