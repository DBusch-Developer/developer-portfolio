import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Button from "../components/Button";
import Input from "../components/Input";

const Contact = () => {
  const form = useRef();
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCEESS!");
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setIsSubmitting(false);
        }
      );
  };

  const getButtonState = () => {
    if (isSubmitted) return "success";
    if (isSubmitting) return "loading";
    return "normal";
  };

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 gradient-text relative"
      >
        Contact
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 gradient-bg rounded-full mt-2"
        />
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 text-lg leading-relaxed mb-8"
        >
          Have a project in mind or want to collaborate? I'd love to hear from
          you! Send me a message and let's create something amazing together.{" "}
        </motion.p>

        <form onSubmit={sendEmail} ref={form} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Name"
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              initialDelay={0.5}
            />

            <Input
              label="Email"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              initialDelay={0.6}
            />
          </div>

          <Input
            label="Subject"
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project discussion"
            required
            initialDelay={0.7}
          />

          <Input
            label="Message"
            id="message"
            name="message"
            type="textarea"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            rows={6}
            required
            initialDelay={0.8}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              type="submit"
              state={getButtonState()}
              icon={Send}
              successIcon={CheckCircle}
              loadingText="Sending..."
              successText="Message Sent!"
              disabled={isSubmitting || isSubmitted}
            >
              Send Message
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;