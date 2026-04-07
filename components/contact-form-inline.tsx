"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactFormInline() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      })

      if (res.ok) {
        toast.success("Заявка принята. Мы перезвоним вам в ближайшее время!")
        setName("")
        setPhone("")
        setMessage("")
      } else {
        toast.error("Ошибка отправки. Позвоните нам напрямую.")
      }
    } catch {
      toast.error("Ошибка сети. Позвоните нам напрямую.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gray-50 border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px w-8 bg-brand" />
        <h2 className="text-xl font-black text-gray-900">Оставить заявку</h2>
      </div>
      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
        Заполните форму — мы свяжемся с вами в рабочее время (Пн–Пт: 9:00–18:00).
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Ваше имя <span className="text-brand">*</span>
          </label>
          <Input
            id="name"
            placeholder="Иван Иванов"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Телефон <span className="text-brand">*</span>
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="+375 (XX) XXX-XX-XX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            Сообщение{" "}
            <span className="text-gray-400 font-normal">(необязательно)</span>
          </label>
          <Textarea
            id="message"
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
  )
}
