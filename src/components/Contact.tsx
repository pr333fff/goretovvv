"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Send, 
  Mail, 
  MessageCircle,
  Phone,
  CheckCircle2,
  User,
  Wallet
} from "lucide-react";
import Link from "next/link";
import Stepper, { Step } from "./Stepper";

type ContactMethod = 'telegram' | 'whatsapp' | 'email';

export function Contact() {
  const [name, setName] = useState('');
  const [contactMethod, setContactMethod] = useState<ContactMethod>('telegram');
  const [contactValue, setContactValue] = useState('');
  const [budget, setBudget] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const handleFinalStep = async () => {
    // Здесь можно добавить отправку данных на сервер
    console.log({
      name,
      contactMethod,
      contactValue,
      budget
    });
    setIsCompleted(true);
  };

  const getContactPlaceholder = () => {
    switch (contactMethod) {
      case 'telegram': return '@username или номер';
      case 'whatsapp': return '+7 999 123-45-67';
      case 'email': return 'your@email.com';
    }
  };

  const getContactInputType = () => {
    switch (contactMethod) {
      case 'email': return 'email';
      case 'whatsapp': return 'tel';
      default: return 'text';
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
          {/* Stepper form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {isCompleted ? (
              <div className="stepper-outer-container">
                <div className="stepper-circle-container">
                  <div className="stepper-success">
                    <div className="stepper-success-icon">
                      <CheckCircle2 />
                    </div>
                    <h2>Заявка отправлена!</h2>
                    <p>Я свяжусь с вами в ближайшее время</p>
                  </div>
                </div>
              </div>
            ) : (
              <Stepper
                initialStep={1}
                onFinalStepCompleted={handleFinalStep}
                backButtonText="Назад"
                nextButtonText="Далее"
              >
                {/* Step 1: Name */}
                <Step>
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-5 h-5 text-primary" />
                    <h2>Как вас зовут?</h2>
                  </div>
                  <p>Введите ваше имя для обращения</p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                  />
                </Step>

                {/* Step 2: Contact method */}
                <Step>
                  <div className="flex items-center gap-2 mb-4">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <h2>Как с вами связаться?</h2>
                  </div>
                  <p>Выберите удобный способ связи</p>
                  
                  <div className="contact-type-selector">
                    <button
                      type="button"
                      className={`contact-type-btn ${contactMethod === 'telegram' ? 'active' : ''}`}
                      onClick={() => setContactMethod('telegram')}
                    >
                      <Send />
                      Telegram
                    </button>
                    <button
                      type="button"
                      className={`contact-type-btn ${contactMethod === 'whatsapp' ? 'active' : ''}`}
                      onClick={() => setContactMethod('whatsapp')}
                    >
                      <Phone />
                      WhatsApp
                    </button>
                    <button
                      type="button"
                      className={`contact-type-btn ${contactMethod === 'email' ? 'active' : ''}`}
                      onClick={() => setContactMethod('email')}
                    >
                      <Mail />
                      Email
                    </button>
                  </div>
                  
                  <input
                    type={getContactInputType()}
                    value={contactValue}
                    onChange={(e) => setContactValue(e.target.value)}
                    placeholder={getContactPlaceholder()}
                  />
                </Step>

                {/* Step 3: Budget */}
                <Step>
                  <div className="flex items-center gap-2 mb-4">
                    <Wallet className="w-5 h-5 text-primary" />
                    <h2>Ваш бюджет?</h2>
                  </div>
                  <p>Выберите примерный бюджет проекта</p>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  >
                    <option value="">Выберите бюджет</option>
                    <option value="3000-5000">3 000 — 5 000 ₽</option>
                    <option value="5000-10000">5 000 — 10 000 ₽</option>
                    <option value="10000-20000">10 000 — 20 000 ₽</option>
                    <option value="20000-50000">20 000 — 50 000 ₽</option>
                    <option value="50000+">от 50 000 ₽</option>
                  </select>
                </Step>
              </Stepper>
            )}
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

            {/* Info cards */}
            <div className="grid gap-4">
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-muted">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">hello@goretov.dev</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-muted">
                    <MessageCircle className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Отвечаю</p>
                    <p className="font-medium">В течение 2-3 часов</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Working hours */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">График работы</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Пн — Пт</span>
                    <span>10:00 — 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Сб — Вс</span>
                    <span>По договорённости</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
