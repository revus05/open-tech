"use client";

import { X } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { createContext, useContext, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/* ─── Context ─────────────────────────────────────────────────── */

type ContactModalCtx = {
  open: () => void;
};

const ContactModalContext = createContext<ContactModalCtx>({ open: () => {} });

export function useContactModal() {
  return useContext(ContactModalContext);
}

/* ─── Provider + Modal ────────────────────────────────────────── */

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });

      if (res.ok) {
        toast.success("Заявка принята. Мы перезвоним вам в ближайшее время!");
        setName("");
        setPhone("");
        setMessage("");
        setIsOpen(false);
      } else {
        toast.error("Ошибка отправки. Позвоните нам напрямую.");
      }
    } catch {
      toast.error("Ошибка сети. Позвоните нам напрямую.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactModalContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}

      <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
        <DialogPortal>
          <DialogOverlay />
          <DialogPrimitive.Content className="fixed top-1/2 left-1/2 z-50 w-full max-w-[calc(100%-2rem)] sm:max-w-md -translate-x-1/2 -translate-y-1/2 outline-none duration-100 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95">
            {/* Form panel — reuses ContactFormInline design */}
            <div className="bg-gray-50 border border-gray-200 p-6 relative rounded-lg shadow-2xl">
              {/* Close button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
                aria-label="Закрыть"
              >
                <X size={18} />
              </button>

              <DialogHeader className="flex flex-row items-center gap-3 mb-6">
                <div className="h-px w-8 bg-brand" />
                <DialogTitle className="text-xl font-black text-gray-900">
                  Оставить заявку
                </DialogTitle>
              </DialogHeader>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Заполните форму — мы свяжемся с вами в рабочее время (Пн–Пт:
                9:00–18:00).
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label
                    htmlFor="modal-name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Ваше имя <span className="text-brand">*</span>
                  </label>
                  <Input
                    id="modal-name"
                    placeholder="Иван Иванов"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="modal-phone"
                    className="text-sm font-medium text-gray-700"
                  >
                    Телефон <span className="text-brand">*</span>
                  </label>
                  <Input
                    id="modal-phone"
                    type="tel"
                    placeholder="+375 (XX) XXX-XX-XX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="modal-message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Сообщение{" "}
                    <span className="text-gray-400 font-normal">
                      (необязательно)
                    </span>
                  </label>
                  <Textarea
                    id="modal-message"
                    placeholder="Опишите вашу задачу..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={loading}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand hover:bg-brand-dark text-white font-semibold rounded-sm"
                >
                  {loading ? "Отправка..." : "Отправить заявку"}
                </Button>
              </form>
            </div>
          </DialogPrimitive.Content>
        </DialogPortal>
      </DialogPrimitive.Root>
    </ContactModalContext.Provider>
  );
}
