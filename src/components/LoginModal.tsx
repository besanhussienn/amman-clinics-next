interface LoginModalProps {
onClose: () => void;
}

function LoginModal({ onClose }: LoginModalProps) {
    return (
    // Overlay: clicking it closes the modal
    <div
    onClick={onClose}
    className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      {/* Login window: stopPropagation so clicking inside doesn't close it */}
        <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-135 max-w-[90%] bg-[#FDFBF7] p-6 rounded-2xl shadow-xl text-stone-800"
        >
        {/* Title */}
        <p className="text-center text-stone-900 text-3xl font-bold">Sign in</p>

        {/* Close button */}
        <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 text-stone-400 hover:text-stone-700 font-bold text-xl"
        >
        ✕
        </button>

        {/* Form */}
        <form
        className="my-6 space-y-4"
        onSubmit={(e) => {
            e.preventDefault();
            console.log("Submitted");
        }}
        >
        <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">
            Email
            </label>
            <input
            className="block text-base w-full px-4 py-2 rounded-lg border-2 border-stone-600 bg-white focus:outline-none focus:ring-2 focus:ring-stone-400"
            type="email"
            placeholder="example@example.com"
            name="email"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">
            Password
            </label>
            <input
            className="block text-base w-full px-4 py-2 rounded-lg border-2 border-stone-600 bg-white focus:outline-none focus:ring-2 focus:ring-stone-400"
            type="password"
            placeholder="Enter Your Password"
            name="password"
            />
        </div>

            <button
            type="submit"
            className="w-full py-2 px-4 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors font-medium"
            >
            Sign in
        </button>
        </form>
    </div>
    </div>
);
}

export default LoginModal;