import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { useonlineStatus } from "../../hooks/useOnlineStatus";

export default function OfflineScreen({ children }) {
  const { isOnline } = useonlineStatus();

  return (
    <>
      {children}
      {!isOnline && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="flex items-center gap-3 bg-red-100 border border-red-300 rounded-lg px-4 py-3 shadow-lg">
            <FontAwesomeIcon icon={faWifi} className="text-red-500 text-xl" />
            <span className="text-red-700 font-semibold">
              You are offline. Please check your connection.
            </span>
          </div>
        </div>
      )}
    </>
  );
}