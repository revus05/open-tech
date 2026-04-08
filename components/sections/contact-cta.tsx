"use client"

import { useContactModal } from "@/components/contact-modal"

export function ContactCTA() {
  const { open: openModal } = useContactModal();
  return (
    <div className="bg-gray-50 border border-gray-200 p-6">
      <h3 className="text-base font-bold text-gray-900 mb-2">Оставьте заявку</h3>
      <p className="text-sm text-gray-500 mb-4 leading-relaxed">
        Нажмите кнопку ниже и заполните короткую форму — мы свяжемся с вами в рабочее время.
      </p>
      <button
        type="button"
        onClick={openModal}
        className="block w-full py-3 bg-brand hover:bg-brand-dark text-white font-semibold text-sm text-center transition-colors rounded-sm"
      >
        Перезвоните мне
      </button>
    </div>
  )
}
