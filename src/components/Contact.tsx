"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Send, 
  Mail, 
  MessageSquare, 
  Loader2,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    
    try {
      // Имитация отправки формы (замените на реальный endpoint)
      const response = await fetch("https://formsubmit.co/ajax/hello@goretov.dev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.get("name"),
          telegram: formData.get("telegram"),
          whatsapp: formData.get("whatsapp"),
          email: formData.get("email"),
          budget: formData.get("budget"),
          message: formData.get("message"),
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Свяжитесь со мной
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Расскажите о вашем проекте, и я помогу подобрать оптимальное решение
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Отправить сообщение
                </CardTitle>
                <CardDescription>
                  Заполните форму, и я отвечу в течение 24 часов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      placeholder="Ваше имя"
                    />
                  </div>
                  
                  {/* Contact options */}
                  <div className="space-y-3">
                    <label className="block text-sm font-medium">
                      Как с вами связаться?
                    </label>
                    <div className="grid gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground w-20">Telegram</span>
                        <input
                          type="text"
                          id="telegram"
                          name="telegram"
                          className="flex-1 px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                          placeholder="@username"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground w-20">WhatsApp</span>
                        <input
                          type="tel"
                          id="whatsapp"
                          name="whatsapp"
                          className="flex-1 px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                          placeholder="+7 999 123-45-67"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground w-20">Email</span>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="flex-1 px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">Укажите хотя бы один способ связи</p>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-1.5">
                      Бюджет проекта
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    >
                      <option value="">Выберите бюджет</option>
                      <option value="3000-5000">3 000 — 5 000 ₽</option>
                      <option value="5000-10000">5 000 — 10 000 ₽</option>
                      <option value="10000-20000">10 000 — 20 000 ₽</option>
                      <option value="20000-50000">20 000 — 50 000 ₽</option>
                      <option value="50000+">от 50 000 ₽</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                      Описание проекта
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                      placeholder="Опишите вашу задачу..."
                    />
                  </div>

                  {/* Submit button */}
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Отправить
                      </>
                    )}
                  </Button>

                  {/* Status messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 px-4 py-3 rounded-lg"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      Сообщение успешно отправлено!
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-destructive bg-destructive/10 px-4 py-3 rounded-lg"
                    >
                      <AlertCircle className="w-5 h-5" />
                      Ошибка отправки. Попробуйте позже.
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Telegram card */}
            <Card className="border-primary/50 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary text-primary-foreground">
                    <Send className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">Telegram</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Самый быстрый способ связаться — напишите мне в Telegram
                    </p>
                    <Button asChild>
                      <Link 
                        href="https://t.me/goretov" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Написать в Telegram
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent text-accent-foreground">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Для официальных запросов и документов
                    </p>
                    <Link 
                      href="mailto:hello@goretov.dev"
                      className="text-primary hover:underline font-medium"
                    >
                      hello@goretov.dev
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response time */}
            <div className="bg-background rounded-xl p-6 border">
              <h4 className="font-semibold mb-4">Время ответа</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Telegram</span>
                  <span className="font-medium text-green-600">До 1 часа</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-medium">До 24 часов</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Форма на сайте</span>
                  <span className="font-medium">До 24 часов</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
