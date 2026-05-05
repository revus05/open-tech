"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { createContext, type ReactNode, useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

/* ─── Validation schema ───────────────────────────────────────── */

const CATEGORY_OPTIONS = [
  "Создание, внедрение, интеграция",
  "Сервис и аутсорсинг",
] as const;

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Введите ваше имя (минимум 2 символа)")
    .refine((val) => !/\d/.test(val), {
      message: "Имя не должно содержать цифры",
    }),
  phone: z.string().refine((val) => {
    const cleaned = val.replace(/[\s\-()]/g, "");
    return /^(\+375|80)(17|25|29|33|44)\d{7}$/.test(cleaned);
  }, "Введите корректный номер (+375 XX XXX-XX-XX)"),
  category: z.string().min(1, "Выберите категорию услуг"),
  message: z.string().optional(),
});

type ContactFields = z.infer<typeof contactSchema>;

/* ─── Context ─────────────────────────────────────────────────── */

type ContactModalCtx = { open: () => void };

const ContactModalContext = createContext<ContactModalCtx>({ open: () => {} });

export function useContactModal() {
  return useContext(ContactModalContext);
}

/* ─── Provider + Modal ────────────────────────────────────────── */

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFields>({
    resolver: zodResolver(contactSchema),
    defaultValues: { category: "" },
  });

  const onSubmit = async (data: ContactFields) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Заявка принята. Мы перезвоним вам в ближайшее время!");
        reset();
        setIsOpen(false);
      } else {
        toast.error("Ошибка отправки. Позвоните нам напрямую.");
      }
    } catch {
      toast.error("Ошибка сети. Позвоните нам напрямую.");
    }
  };

  return (
    <ContactModalContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}

      <DialogPrimitive.Root
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) reset();
          setIsOpen(open);
        }}
      >
        <DialogPortal>
          <DialogOverlay />
          <DialogPrimitive.Content className="fixed top-1/2 left-1/2 z-50 w-full max-w-[calc(100%-2rem)] sm:max-w-md -translate-x-1/2 -translate-y-1/2 outline-none duration-100 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95">
            <div className="bg-gray-50 border border-gray-200 p-6 relative rounded-lg shadow-2xl">
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

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                    aria-invalid={!!errors.name}
                    className={
                      errors.name
                        ? "border-red-400 focus-visible:ring-red-300"
                        : ""
                    }
                    disabled={isSubmitting}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
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
                    aria-invalid={!!errors.phone}
                    className={
                      errors.phone
                        ? "border-red-400 focus-visible:ring-red-300"
                        : ""
                    }
                    disabled={isSubmitting}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Категория услуг <span className="text-brand">*</span>
                  </label>
                  <Controller
                    control={control}
                    name="category"
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger
                          className={`w-full bg-white text-gray-900 border-gray-400 rounded-none ${
                            errors.category
                              ? "border-red-400 focus-visible:ring-red-300"
                              : ""
                          }`}
                          aria-invalid={!!errors.category}
                        >
                          <SelectValue placeholder="Выберите категорию" />
                        </SelectTrigger>
                        <SelectContent
                          position="popper"
                          className="bg-white text-gray-900 border-gray-200"
                        >
                          {CATEGORY_OPTIONS.map((opt) => (
                            <SelectItem
                              key={opt}
                              value={opt}
                              className="focus:bg-gray-100 focus:text-gray-900"
                            >
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.category && (
                    <p className="text-xs text-red-500">
                      {errors.category.message}
                    </p>
                  )}
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
                    disabled={isSubmitting}
                    {...register("message")}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand hover:bg-brand-dark text-white font-semibold rounded-sm"
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </Button>
              </form>
            </div>
          </DialogPrimitive.Content>
        </DialogPortal>
      </DialogPrimitive.Root>
    </ContactModalContext.Provider>
  );
}
