import { useState } from 'react'
import { FaComments, FaTimes } from 'react-icons/fa'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {/* Tombol buka/tutup */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg focus:outline-none transition"
        aria-label="Toggle Chatbot"
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>

      {/* Chatbot iframe */}
      {isOpen && (
        <iframe
          src="https://your-chatbot-url.com"
          className="w-80 h-96 rounded-xl shadow-xl border border-gray-300"
          title="Chatbot LKP NAUFAL"
        />
      )}
    </div>
  )
}
