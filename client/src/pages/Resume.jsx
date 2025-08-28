import pdfdoc from "../assets/Diana-Busch-Resume.pdf";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Download } from "lucide-react";
import Button from "../components/Button"; // Import the new Button component

const Resume = () => {
  // Function to calculate months between start date and present
  const calculateMonthsToPresent = (startDateStr) => {
    const currentDate = new Date();

    // Parse the start date - handle different formats
    let startDate;

    // Handle formats like "Aug. 2025", "May, 2022", "August 2025", etc.
    const cleanDateStr = startDateStr.replace(/[,\.]/g, "").trim();
    const parts = cleanDateStr.split(" ");

    if (parts.length >= 2) {
      const monthStr = parts[0];
      const year = parseInt(parts[1]);

      // Month mapping
      const monthMap = {
        jan: 0,
        january: 0,
        feb: 1,
        february: 1,
        mar: 2,
        march: 2,
        apr: 3,
        april: 3,
        may: 4,
        jun: 5,
        june: 5,
        jul: 6,
        july: 6,
        aug: 7,
        august: 7,
        sep: 8,
        september: 8,
        oct: 9,
        october: 9,
        nov: 10,
        november: 10,
        dec: 11,
        december: 11,
      };

      const month = monthMap[monthStr.toLowerCase()];
      if (month !== undefined) {
        startDate = new Date(year, month, 1);
      }
    }

    if (!startDate) {
      return 1; // Fallback if parsing fails
    }

    // Calculate difference in months
    const yearDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthDiff = currentDate.getMonth() - startDate.getMonth();
    const totalMonths = yearDiff * 12 + monthDiff;

    return Math.max(1, totalMonths); // At least 1 month
  };

  // Function to format the period string
  const formatPeriod = (periodStr) => {
    if (periodStr.includes("Present")) {
      // Extract the start date part
      const parts = periodStr.split(" - ");
      if (parts.length >= 2) {
        const startDate = parts[0];
        const months = calculateMonthsToPresent(startDate);
        const monthText = months === 1 ? "1 mo" : `${months} mos`;
        return `${startDate} - Present • ${monthText}`;
      }
    }
    return periodStr; // Return as-is if not a "Present" entry
  };

  const education = [
    {
      title: "Persevere Coding Bootcamp",
      subtitle: "Full Stack Web Developer Certification",
      period: "July 2024- July 2025",
      type: "certification",
    },
    {
      title: "Rio Salado Community College",
      subtitle: "Associate of Arts Degree",
      period: "Aug. 2023- May 2025",
      type: "degree",
    },
  ];

  const experience = [
    {
      title: "Software Developer",
      company: "Banyan Labs LLC",
      period: "Aug. 2025 - Present",
      location: "Prescott, AZ (Remote)",
      achievements: [
        "Focused on building responsive and accessible user experiences using modern JavaScript frameworks and established design systems.",
        "Engages in daily Agile/Scrum ceremonies, including standups and sprint planning, to maintain alignment and deliver iterative improvements.",
        "Works closely with cross-disciplinary teams to architect, develop, and launch full-stack applications, such as an AI-driven, voice-enabled assistant.",
        "Manages version control through Git and GitHub, performing peer code reviews and supporting efficient, collaborative development practices.",
        "Contributes in team discussions while adapting to shifting priorities, showing initiative and flexibility in tackling diverse responsibilities.",
        "Implemented payment gateway integration like Khalti for secure transactions",
        "Assists with deployment processes, resolves technical issues, and ensures the delivery of scalable, user-focused software solutions.",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "Persevere",
      period: "Dec. 2024 - April 2025 • 5 mos",
      location: "Goodyear, AZ",
      achievements: [
        "Designing and implementing the front end for various components such as the dashboard, user forms and data visualization tools.",
        "Implementing a scalable state management solution utilizing Redux to manage application state effectively.",
        "Developing REST APIs using Node.js and Express.js for seamless interaction with MongoDB database.",
        "Writing clean, maintainable, and efficient React components following best practices.",
        "Documenting codebase, APIs, and other technical aspects for future reference and collaboration among team members.",
      ],
    },
  ];

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 gradient-text relative"
      >
        Resume
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 gradient-bg rounded-full mt-2"
        />
      </motion.h2>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="gradient-bg p-2 rounded-lg">
            <GraduationCap size={20} />
          </div>
          <h3 className="text-2xl font-bold text-white">Education</h3>
        </div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.2 }}
              className="glass rounded-xl p-6 border-l-4 border-gradient-to-b from-red-400 to-cyan-400 hover:bg-white/10 transition-all duration-300 group"
              whileHover={{ x: 10 }}
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-xl font-semibold text-white group-hover:gradient-text transition-all">
                  {item.title}
                </h4>
                <span className="text-sm text-cyan-400 font-medium">
                  {item.period}
                </span>
              </div>
              <p className="text-gray-300 mb-2">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="gradient-bg p-2 rounded-lg">
            <Briefcase size={20} />
          </div>
          <h3 className="text-2xl font-bold text-white">Experience</h3>
        </div>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + index * 0.3 }}
              className="glass rounded-xl p-6 border-l-4 border-gradient-to-b from-red-400 to-cyan-400 hover:bg-white/10 transition-all duration-300 group"
              whileHover={{ x: 10 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white group-hover:gradient-text transition-all mb-1">
                    {job.title}
                  </h4>
                  <p className="text-cyan-400 font-medium mb-1">
                    {job.company}
                  </p>
                  <p className="text-sm text-gray-400 mb-2">{job.location}</p>
                </div>
                <span className="text-sm text-red-400 font-medium lg:text-right">
                  {formatPeriod(job.period)}
                </span>
              </div>

              <ul className="space-y-2">
                {job.achievements.map((achievement, achIndex) => (
                  <motion.li
                    key={achIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.3 + achIndex * 0.1 }}
                    className="text-gray-300 text-sm leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-cyan-400 mt-1 text-xs">▸</span>
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Download Button - Using the new Button component */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="text-center"
      >
        <Button
          href={pdfdoc}
          download
          icon={Download}
          size="medium"
          variant="primary"
        >
          Download Resume
        </Button>
      </motion.div>
    </div>
  );
};

export default Resume;
