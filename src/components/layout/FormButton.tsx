"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import ContactForm from "./ContactForm";

export default function FormButton({ buttonText = "Contact Us" }) {
	const [open, setOpen] = useState(false);

		return (
			<>
				<button
					className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow transition w-full sm:w-auto cursor-pointer"
					onClick={() => setOpen(true)}
				>
					{buttonText}
				</button>
				{open && typeof window !== "undefined" && createPortal(
					<div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#454141e0] bg-opacity-60" onClick={() => setOpen(false)}>
						<div className="bg-white shadow-2xl p-0 w-full max-w-2xl mx-4 relative" onClick={e => e.stopPropagation()}>
							<button
								className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 text-2xl font-bold cursor-pointer"
								onClick={() => setOpen(false)}
								aria-label="Close"
							>
								&times;
							</button>
							<div className="p-8">
								<ContactForm />
							</div>
						</div>
					</div>,
					document.body
				)}
			</>
		);
}
