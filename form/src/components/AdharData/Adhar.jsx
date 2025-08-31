import { CirclePlus, Pencil, SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const Adhar = () => {
  const [user, setUser] = useState([
    {
      id: 1,
      fullname: "Aarav Sharma",
      mobileno: "9876543210",
      address: "Bangalore, Karnataka",
    },
    {
      id: 2,
      fullname: "Priya Patel",
      mobileno: "9123456780",
      address: "Ahmedabad, Gujarat",
    },
    {
      id: 3,
      fullname: "Rohan Mehta",
      mobileno: "9012345678",
      address: "Delhi, India",
    },
  ]);
  const [fullname, setFullname] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [address, setAddress] = useState("");
  const [existId, setExistId] = useState(null);

  const handleadd = () => {
    if (!fullname) {
      toast.error("Fullname is required!");
      return;
    }
    if (!mobileno) {
      toast.error("Mobile number is required!");
      return;
    }

    if (!address) {
      toast.error("Address is required!");
      return;
    }

    if (existId) {
      setUser(
        user.map((u) =>
          u.id === existId ? { ...u, fullname, mobileno, address } : u
        )
      );
      toast.success("User updated successfully!");
    } else {
      const newUser = {
        id: new Date().getTime(),
        fullname,
        mobileno,
        address,
      };
      if (newUser.mobileno.length > 10) {
        toast.error("Mobile number cannot exceed 10 digits");
        return;
      } else {
        setUser([...user, newUser]);
        toast.success("New user created!");
      }
    }
    setFullname("");
    setMobileno("");
    setAddress("");
    setExistId(null);
  };

  const handleUserDelete = (id) => {
    setUser(user.filter((usr) => usr.id !== id));
    toast.success(`User deleted with id: ${id}`);
  };

  const handleUserEdit = (usr) => {
    setFullname(usr.fullname);
    setMobileno(usr.mobileno);
    setAddress(usr.address);
    setExistId(usr.id);
  };

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
        <h2 className="text-xl font-bold mb-4 text-center">
          {existId ? "Update User" : "Add New User"}
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter your name..."
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            value={mobileno}
            type="number"
            placeholder="Enter mobile no..."
            onChange={(e) => setMobileno(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            value={address}
            type="text"
            placeholder="Enter your address"
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleadd}
            className={`px-4 py-2 rounded-lg font-semibold text-white ${
              existId
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {existId ? (
              <span className="flex items-center gap-1.5">
                <Pencil size={16} /> Update
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <CirclePlus size={18} /> Add
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="mt-8">
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">Fullname</th>
              <th className="py-2 px-4 text-left">Mobile No.</th>
              <th className="py-2 px-4 text-left">Address</th>
              <th className="py-2 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-4 text-gray-500 italic"
                >
                  No users found
                </td>
              </tr>
            )}

            {user.map((usr) => (
              <tr key={usr.id} className="border-t hover:bg-gray-50 transition">
                <td className="py-2 px-4">{usr.fullname}</td>
                <td className="py-2 px-4">{usr.mobileno}</td>
                <td className="py-2 px-4">{usr.address}</td>
                <td className="py-2 px-4 flex gap-2 justify-center">
                  <button
                    onClick={() => handleUserEdit(usr)}
                    className="px-3 py-2 text-sm rounded-lg bg-yellow-500 text-white hover:bg-yellow-600"
                  >
                    <SquarePen size={16} />
                  </button>
                  <button
                    onClick={() => handleUserDelete(usr.id)}
                    className="px-3 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Adhar;
