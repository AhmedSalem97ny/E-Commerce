import { useState } from "react";
import { verifyResetCode } from "../../services/auth-service";
import { useNavigate } from "react-router";

export default function VerifyResetCode() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleVerify(e) {
    e.preventDefault();
    try {
      await verifyResetCode(code);
      navigate("/reset-password");
    } catch (err) {
      setError("Invalid or expired reset code.");
    }
  }

  return (
    <form onSubmit={handleVerify} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Verify Reset Code</h2>
      <input
        type="text"
        placeholder="Enter reset code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="border p-2 w-full mb-3"
        required
      />
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Verify Code
      </button>
    </form>
  );
}
