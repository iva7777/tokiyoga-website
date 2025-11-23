"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        alert("Благодарим ви! Вашето съобщение е изпратено успешно.")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section className="bg-primary text-primary-foreground py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-accent">Изпратете ни съобщение</h2>
                        <p className="text-primary-foreground/80 text-lg leading-relaxed">
                            Попълнете формата по-долу и ще се свържем с вас възможно най-скоро
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Име"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent h-14"
                                />
                            </div>
                            <div>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Имейл"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent h-14"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <Input
                                    type="tel"
                                    name="phone"
                                    placeholder="Телефон"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent h-14"
                                />
                            </div>
                            <div>
                                <Input
                                    type="text"
                                    name="subject"
                                    placeholder="Тема"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent h-14"
                                />
                            </div>
                        </div>

                        <div>
                            <Textarea
                                name="message"
                                placeholder="Съобщение"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent resize-none"
                            />
                        </div>

                        <div className="text-center">
                            <Button
                                type="submit"
                                className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-primary hover:cursor-pointer transition-all px-12 py-6 text-lg font-semibold rounded-full hover:scale-105"
                            >
                                Изпратете
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
