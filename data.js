// Edit this file to update the portfolio content.
window.PORTFOLIO = {
  "name": "S Harshni",
  "short": "harshni",
  "role": "AI & Software Engineer",
  "status": "Open to AI and software engineering roles · 2027 graduate",
  "roles": [
    "Generative AI Engineer",
    "Backend & Data Engineer",
    "Full-Stack Developer"
  ],
  "tagline": "I build AI systems and measure them: retrieval pipelines, text-to-SQL, LLM agents and a transformer written from scratch, on top of solid backend and data engineering.",
  "links": {
    "github": "https://github.com/S-Harshni",
    "linkedin": "https://www.linkedin.com/in/ks-harshni/",
    "email": "ksharshni05@gmail.com"
  },
  "terminal": {
    "name": "S Harshni",
    "role": "AI · Backend · Data",
    "stack": "Python · SQL · PyTorch · FastAPI",
    "based": "Chennai, India",
    "genai": "RAG · Agents · Text-to-SQL · Evals"
  },
  "stats": [
    {
      "value": "500+",
      "label": "daily users served"
    },
    {
      "value": "99.9%",
      "label": "API uptime"
    },
    {
      "value": "130+",
      "label": "automated tests in CI"
    },
    {
      "value": "10+",
      "label": "industry certifications"
    }
  ],
  "about": [
    "I'm an <strong>AI and software engineer</strong> pursuing a B.Tech in Computer Science (AI &amp; ML) at SRM Institute of Science and Technology, graduating in 2027. I like systems whose quality can be measured, so my projects come with evaluations, baselines and tests.",
    "As a data engineering intern at <strong>InAmigos Foundation</strong>, I designed server-side architecture and RESTful APIs serving 500+ daily active users at 99.9% uptime, and owned an AI-powered inventory system end to end.",
    "I work across <strong>Node.js, TypeScript, React, Next.js, Tailwind CSS and SQL</strong>, with hands-on AWS, Docker and Git. I take ownership, learn fast and enjoy fast-paced, startup-style teams."
  ],
  "facts": [
    {
      "icon": "pin",
      "label": "Location",
      "value": "Chennai, India"
    },
    {
      "icon": "cap",
      "label": "Education",
      "value": "B.Tech CSE (AI & ML) · CGPA 8.65"
    },
    {
      "icon": "brief",
      "label": "Latest role",
      "value": "Data Engineering Intern · InAmigos Foundation"
    },
    {
      "icon": "star",
      "label": "Focus",
      "value": "Generative AI · Data · Backend"
    }
  ],
  "experience": [
    {
      "title": "Data Engineering Intern",
      "company": "InAmigos Foundation",
      "date": "Jan 2026 – May 2026",
      "place": "Chennai",
      "points": [
        "Designed and built scalable server-side architecture and RESTful APIs (Python, Flask) supporting 500+ daily active users at 99.9% uptime.",
        "Resolved performance bottlenecks by optimizing SQL queries, data pipelines and load distribution, achieving sub-200ms response times on high-traffic endpoints.",
        "Owned an AI-powered inventory system end to end, from requirements to deployment, improving query accuracy by 40%.",
        "Automated manual inventory workflows, saving 10+ hours of manual effort per week."
      ],
      "tags": [
        "Python",
        "Flask",
        "REST APIs",
        "SQL",
        "AI"
      ]
    }
  ],
  "projects": [
    {
      "title": "RAG Document QA",
      "subtitle": "Retrieval-augmented question answering, measured end to end",
      "category": "Generative AI",
      "glyph": "?",
      "colors": [
        "#4a3aa7",
        "#2a78d6"
      ],
      "featured": true,
      "image": "assets/projects/rag.jpg",
      "metric": {
        "value": "91.0%",
        "label": "right chunk in the top 5, over 10,570 questions"
      },
      "points": [
        "Chunking, embeddings, a FAISS vector store, BM25 written from scratch and hybrid retrieval.",
        "Chunk-size trade-off and exact vs approximate search measured on 10,570 questions.",
        "Three open-source LLMs run locally with few-shot and chain-of-thought prompts and cited JSON answers.",
        "Prompt-injection tests, hallucination checks, log redaction and a tool-using agent; 18 tests in CI."
      ],
      "tags": [
        "Python",
        "RAG",
        "FAISS",
        "LLMs",
        "Agents"
      ],
      "github": "https://github.com/S-Harshni/RAG-Document-QA",
      "live": "https://s-harshni.github.io/RAG-Document-QA/"
    },
    {
      "title": "Drug Safety LLM Fine-Tuning",
      "subtitle": "When is fine-tuning a small model better than prompting a large one?",
      "category": "Generative AI",
      "glyph": "Rx",
      "colors": [
        "#7c2d12",
        "#0f766e"
      ],
      "featured": true,
      "image": "assets/projects/drug.jpg",
      "metric": {
        "value": "81.7%",
        "label": "F1 after LoRA fine-tuning, against 71.2% for prompting a 6× larger model"
      },
      "points": [
        "A 0.5B-parameter open-source LLM fine-tuned with LoRA to find adverse drug events in 20,895 sentences from medical case reports.",
        "Only 0.22% of the weights are trained, on a laptop; the result beats prompting and a TF-IDF baseline (72.2%).",
        "Data-size study: 60.9% F1 with 250 training sentences, 72.1% with 1,000, 81.7% with 4,000.",
        "Also extracts (drug, effect) pairs by generation: 72.4% pair F1 against 64.5% prompted; 10 tests in CI."
      ],
      "tags": [
        "Python",
        "PyTorch",
        "LoRA / PEFT",
        "Transformers",
        "Evaluation"
      ],
      "github": "https://github.com/S-Harshni/Drug-Safety-LLM-FineTuning",
      "live": "https://s-harshni.github.io/Drug-Safety-LLM-FineTuning/"
    },
    {
      "title": "Retail Intelligence Platform",
      "subtitle": "A SQL warehouse you can question in plain English",
      "category": "Data + GenAI",
      "glyph": "£",
      "colors": [
        "#2a78d6",
        "#1baf7a"
      ],
      "featured": true,
      "image": "assets/projects/retail.jpg",
      "metric": {
        "value": "73%",
        "label": "text-to-SQL accuracy with three small models voting"
      },
      "points": [
        "SQL warehouse over 1,067,371 real retail transactions with 12 data-quality checks; PySpark and Delta Lake version.",
        "Text-to-SQL assistant: few-shot prompt, read-only query guard, self-repair and execution-guided voting.",
        "Accuracy on 70 questions: 47% zero-shot, 61% few-shot, 73% with voting; no unsafe request was executed.",
        "Repeat-purchase model (ROC AUC 0.80), demand forecast for 791 products, recommender, FastAPI; 55 tests in CI."
      ],
      "tags": [
        "Python",
        "SQL",
        "LLMs",
        "PySpark",
        "Delta Lake",
        "FastAPI"
      ],
      "github": "https://github.com/S-Harshni/Retail-Intelligence-Platform",
      "live": "https://s-harshni.github.io/Retail-Intelligence-Platform/#ask-the-data"
    },
    {
      "title": "Meeting Assistant Agent",
      "subtitle": "LLM agents where judgement is needed, code where there is a right answer",
      "category": "Generative AI",
      "glyph": "AI",
      "colors": [
        "#0f766e",
        "#2563eb"
      ],
      "featured": true,
      "image": "assets/projects/meeting.jpg",
      "metric": {
        "value": "83–97%",
        "label": "deadlines right with a code tool, against 34–48% without"
      },
      "points": [
        "Three LLM agents in Agno: a validated-JSON action-item extractor plus recap and summary writers in parallel.",
        "A deterministic deadline tool replaces the model's date arithmetic; owners not in the notes are rejected.",
        "Measured on 18 hand-labelled meetings: 85% action-item F1 across three open-source models.",
        "Linear and Slack integrations with a dry-run mode; Streamlit app; 47 tests in CI."
      ],
      "tags": [
        "Python",
        "Agno",
        "LLMs",
        "Linear API",
        "Slack API",
        "Streamlit"
      ],
      "github": "https://github.com/S-Harshni/Smart-Meeting-Assistant-Agent",
      "live": "https://s-harshni.github.io/Smart-Meeting-Assistant-Agent/"
    },
    {
      "title": "Mini GPT From Scratch",
      "subtitle": "A transformer language model and tokenizer, written by hand",
      "category": "Generative AI",
      "glyph": "∑",
      "colors": [
        "#0d366b",
        "#eb6834"
      ],
      "featured": true,
      "image": "assets/projects/minigpt.jpg",
      "metric": {
        "value": "41.8",
        "label": "validation perplexity, against 131.0 for a bigram model"
      },
      "points": [
        "Decoder-only transformer with hand-written causal multi-head self-attention; 940,800 parameters.",
        "Byte-pair tokenizer from scratch (1,024 tokens), also running in the browser.",
        "Training pipeline with AdamW, warm-up, cosine decay and gradient clipping; temperature, top-k and top-p sampling.",
        "Five ablations show context length and position embeddings matter most; 10 tests in CI."
      ],
      "tags": [
        "Python",
        "PyTorch",
        "Transformers",
        "BPE"
      ],
      "github": "https://github.com/S-Harshni/Mini-GPT-From-Scratch",
      "live": "https://s-harshni.github.io/Mini-GPT-From-Scratch/"
    },
    {
      "title": "Turbofan Predictive Maintenance",
      "subtitle": "Remaining-life prediction and maintenance queue",
      "category": "AI / ML",
      "glyph": "⚙",
      "colors": [
        "#0b5cad",
        "#0e7490"
      ],
      "metric": {
        "value": "11.3",
        "label": "cycles test RMSE · 35% lower than raw sensors"
      },
      "points": [
        "Predicts remaining useful life of jet engines on NASA's C-MAPSS benchmark (33,700+ operating cycles).",
        "Leakage-free rolling and drift features; evaluated on 100 held-out engines.",
        "Alerts catch 22 of 25 engines within 30 cycles of failure, with no false alerts.",
        "Ranked maintenance queue with uncertainty ranges; 8 tests in CI and a live dashboard."
      ],
      "tags": [
        "Python",
        "scikit-learn",
        "pandas",
        "Time series",
        "Chart.js"
      ],
      "github": "https://github.com/S-Harshni/Turbofan-Predictive-Maintenance",
      "live": "https://s-harshni.github.io/Turbofan-Predictive-Maintenance/",
      "image": "assets/projects/turbofan.jpg"
    },
    {
      "title": "Radar Signal Processing Simulator",
      "subtitle": "Pulse-Doppler radar chain in C++, MATLAB & JS",
      "category": "DSP",
      "glyph": "∿",
      "colors": [
        "#0e7490",
        "#1d4ed8"
      ],
      "metric": {
        "value": "15 m",
        "label": "range resolution · 41 dB gain"
      },
      "points": [
        "LFM chirp waveform, FFT-based matched filter (pulse compression) and Doppler FFT.",
        "Swerling 0–IV targets, radar range equation, 2-D CA-CFAR detection.",
        "Radix-2 FFT from scratch; 20 unit tests against theory, run in CI.",
        "Interactive in-browser demo plus a MATLAB reference script."
      ],
      "tags": [
        "C++17",
        "MATLAB",
        "FFT",
        "CFAR",
        "Radar"
      ],
      "github": "https://github.com/S-Harshni/Radar-Signal-Processing-Simulator",
      "live": "https://s-harshni.github.io/Radar-Signal-Processing-Simulator/",
      "image": "assets/projects/radar.jpg"
    },
    {
      "title": "MERN Amazona",
      "subtitle": "Full-stack e-commerce platform",
      "category": "Full-Stack",
      "glyph": "{ }",
      "colors": [
        "#2f6fed",
        "#7c3aed"
      ],
      "metric": {
        "value": "20%",
        "label": "faster page loads via lazy loading"
      },
      "points": [
        "Amazon-style store with product search, cart, checkout, orders and user profiles.",
        "Backend on Next.js API routes (no Express); 10+ REST endpoints tested with Postman.",
        "JWT auth with Prisma ORM on PostgreSQL/MySQL, cutting query latency by 15%.",
        "Admin dashboard for products, orders and users."
      ],
      "tags": [
        "Next.js",
        "React",
        "Node.js",
        "Tailwind",
        "Prisma",
        "SQL"
      ],
      "github": "https://github.com/S-Harshni/Amazon-Clone-MernStack",
      "live": "https://s-harshni.github.io/Amazon-Clone-MernStack/",
      "image": "assets/projects/mern.jpg"
    },
    {
      "title": "AI Fashion Recommender",
      "subtitle": "Deep-learning visual recommendations",
      "category": "AI / ML",
      "glyph": "◎",
      "colors": [
        "#db2777",
        "#f59e0b"
      ],
      "metric": {
        "value": "289K+",
        "label": "images · 85%+ accuracy"
      },
      "points": [
        "ResNet classifier in TensorFlow trained on DeepFashion (50 categories).",
        "Modular pipeline: preprocessing, augmentation, configurable hyperparameters, train/test scripts.",
        "Nearest-neighbor recommender with sub-100ms inference and sub-second retrieval."
      ],
      "tags": [
        "Python",
        "TensorFlow",
        "ResNet",
        "k-NN"
      ],
      "github": "https://github.com/S-Harshni/AI-Powered-Fashion-Recommendation-System",
      "live": "https://s-harshni.github.io/AI-Powered-Fashion-Recommendation-System/",
      "image": "assets/projects/fashion.jpg"
    },
    {
      "title": "Myntra Returns-Reduction Analysis",
      "subtitle": "Business analytics dashboard",
      "category": "Data",
      "glyph": "▦",
      "colors": [
        "#ea580c",
        "#be123c"
      ],
      "metric": {
        "value": "15%",
        "label": "projected drop in return rate"
      },
      "points": [
        "Analyzed 10K+ Myntra sales records in Power BI and Excel.",
        "Defined business requirements and KPIs for revenue, orders and products.",
        "Interactive dashboard: top brands, daily sales by category, sales across 20+ states."
      ],
      "tags": [
        "Power BI",
        "Excel",
        "KPIs"
      ],
      "github": "https://github.com/S-Harshni/myntra-returns-reduction-analysis",
      "live": "https://s-harshni.github.io/myntra-returns-reduction-analysis/",
      "image": "assets/projects/myntra.jpg"
    }
  ],
  "skills": {
    "Generative AI": [
      "RAG",
      "Embeddings",
      "FAISS",
      "Hybrid retrieval",
      "Fine-tuning (LoRA / PEFT)",
      "Text-to-SQL",
      "Agents (Agno)",
      "Prompt engineering",
      "LLM evaluation",
      "Prompt-injection testing",
      "Llama · Qwen · Gemma",
      "Ollama"
    ],
    "Data & ML": [
      "PyTorch",
      "scikit-learn",
      "PySpark",
      "Delta Lake",
      "pandas",
      "DuckDB"
    ],
    "Languages": [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "SQL",
      "C++",
      "HTML/CSS"
    ],
    "Frontend": [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Streamlit"
    ],
    "Backend": [
      "Node.js",
      "Next.js API Routes",
      "Flask",
      "Spring Boot",
      "REST API Design",
      "JWT Auth",
      "Prisma ORM"
    ],
    "Databases": [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Query Optimization"
    ],
    "Cloud & DevOps": [
      "AWS (Lambda, ECS, EKS, CloudWatch)",
      "GCP",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Kafka",
      "RabbitMQ"
    ],
    "Tools": [
      "Git",
      "GitHub",
      "GitLab",
      "Postman",
      "Grafana",
      "Splunk"
    ]
  },
  "education": [
    {
      "school": "SRM Institute of Science and Technology",
      "date": "Aug 2023 – May 2027",
      "degree": "B.Tech, Computer Science & Engineering (AI & ML) · Kattankulathur, Chennai",
      "score": "CGPA 8.65 / 10",
      "coursework": "DSA · Design & Analysis of Algorithms · DBMS · OOP · Operating Systems · Computer Networks · Software Engineering"
    }
  ],
  "certs": [
    "Codefest Technical Hackathon — 2nd Place, SRM IST",
    "Databricks Fundamentals · Databricks Generative AI Fundamentals",
    "AWS Certified Developer – Associate",
    "AWS Certified Cloud Practitioner (2025)",
    "Oracle Certified Professional: MySQL 8.0 Database Developer",
    "MongoDB Associate Developer (Node.js)",
    "Meta Back-End Developer Professional Certificate",
    "OCI Generative AI Professional (2026)",
    "Microsoft Azure Fundamentals AZ-900 · Azure AI Fundamentals AI-900",
    "Microsoft Power BI Data Analyst PL-300 · Excel",
    "Google Data Analytics"
  ],
  "contactText": "I'm looking for AI engineering and software engineering roles and internships. Whether you have an opportunity or just want to talk about a project, my inbox is open.",
  "skin": "aurora",
  "workTitle": "Things I have built and measured",
  "workSub": "Each project ships with a live demo, tests in CI, and numbers for what works and what does not.",
  "contactTitle": "Let's build something."
};
