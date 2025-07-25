import { useState } from "react";
import { resetPassword } from "../../services/auth-service";
import { useNavigate } from "react-router";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const email = localStorage.getItem("resetEmail");

  async function handleReset(e) {
    e.preventDefault();
    if (newPassword !== confirm) {
      return setError("Passwords do not match.");
    }

    try {
      await resetPassword({ email, newPassword });
      localStorage.removeItem("resetEmail");
      navigate("/login");
    } catch (err) {
      setError("Failed to reset password.");
    }
  }

  return (
    <form onSubmit={handleReset} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Reset Your Password</h2>
      <input
        type="password"
        placeholder="New password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="border p-2 w-full mb-3"
        required
      />
      <input
        type="password"
        placeholder="Confirm password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        className="border p-2 w-full mb-3"
        required
      />
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
        Reset Password
      </button>
    </form>
  );
}
