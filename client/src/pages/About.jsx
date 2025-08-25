import { motion } from "framer-motion";
import { Smartphone, Globe, Palette, Settings } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Professional development of applications for Android.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "High-quality development of sites at the professional level.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "The most modern and high-quality design made at a professional level.",
    },
    {
      icon: Settings,
      title: "Backend Development",
      description:
        "High-performance backend services designed for scalability and seamless user experience.",
    },
  ];

  const skills = [
    {
      name: "HTML5",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="32px"
          height="32px"
          className="mx-auto block"
        >
          <linearGradient
            id="slr0fspJZ8Sloslbv8ri_a"
            x1="32.092"
            x2="32.092"
            y1="7.766"
            y2="57.066"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#slr0fspJZ8Sloslbv8ri_a)"
            d="M53.316,8.324C53.127,8.118,52.859,8,52.579,8H13.605c-0.84,0-1.646,0.355-2.213,0.975 s-0.85,1.453-0.775,2.289l3.318,37.613c0.109,1.229,0.979,2.281,2.165,2.62l15.075,4.308c0.27,0.076,0.547,0.115,0.824,0.115 s0.555-0.039,0.824-0.115l15.075-4.308c1.186-0.339,2.056-1.392,2.165-2.621l3.511-39.788C53.6,8.809,53.506,8.531,53.316,8.324z M48.072,48.699c-0.037,0.417-0.32,0.76-0.722,0.874l-15.075,4.308c-0.18,0.053-0.371,0.053-0.551,0l-15.075-4.308 c-0.401-0.114-0.685-0.457-0.722-0.873l-3.318-37.612c-0.025-0.283,0.066-0.554,0.259-0.763C13.06,10.115,13.321,10,13.605,10 h37.882L48.072,48.699z"
          />
          <linearGradient
            id="slr0fspJZ8Sloslbv8ri_b"
            x1="32.001"
            x2="32.001"
            y1="7.766"
            y2="57.066"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#slr0fspJZ8Sloslbv8ri_b)"
            d="M18.521,48.028l13.205,3.773c0.09,0.025,0.182,0.038,0.274,0.038s0.185-0.013,0.274-0.038 l13.205-3.773c0.398-0.114,0.686-0.462,0.722-0.874l3.006-34.066c0.024-0.279-0.069-0.557-0.259-0.764 C48.759,12.118,48.491,12,48.211,12H15.79c-0.28,0-0.548,0.118-0.737,0.324c-0.189,0.207-0.283,0.484-0.259,0.764l3.005,34.066 C17.835,47.566,18.122,47.914,18.521,48.028z M47.119,14l-2.85,32.294L32,49.8l-12.27-3.506L16.882,14H47.119z"
          />
          <g>
            <linearGradient
              id="slr0fspJZ8Sloslbv8ri_c"
              x1="31.995"
              x2="31.995"
              y1="19.575"
              y2="40.626"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#6dc7ff" />
              <stop offset="1" stop-color="#e6abff" />
            </linearGradient>
            <path
              fill="url(#slr0fspJZ8Sloslbv8ri_c)"
              d="M41.661,23.541l0.245-3C41.93,20.249,41.7,20,41.408,20H22.583 c-0.289,0-0.517,0.244-0.499,0.532l0.698,11C22.798,31.795,23.017,32,23.281,32h12.916c0.289,0,0.518,0.245,0.499,0.533 l-0.269,4.061c-0.013,0.201-0.146,0.375-0.337,0.44l-3.982,1.36c-0.105,0.036-0.218,0.036-0.323,0L27.8,37.033 c-0.19-0.065-0.322-0.236-0.337-0.436l-0.159-2.134C27.285,34.202,27.067,34,26.805,34h-3.349c-0.29,0-0.519,0.246-0.499,0.535 l0.374,5.319c0.014,0.203,0.15,0.376,0.342,0.44l8.115,2.671c0.102,0.033,0.211,0.033,0.313,0l8.113-2.67 c0.194-0.064,0.33-0.24,0.343-0.444l0.707-11.32C41.282,28.243,41.054,28,40.765,28H27.404c-0.26,0-0.477-0.2-0.498-0.459l-0.245-3 C26.638,24.249,26.867,24,27.16,24h14.003C41.423,24,41.64,23.8,41.661,23.541z"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "CSS3",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="32px"
          height="32px"
          className="mx-auto block"
          baseProfile="basic"
        >
          <linearGradient
            id="WLIJulVjW6wsxbwoEFfWIa"
            x1="31.94"
            x2="31.94"
            y1="8.534"
            y2="56.18"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#6dc7ff" />
            <stop offset=".492" stop-color="#aab9ff" />
            <stop offset="1" stop-color="#e6abff" />
          </linearGradient>
          <polygon
            fill="url(#WLIJulVjW6wsxbwoEFfWIa)"
            points="49.42,11.71 46.2,48.53 31.9,52.45 17.78,48.44 14.46,11.71"
          />
          <polygon
            fill="#fff"
            points="19.153,17.377 44.404,17.377 42.176,42.734 31.885,46.129 21.699,43.158 21.063,35.838 25.837,35.838 26.474,39.657 31.991,41.142 37.614,39.445 38.038,32.867 20.851,32.973 20.426,27.774 38.569,27.774 38.887,22.363 19.684,22.257"
          />
          <linearGradient
            id="WLIJulVjW6wsxbwoEFfWIb"
            x1="31.939"
            x2="31.939"
            y1="3.214"
            y2="58.258"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#WLIJulVjW6wsxbwoEFfWIb)"
            d="M52.777,8.635 c-0.161-0.178-0.39-0.28-0.628-0.28H11.722c-0.238,0-0.458,0.102-0.62,0.28s-0.246,0.416-0.221,0.645l3.709,41.165 c0.034,0.357,0.28,0.645,0.62,0.747l16.441,4.668c0.076,0.017,0.153,0.025,0.238,0.025c0.068,0,0.144-0.008,0.221-0.025 l16.653-4.566c0.348-0.093,0.594-0.39,0.628-0.738L52.998,9.28C53.015,9.042,52.938,8.813,52.777,8.635z M31.04,53.916 l-14.811-4.201l-3.573-39.663H31.04v6.476H19.149c-0.238,0-0.467,0.102-0.628,0.28c-0.161,0.178-0.238,0.407-0.221,0.645 l0.475,4.982c0.042,0.441,0.407,0.772,0.849,0.772H31.04v3.718H20.134c-0.238,0-0.467,0.102-0.628,0.28 c-0.161,0.178-0.238,0.407-0.221,0.645l0.484,5.093c0.042,0.441,0.407,0.772,0.849,0.772H31.04v6.213l-3.887-1.137l-0.365-3.37 c-0.042-0.433-0.407-0.755-0.84-0.755h-5.076c-0.238,0-0.467,0.102-0.628,0.28c-0.161,0.178-0.238,0.407-0.221,0.645l0.721,7.639 c0.034,0.348,0.28,0.645,0.62,0.738l9.676,2.767V53.916z M32.738,33.716h4.481l-0.407,4.965l-4.074,1.188V33.716z M32.016,41.847 l0.721-0.212l5.11-1.485c0.339-0.102,0.577-0.399,0.611-0.747l0.526-6.468c0.017-0.238-0.068-0.467-0.221-0.645 c-0.161-0.17-0.39-0.272-0.628-0.272h-5.398H31.04h-9.65l-0.323-3.395h9.973h1.698h5.814c0.441,0,0.806-0.34,0.849-0.781 l0.441-5.415c0.017-0.238-0.068-0.467-0.221-0.645c-0.161-0.17-0.39-0.272-0.628-0.272h-6.255H31.04H20.397l-0.314-3.285H31.04 h1.698h10.941L41.387,42.5l-8.649,2.521l-0.747,0.221L31.04,44.97l-8.657-2.47l-0.577-6.137h3.378l0.348,3.174 c0.034,0.34,0.272,0.628,0.603,0.721l4.906,1.443l0.501,0.144C31.694,41.889,31.863,41.889,32.016,41.847z M32.738,23.208h5.339 l-0.306,3.718h-5.033V23.208z M47.744,49.817l-15.006,4.108v-7.13l9.676-2.826c0.331-0.093,0.577-0.39,0.611-0.738l2.436-25.777 c0.017-0.238-0.059-0.467-0.221-0.645c-0.161-0.178-0.39-0.28-0.628-0.28H32.738v-6.476h18.486L47.744,49.817z"
          />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="32px"
          height="32px"
          className="mx-auto block"
        >
          <linearGradient
            id="slr0fspJZ8Sloslbv8ri_a"
            x1="32.092"
            x2="32.092"
            y1="7.766"
            y2="57.066"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#slr0fspJZ8Sloslbv8ri_a)"
            d="M53.316,8.324C53.127,8.118,52.859,8,52.579,8H13.605c-0.84,0-1.646,0.355-2.213,0.975 s-0.85,1.453-0.775,2.289l3.318,37.613c0.109,1.229,0.979,2.281,2.165,2.62l15.075,4.308c0.27,0.076,0.547,0.115,0.824,0.115 s0.555-0.039,0.824-0.115l15.075-4.308c1.186-0.339,2.056-1.392,2.165-2.621l3.511-39.788C53.6,8.809,53.506,8.531,53.316,8.324z M48.072,48.699c-0.037,0.417-0.32,0.76-0.722,0.874l-15.075,4.308c-0.18,0.053-0.371,0.053-0.551,0l-15.075-4.308 c-0.401-0.114-0.685-0.457-0.722-0.873l-3.318-37.612c-0.025-0.283,0.066-0.554,0.259-0.763C13.06,10.115,13.321,10,13.605,10 h37.882L48.072,48.699z"
          />
          <linearGradient
            id="slr0fspJZ8Sloslbv8ri_b"
            x1="32.001"
            x2="32.001"
            y1="7.766"
            y2="57.066"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#slr0fspJZ8Sloslbv8ri_b)"
            d="M18.521,48.028l13.205,3.773c0.09,0.025,0.182,0.038,0.274,0.038s0.185-0.013,0.274-0.038 l13.205-3.773c0.398-0.114,0.686-0.462,0.722-0.874l3.006-34.066c0.024-0.279-0.069-0.557-0.259-0.764 C48.759,12.118,48.491,12,48.211,12H15.79c-0.28,0-0.548,0.118-0.737,0.324c-0.189,0.207-0.283,0.484-0.259,0.764l3.005,34.066 C17.835,47.566,18.122,47.914,18.521,48.028z M47.119,14l-2.85,32.294L32,49.8l-12.27-3.506L16.882,14H47.119z"
          />
          <g>
            <linearGradient
              id="slr0fspJZ8Sloslbv8ri_c"
              x1="31.995"
              x2="31.995"
              y1="19.575"
              y2="40.626"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#6dc7ff" />
              <stop offset="1" stop-color="#e6abff" />
            </linearGradient>
            <path
              fill="url(#slr0fspJZ8Sloslbv8ri_c)"
              d="M41.661,23.541l0.245-3C41.93,20.249,41.7,20,41.408,20H22.583 c-0.289,0-0.517,0.244-0.499,0.532l0.698,11C22.798,31.795,23.017,32,23.281,32h12.916c0.289,0,0.518,0.245,0.499,0.533 l-0.269,4.061c-0.013,0.201-0.146,0.375-0.337,0.44l-3.982,1.36c-0.105,0.036-0.218,0.036-0.323,0L27.8,37.033 c-0.19-0.065-0.322-0.236-0.337-0.436l-0.159-2.134C27.285,34.202,27.067,34,26.805,34h-3.349c-0.29,0-0.519,0.246-0.499,0.535 l0.374,5.319c0.014,0.203,0.15,0.376,0.342,0.44l8.115,2.671c0.102,0.033,0.211,0.033,0.313,0l8.113-2.67 c0.194-0.064,0.33-0.24,0.343-0.444l0.707-11.32C41.282,28.243,41.054,28,40.765,28H27.404c-0.26,0-0.477-0.2-0.498-0.459l-0.245-3 C26.638,24.249,26.867,24,27.16,24h14.003C41.423,24,41.64,23.8,41.661,23.541z"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <img
          width="32px"
          height="32px"
          className="mx-auto block"
          src="data:image/png;base64,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"
          alt="mongo-db"
        ></img>
      ),
    },
    {
      name: "Express",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="32px"
          height="32px"
          className="mx-auto block"
          baseProfile="basic"
        >
          <linearGradient
            id="Ptgyoqd6DQJu9ZUJIh3sLa"
            x1="30.982"
            x2="30.982"
            y1="21.203"
            y2="43.514"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#6dc7ff" />
            <stop offset="1" stop-color="#e6abff" />
          </linearGradient>
          <path
            fill="url(#Ptgyoqd6DQJu9ZUJIh3sLa)"
            d="M45.758,32.346L56.964,47h-0.85c-1.051,0-2.041-0.49-2.68-1.324L44.5,33.992l-8.935,11.684	C34.927,46.51,33.937,47,32.886,47h-0.85l11.206-14.654L32.271,18h0.85c1.051,0,2.041,0.49,2.68,1.324l8.7,11.377l8.7-11.377	C53.838,18.49,54.829,18,55.879,18h0.85L45.758,32.346z M28.527,40h0.638c0,0,0,0,0,0c-2.348,6.085-9.292,9.631-15.896,7.256	C8.215,45.437,5,40.444,5,35.073L5,29.5c0-7.29,6.273-13.143,13.705-12.443C25.182,17.667,30,23.361,30,29.866L30,34H19v0H7l0,1.109	c0,4.501,2.671,8.705,6.9,10.248c4.807,1.754,9.835-0.235,12.389-4.116C26.789,40.481,27.616,40,28.527,40z M7,32h21v-2.5	C28,23.71,23.29,19,17.5,19S7,23.71,7,29.5V32z"
          />
          <linearGradient
            id="Ptgyoqd6DQJu9ZUJIh3sLb"
            x1="44.5"
            x2="44.5"
            y1="16"
            y2="49"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#Ptgyoqd6DQJu9ZUJIh3sLb)"
            d="M56.729,18L45.758,32.347L56.964,47h-0.85	c-1.051,0-2.041-0.49-2.68-1.324L44.5,33.992l-8.935,11.684C34.927,46.51,33.937,47,32.886,47h-0.85l11.206-14.653L32.271,18h0.85	c1.051,0,2.041,0.49,2.68,1.324l8.7,11.377l8.7-11.377C53.838,18.49,54.829,18,55.879,18H56.729 M60.776,16h-4.047h-0.85	c-1.663,0-3.258,0.788-4.268,2.109L44.5,27.408l-7.111-9.299C36.379,16.788,34.783,16,33.121,16h-0.85h-4.047l2.458,3.215	l10.042,13.132L30.447,45.785L27.989,49h4.047h0.85c1.663,0,3.258-0.789,4.268-2.109l7.346-9.606l7.346,9.606	C52.856,48.211,54.451,49,56.114,49h0.85h4.047l-2.458-3.215L48.276,32.346l10.042-13.132L60.776,16L60.776,16z"
          />
          <linearGradient
            id="Ptgyoqd6DQJu9ZUJIh3sLc"
            x1="17.54"
            x2="17.54"
            y1="15"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#Ptgyoqd6DQJu9ZUJIh3sLc)"
            d="M17.5,17c0.397,0,0.8,0.019,1.205,0.057	C25.182,17.667,30,23.361,30,29.866V34H19v0H7v1.109c0,4.501,2.671,8.705,6.9,10.248C15.1,45.796,16.314,46,17.5,46	c3.563,0,6.872-1.847,8.789-4.758C26.789,40.481,27.616,40,28.527,40h0.638c0,0,0,0,0,0c-1.847,4.785-6.535,8-11.665,8	c-1.394,0-2.82-0.237-4.231-0.745C8.215,45.437,5,40.444,5,35.073V29.5C5,22.607,10.607,17,17.5,17 M7,32h21v-2.5	C28,23.71,23.29,19,17.5,19S7,23.71,7,29.5V32 M17.5,15L17.5,15c-3.868,0-7.508,1.509-10.249,4.251C4.51,21.992,3,25.632,3,29.5	v5.573c0,6.348,3.855,12,9.592,14.065C14.184,49.71,15.835,50,17.5,50c5.951,0,11.389-3.729,13.531-9.28l1.05-2.72l-2.915,0	l-0.638,0c-1.565,0-3.026,0.801-3.91,2.142C23.052,42.522,20.324,44,17.5,44c-0.986,0-1.967-0.175-2.915-0.521	C11.509,42.356,9.362,39.416,9.042,36H19l11,0l2,0v-2v-4.134c0-7.607-5.758-14.109-13.108-14.8C18.43,15.022,17.962,15,17.5,15	L17.5,15z M9,30v-0.5c0-4.687,3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5V30H9L9,30z"
          />
        </svg>
      ),
    },
    {
      name: "React",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="32px"
          height="32px"
          className="mx-auto block"
        >
          <linearGradient
            id="9GkdZLxQa1XTDblOFwLcpa"
            x1="32"
            x2="32"
            y1="25.213"
            y2="36.722"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#6dc7ff" />
            <stop offset="1" stop-color="#e6abff" />
          </linearGradient>
          <circle cx="32" cy="32" r="6" fill="url(#9GkdZLxQa1XTDblOFwLcpa)" />
          <linearGradient
            id="9GkdZLxQa1XTDblOFwLcpb"
            x1="32"
            x2="32"
            y1="7.426"
            y2="53.44"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#9GkdZLxQa1XTDblOFwLcpb)"
            d="M58,32c0-3.758-4.243-7.017-10.853-8.992c0.221-1.031,0.407-2.045,0.524-3.015	c0.657-5.483-0.483-9.323-3.211-10.813c-2.729-1.489-6.574-0.372-10.831,3.146c-0.544,0.449-1.087,0.938-1.629,1.45	c-0.542-0.513-1.085-1.001-1.629-1.45C26.114,8.808,22.267,7.692,19.54,9.18c-2.728,1.489-3.868,5.329-3.211,10.813	c0.116,0.971,0.303,1.984,0.524,3.015C10.243,24.983,6,28.242,6,32s4.243,7.017,10.853,8.992c-0.221,1.031-0.407,2.045-0.524,3.015	c-0.657,5.483,0.483,9.323,3.211,10.813c0.789,0.431,1.67,0.643,2.628,0.643c2.357,0,5.177-1.287,8.203-3.788	c0.544-0.449,1.087-0.938,1.629-1.45c0.542,0.513,1.085,1.001,1.629,1.45c3.026,2.501,5.846,3.788,8.203,3.788	c0.958,0,1.84-0.213,2.628-0.643c2.728-1.489,3.868-5.329,3.211-10.813c-0.116-0.971-0.303-1.984-0.524-3.015	C53.757,39.017,58,35.758,58,32z M34.902,13.866c3.53-2.917,6.665-3.987,8.599-2.931c1.934,1.055,2.729,4.27,2.184,8.818	c-0.105,0.879-0.273,1.796-0.469,2.729c-2.117-0.519-4.43-0.915-6.892-1.166c-1.564-2.275-3.215-4.351-4.908-6.132	C33.91,14.718,34.406,14.276,34.902,13.866z M39.899,36.313c-0.853,1.562-1.76,3.055-2.702,4.474C35.546,40.925,33.811,41,32,41	s-3.546-0.075-5.198-0.213c-0.941-1.42-1.849-2.912-2.702-4.474c-0.784-1.435-1.499-2.878-2.142-4.313	c0.643-1.434,1.358-2.877,2.142-4.313c0.853-1.562,1.76-3.055,2.702-4.474C28.454,23.075,30.189,23,32,23s3.546,0.075,5.198,0.213	c0.941,1.42,1.849,2.912,2.702,4.474c0.784,1.435,1.499,2.878,2.142,4.313C41.399,33.434,40.683,34.877,39.899,36.313z M43.078,34.487c0.68,1.739,1.238,3.444,1.676,5.096c-1.544,0.376-3.21,0.694-5.009,0.929c0.657-1.05,1.3-2.124,1.909-3.241	C42.161,36.346,42.629,35.416,43.078,34.487z M32,47.403c-1.272-1.341-2.522-2.863-3.729-4.513C29.487,42.961,30.73,43,32,43	s2.513-0.039,3.729-0.11C34.522,44.54,33.272,46.062,32,47.403z M24.254,40.512c-1.799-0.235-3.465-0.553-5.009-0.929	c0.438-1.652,0.996-3.358,1.676-5.096c0.45,0.93,0.918,1.859,1.423,2.785C22.954,38.388,23.597,39.462,24.254,40.512z M20.922,29.513c-0.68-1.739-1.238-3.445-1.676-5.096c1.544-0.376,3.21-0.694,5.009-0.929c-0.657,1.05-1.3,2.124-1.909,3.241	C21.839,27.654,21.371,28.584,20.922,29.513z M32,16.597c1.272,1.341,2.522,2.863,3.729,4.513C34.513,21.039,33.27,21,32,21	s-2.513,0.039-3.729,0.11C29.478,19.46,30.728,17.938,32,16.597z M41.655,26.729c-0.609-1.116-1.252-2.19-1.909-3.241	c1.799,0.235,3.465,0.553,5.009,0.929c-0.438,1.652-0.996,3.358-1.676,5.096C42.629,28.584,42.161,27.654,41.655,26.729z M18.315,19.754c-0.546-4.549,0.25-7.764,2.184-8.818c0.488-0.267,1.053-0.397,1.681-0.397c1.86,0,4.278,1.147,6.918,3.328	c0.496,0.41,0.993,0.852,1.488,1.319c-1.693,1.781-3.345,3.856-4.908,6.132c-2.463,0.251-4.776,0.648-6.892,1.166	C18.588,21.55,18.421,20.633,18.315,19.754z M8,32c0-2.6,3.47-5.303,9.317-7.06c0.606,2.279,1.437,4.654,2.471,7.06	c-1.034,2.407-1.865,4.782-2.471,7.06C11.47,37.303,8,34.6,8,32z M29.098,50.134c-3.53,2.917-6.662,3.989-8.599,2.931	c-1.934-1.055-2.729-4.27-2.184-8.818c0.105-0.879,0.273-1.796,0.469-2.729c2.117,0.519,4.43,0.915,6.892,1.166	c1.564,2.275,3.215,4.351,4.908,6.132C30.09,49.282,29.594,49.724,29.098,50.134z M45.685,44.246	c0.546,4.549-0.25,7.764-2.184,8.818c-1.934,1.059-5.068-0.014-8.599-2.931c-0.496-0.41-0.993-0.852-1.488-1.319	c1.693-1.781,3.345-3.856,4.908-6.132c2.463-0.251,4.776-0.648,6.892-1.166C45.412,42.45,45.579,43.367,45.685,44.246z M46.683,39.06c-0.606-2.279-1.437-4.654-2.471-7.06c1.034-2.407,1.865-4.782,2.471-7.06C52.53,26.697,56,29.4,56,32	S52.53,37.303,46.683,39.06z"
          />
        </svg>
      ),
    },
    {
      name: "Redux",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="32px"
          height="32px"
          className="mx-auto block"
          viewBox="0 0 48 48"
        >
          <path
            fill="#7e57c2"
            d="M23,4c-6.617,0-12,7.27-12,16.205c0,4.834,1.582,9.169,4.078,12.136C15.03,32.554,15,32.773,15,33	c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3c-0.315,0-0.612,0.062-0.897,0.152C15.206,27.731,14,24.175,14,20.205	C14,12.924,18.037,7,23,7c3.837,0,7.111,3.547,8.404,8.518c1.122,0.346,2.237,0.782,3.33,1.308C33.579,9.508,28.759,4,23,4z"
          ></path>
          <path
            fill="#7e57c2"
            d="M35.507,20.084c-3.947-2.392-8.374-3.442-12.182-2.959C22.775,16.444,21.943,16,21,16	c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.272,0,2.353-0.795,2.789-1.912c3.118-0.379,6.812,0.531,10.163,2.563	c6.403,3.881,9.67,10.569,7.282,14.911c-0.827,1.504-2.286,2.572-4.218,3.09c-2.286,0.611-5.007,0.394-7.727-0.528	c-0.839,0.772-1.749,1.498-2.725,2.168c2.552,1.117,5.196,1.704,7.669,1.704c1.24,0,2.438-0.147,3.559-0.447	c2.741-0.733,4.841-2.304,6.071-4.542C47.016,33.276,43.267,24.787,35.507,20.084z"
          ></path>
          <path
            fill="#7e57c2"
            d="M35,28.992C35,27.34,33.657,26,32,26s-3,1.34-3,2.992c0,0.669,0.228,1.281,0.6,1.779	c-1.279,2.802-3.744,5.567-7.062,7.578c-3.865,2.344-8.185,3.202-11.555,2.302c-1.932-0.518-3.391-1.586-4.218-3.09	c-1.702-3.094-0.521-7.376,2.61-10.988c-0.323-1.144-0.562-2.34-0.706-3.575c-5.07,4.797-7.109,11.323-4.532,16.009	c1.23,2.238,3.33,3.809,6.071,4.542c1.121,0.3,2.318,0.447,3.559,0.447c3.346,0,7.007-1.068,10.326-3.08	c3.836-2.325,6.683-5.577,8.209-8.962C33.815,31.801,35,30.541,35,28.992z"
          ></path>
        </svg>
      ),
    },

    {
      name: "Node.js",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="32px"
          height="32px"
          className="mx-auto block"
          baseProfile="basic"
        >
          <linearGradient
            id="7v9jIz6DZNXGp18nfnOPra"
            x1="32"
            x2="32"
            y1="57.81"
            y2="6.19"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#e6abff" />
            <stop offset="1" stop-color="#6dc7ff" />
          </linearGradient>
          <path
            fill="url(#7v9jIz6DZNXGp18nfnOPra)"
            d="M29.12,33.97h-2.6c-0.2,0-0.4,0.04-0.58,0.11l0.02-5.32c1.31,4.13,6.05,4.98,10.53,5.42	c7.02,0.69,7.02,1.62,7.02,2.23c0,0.9,0,2.56-5.73,2.56c-5.3,0-6.27-1.08-6.65-3.32C30.97,34.68,30.11,33.97,29.12,33.97z M32,6.19	L10,19.01v25.98l7.04,4.1c0.85,0.5,1.62,0.11,1.9-0.06c0.29-0.16,0.96-0.65,0.96-1.64l0.09-27.9c0.01-0.83,0.68-1.5,1.51-1.5l3,0.02	c0.83,0,1.5,0.67,1.49,1.5l-0.01,4.3C27.17,20.17,31.12,18,36.87,18c7.74,0,11.75,2.88,12.25,8.81c0.04,0.46-0.12,0.93-0.44,1.28	c-0.33,0.35-0.78,0.54-1.24,0.54h-2.58c-0.95,0-1.8-0.62-2.03-1.54c-0.49-2.01-1.44-3.08-5.97-3.08c-4.76,0-4.76,1.5-4.76,2.13	c0,0.82,0,1.26,10.79,2.52c4.01,0.47,7.23,3.85,7.11,7.89C49.84,41.85,45.29,45,37.75,45v-0.03c-4.86,0-8.41-1.09-10.56-3.24	c-0.51-0.51-0.94-1.08-1.27-1.69L25.9,47.4c0,2.12-0.82,4.08-2.27,5.53L32,57.81l22-12.82V19.01L32,6.19z"
          />
          <linearGradient
            id="7v9jIz6DZNXGp18nfnOPrb"
            x1="32"
            x2="32"
            y1="61.97"
            y2="2.027"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#c822ff" />
            <stop offset="1" stop-color="#1a6dff" />
          </linearGradient>
          <path
            fill="url(#7v9jIz6DZNXGp18nfnOPrb)"
            d="M26.904,36.014c0.072,1.75,0.655,3.184,1.735,4.267c1.754,1.756,4.831,2.646,9.147,2.646	v0.026c3.813-0.005,10.168-0.885,10.168-6.689c0-3.789-2.003-5.091-9.315-6.062c-6.379-0.844-8.585-1.278-8.585-4.058	c0-4.178,5.122-4.178,6.804-4.178c4.962,0,7.089,1.187,7.96,4.62h2.219c-0.547-4.521-3.703-6.539-10.168-6.539	c-5.862,0-9.224,2.267-9.224,6.222c0,3.727,2.283,5.209,9.049,5.877c6.795,0.665,8.867,1.661,8.867,4.264	c0,4.087-4.16,4.611-7.784,4.611c-6.276,0-8.077-1.752-8.66-5.007H26.904z M58,18.44v27.12c0,1.07-0.57,2.06-1.49,2.6l-23,13.4	c-0.47,0.27-0.99,0.41-1.51,0.41s-1.04-0.14-1.51-0.41l-10.99-6.4c0.83-0.17,1.64-0.47,2.41-0.91h0.01l9.58,5.58	c0.31,0.19,0.69,0.19,1,0l23-13.4c0.31-0.18,0.5-0.51,0.5-0.87V18.44c0-0.36-0.19-0.69-0.5-0.87l-23-13.4c-0.31-0.19-0.69-0.19-1,0	l-23,13.4C8.19,17.75,8,18.08,8,18.44v27.12c0,0.36,0.19,0.69,0.5,0.87l3.682,2.15l3.784,2.203c1.224,0.713,2.699,0.711,3.946-0.005	c1.242-0.714,1.984-1.982,1.984-3.393L22,19.996l2,0.008l-0.104,27.385c0,2.131-1.117,4.048-2.987,5.123	c-0.938,0.539-1.962,0.808-2.983,0.808c-1.022,0-2.042-0.27-2.968-0.81l-3.78-2.202L7.49,48.16C6.57,47.62,6,46.63,6,45.56V18.44	c0-1.07,0.57-2.06,1.49-2.6l23-13.4c0.93-0.55,2.09-0.55,3.02,0l23,13.4C57.43,16.38,58,17.37,58,18.44z"
          />
        </svg>
      ),
    },
    {
      name: "TailwindCSS",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="32px"
          height="32px"
          className="mx-auto block"
          baseProfile="basic"
        >
          <linearGradient
            id="Bt4mJVgxukoIn-lB813KHa"
            x1="101.406"
            x2="120.596"
            y1="579.621"
            y2="579.621"
            gradientTransform="rotate(90 337.457 266.669)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#6dc7ff" />
            <stop offset="1" stop-color="#eaabff" />
          </linearGradient>
          <path
            fill="url(#Bt4mJVgxukoIn-lB813KHa)"
            d="M20.355,41.457c-0.832-0.844-1.855-1.924-2.944-2.819	c-1.125-0.925-2.515-1.823-4.244-2.256c-0.331-0.081-0.66-0.151-0.987-0.205l-0.897-0.112l0.223-0.104	c1.501-0.615,3.311-0.953,5.495-0.953c6.172,0,8.831,2.691,11.643,5.547c0.852,0.863,1.88,1.936,2.993,2.836	c1.14,0.921,2.54,1.811,4.259,2.24c0.329,0.083,0.657,0.152,0.984,0.207l0.847,0.107l-0.233,0.108	c-1.5,0.613-3.311,0.951-5.492,0.951C25.829,47.002,23.169,44.313,20.355,41.457z"
          />
          <linearGradient
            id="Bt4mJVgxukoIn-lB813KHb"
            x1="96.905"
            x2="116.096"
            y1="575.872"
            y2="575.872"
            gradientTransform="rotate(90 349.832 265.543)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#6dc7ff" />
            <stop offset="1" stop-color="#eaabff" />
          </linearGradient>
          <path
            fill="url(#Bt4mJVgxukoIn-lB813KHb)"
            d="M35.354,23.455c-0.832-0.844-1.855-1.924-2.944-2.819	c-1.125-0.925-2.515-1.823-4.244-2.256c-0.331-0.081-0.66-0.151-0.987-0.205l-0.897-0.112l0.223-0.104	c1.501-0.615,3.311-0.953,5.495-0.953c6.172,0,8.831,2.691,11.643,5.547c0.852,0.863,1.88,1.936,2.993,2.836	c1.14,0.921,2.54,1.811,4.259,2.24c0.329,0.083,0.657,0.152,0.984,0.207l0.847,0.107l-0.233,0.108	c-1.5,0.613-3.311,0.951-5.492,0.951C40.827,29.001,38.167,26.311,35.354,23.455z"
          />
          <linearGradient
            id="Bt4mJVgxukoIn-lB813KHc"
            x1="97.289"
            x2="133.928"
            y1="585.251"
            y2="585.251"
            gradientTransform="rotate(90 346.445 263.307)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#Bt4mJVgxukoIn-lB813KHc)"
            d="M17.509,44.261c-1.892-1.915-3.367-3.515-5.313-4.003 c-3.483-0.871-6.54,0.54-9.395,4.344c-0.651,0.867-2.032,0.208-1.769-0.843c2.108-8.431,7.496-12.756,15.969-12.756 c7.857,0,11.511,3.712,14.492,6.739c1.879,1.905,3.421,3.516,5.372,4.004c3.481,0.869,6.479-0.535,9.336-4.344 c0.651-0.867,2.032-0.208,1.769,0.843c-2.108,8.431-7.496,12.753-15.969,12.753C24.143,50.998,20.489,47.287,17.509,44.261z M44.462,42.015l-0.472,0.34c-2.267,1.515-4.792,2.036-7.609,1.331c-2.615-0.653-4.579-2.781-6.313-4.54 c-2.897-2.943-6.053-6.143-13.067-6.143c-5.64,0-9.647,2.067-12.096,6.292l-0.376,0.712l0.503-0.359 c2.287-1.515,4.835-2.035,7.651-1.331c2.616,0.656,4.528,2.795,6.249,4.539c2.899,2.943,6.056,6.141,13.069,6.141 c5.639,0,9.647-2.064,12.096-6.288L44.462,42.015z"
          />
          <linearGradient
            id="Bt4mJVgxukoIn-lB813KHd"
            x1="97.289"
            x2="133.928"
            y1="570.253"
            y2="570.253"
            gradientTransform="rotate(90 346.445 263.307)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#Bt4mJVgxukoIn-lB813KHd)"
            d="M32.507,26.259c-1.892-1.915-3.367-3.515-5.313-4.003 c-3.483-0.871-6.54,0.54-9.395,4.344c-0.651,0.867-2.032,0.208-1.769-0.843c2.108-8.431,7.496-12.756,15.969-12.756 c7.857,0,11.511,3.712,14.492,6.739c1.879,1.905,3.421,3.516,5.372,4.004c3.481,0.869,6.479-0.535,9.336-4.344 c0.651-0.867,2.032-0.208,1.769,0.843c-2.108,8.431-7.496,12.753-15.969,12.753C39.142,32.997,35.487,29.286,32.507,26.259z M59.461,24.014l-0.472,0.34c-2.267,1.515-4.792,2.036-7.609,1.331c-2.615-0.653-4.579-2.781-6.313-4.54 c-2.897-2.943-6.053-6.143-13.067-6.143c-5.64,0-9.647,2.067-12.096,6.292l-0.376,0.712l0.503-0.359 c2.287-1.515,4.835-2.035,7.651-1.331c2.616,0.656,4.528,2.795,6.249,4.539c2.899,2.943,6.056,6.141,13.069,6.141 c5.639,0,9.647-2.064,12.096-6.288L59.461,24.014z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6 gradient-text relative"
      >
        About Me
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
        transition={{ delay: 0.2 }}
        className="text-gray-300 text-lg leading-relaxed mb-8 space-y-4"
      >
        <p>
          A passionate developer with strong expertise in REST APIs, UI/UX, and
          state management solutions. Proven track record in delivering
          cutting-edge solutions, including API integration, third-party
          libraries and performance optimization. Adept at debugging to ensure
          high-quality, responsive apps. An agile collaborator committed to
          staying current with industry trends.
        </p>
        <p>
          If you're seeking a skilled developer to breathe life into your
          project and exceed your expectations, I am here to collaborate and
          create magic together. Reach out, let's transform your vision into a
          reality!
        </p>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-2xl font-bold mb-6 text-white"
      >
        What I'm doing
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="glass rounded-2xl p-6 card-hover group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />
            <div className="gradient-bg p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
              <service.icon size={24} className="text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-white">
              {service.title}
            </h4>
            <p className="text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-2xl font-bold mb-6 text-white"
      >
        Skills
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.4 + index * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            className="glass rounded-xl p-4 text-center card-hover group relative overflow-hidden"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">
              {skill.icon}
            </div>
            <div className="text-sm font-medium text-gray-300">
              {skill.name}
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
