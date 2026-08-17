import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable

def build_pdf(filename):
    # Set tight margins (28pt ~ 0.38 in) to ensure everything fits perfectly on 1 page
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=30,
        rightMargin=30,
        topMargin=25,
        bottomMargin=25
    )

    styles = getSampleStyleSheet()

    # Custom styles
    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=22,
        alignment=1, # Center
        textColor=colors.HexColor('#0F172A')
    )

    sub_title_style = ParagraphStyle(
        'SubTitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        alignment=1,
        textColor=colors.HexColor('#334155')
    )

    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        alignment=1,
        textColor=colors.HexColor('#475569')
    )

    section_heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=12,
        textColor=colors.HexColor('#0F172A'),
        spaceBefore=6,
        spaceAfter=2
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#1E293B'),
        spaceAfter=3
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.3,
        leading=10.8,
        textColor=colors.HexColor('#1E293B'),
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=2
    )

    story = []

    # --- HEADER ---
    story.append(Paragraph("MOHAMED JASEEN", name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Software Developer &nbsp;|&nbsp; Java &bull; Spring Boot &bull; Python &bull; REST APIs &bull; SQL", sub_title_style))
    story.append(Spacer(1, 2))
    contact_text = (
        '9345414821 &nbsp;|&nbsp; '
        '<a href="mailto:mohamedjaseensoftdev@gmail.com" color="#2563EB">mohamedjaseensoftdev@gmail.com</a> &nbsp;|&nbsp; '
        '<a href="https://www.linkedin.com/in/mohamed-jaseen-113ab6257" color="#2563EB"><u>LinkedIn</u></a> &nbsp;|&nbsp; '
        '<a href="https://github.com/MohamedJaseen" color="#2563EB"><u>GitHub</u></a> &nbsp;|&nbsp; '
        '<a href="https://jaseen-portfolio.vercel.app/" color="#2563EB"><u>Portfolio</u></a>'
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 4))

    def add_section_header(title):
        story.append(Paragraph(title.upper(), section_heading_style))
        story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#334155'), spaceAfter=4, spaceBefore=1))

    # --- PROFESSIONAL SUMMARY ---
    add_section_header("Professional Summary")
    summary_text = (
        "Backend-focused Software Developer with hands-on experience building RESTful APIs and full-stack applications "
        "using Java, Spring Boot, Python, and React. Skilled in relational database design (PostgreSQL, SQLite, MySQL), "
        "JWT-based authentication, and machine learning integration (TensorFlow, Scikit-learn), with a solid grasp of OOP, "
        "data structures, and clean, maintainable code. Proven ability to deliver secure, well-tested backend services and "
        "AI-powered applications through internships and independent full-stack projects."
    )
    story.append(Paragraph(summary_text, body_style))

    # --- TECHNICAL SKILLS ---
    add_section_header("Technical Skills")
    skills_text = (
        "<b>Languages:</b> Java, Python, TypeScript, JavaScript, SQL<br/>"
        "<b>Backend:</b> Spring Boot, FastAPI, REST API Development, Spring Security, JWT Authentication<br/>"
        "<b>Frontend:</b> React.js, Tailwind CSS, Vite<br/>"
        "<b>Databases:</b> PostgreSQL, SQLite, MySQL, MongoDB, Spring Data JPA/Hibernate<br/>"
        "<b>ML / AI:</b> TensorFlow, Keras, Scikit-learn, Pandas, NumPy, SHAP<br/>"
        "<b>Tools:</b> Git, GitHub, Maven, Postman, PostgREST, Docker<br/>"
        "<b>Concepts:</b> OOP, Data Structures &amp; Algorithms, MVC Architecture, RESTful Design, RBAC, Agile/SDLC"
    )
    story.append(Paragraph(skills_text, body_style))

    # --- WORK EXPERIENCE ---
    add_section_header("Work Experience")
    
    # Job 1
    exp1_title = "<b>Backend Developer Intern</b> &mdash; Ethical Intelligent Technologies LLP <font color='#475569'><i>(Feb 2026 &ndash; Aug 2026)</i></font>"
    story.append(Paragraph(exp1_title, body_style))
    story.append(Paragraph("&bull; Engineered and customized REST APIs in Java, Spring Boot, and PostgREST for a Hospital Asset Tracking and Management System, implementing CRUD, bulk, and synchronized-operation workflows.", bullet_style))
    story.append(Paragraph("&bull; Designed PostgreSQL schemas and PL/pgSQL functions, and implemented JWT-based authentication with Role-Based Access Control (RBAC) for hospital and branch-level data access.", bullet_style))

    # Job 2
    exp2_title = "<b>Backend Developer Intern (Virtual)</b> &mdash; AICTE &ndash; Microsoft Azure Collaboration <font color='#475569'><i>(May 2025 &ndash; Jun 2025)</i></font>"
    story.append(Paragraph(exp2_title, body_style))
    story.append(Paragraph("&bull; Built an end-to-end Python backend pipeline to preprocess and serve text data through a classification service, applying TF-IDF feature extraction and tokenization.", bullet_style))
    story.append(Paragraph("&bull; Integrated Firebase for real-time data updates and deployed the trained model as a backend REST service.", bullet_style))

    # Job 3
    exp3_title = "<b>Web Development Intern</b> &mdash; Live Wire Private Limited <font color='#475569'><i>(Jun 2024 &ndash; Jul 2024)</i></font>"
    story.append(Paragraph(exp3_title, body_style))
    story.append(Paragraph("&bull; Developed server-side input validation and authentication logic for a secure login module and conducted functional testing to identify and resolve defects.", bullet_style))

    # --- PROJECTS ---
    add_section_header("Projects")

    # Proj 1
    p1_header = "<b>Hospital Asset Tracking &amp; Management System</b> &mdash; <i>Java, Spring Boot, PostgreSQL, REST APIs, JWT, Angular</i>"
    story.append(Paragraph(p1_header, body_style))
    story.append(Paragraph("&bull; Built and customized REST APIs for Asset CRUD, Gateway Management, BLE Tag Management, and Location Management, supporting hierarchical asset tracking across Hospital &rarr; Branch &rarr; Block &rarr; Floor &rarr; Department &rarr; Room.", bullet_style))
    story.append(Paragraph("&bull; Implemented PL/pgSQL functions and database triggers for automated audit timestamps, location updates, and event synchronization; integrated backend APIs with an Angular frontend for configurable dashboards and reports.", bullet_style))

    # Proj 2
    p2_header = "<b>Comfortable Diet Planner</b> &mdash; <i>Java, Spring Boot, React, PostgreSQL</i> &nbsp;|&nbsp; <a href='https://comfortable-diet-planner-v2.vercel.app/' color='#2563EB'><u>Live Demo</u></a>"
    story.append(Paragraph(p2_header, body_style))
    story.append(Paragraph("&bull; Engineered a full-stack diet-planning application with a Spring Boot 3/Java 21 REST API backend and a React/TypeScript frontend, using Spring Security and JWT for authentication and Spring Data JPA/Hibernate for PostgreSQL persistence.", bullet_style))
    story.append(Paragraph("&bull; Built Recharts-based dashboards for interactive nutrition data visualization and AI-driven diet recommendations.", bullet_style))

    # Proj 3
    p3_header = "<b>CreditIQ &ndash; Credit Risk Assessment</b> &mdash; <i>Python, FastAPI, TensorFlow, Scikit-learn</i> &nbsp;|&nbsp; <a href='https://credit-risk-static-ui.onrender.com/' color='#2563EB'><u>Live Demo</u></a>"
    story.append(Paragraph(p3_header, body_style))
    story.append(Paragraph("&bull; Built an ensemble credit-risk prediction system combining CNN, BiLSTM, and TabTransformer models with Scikit-learn and TensorFlow, exposed through a FastAPI REST service with JWT authentication.", bullet_style))
    story.append(Paragraph("&bull; Implemented SHAP-based model explainability and automated PDF/Excel reporting; containerized the service with Docker for reproducible deployment.", bullet_style))

    # Proj 4
    p4_header = "<b>Movie Review Sentiment Analyzer</b> &mdash; <i>Python, FastAPI, NLTK, Scikit-learn</i> &nbsp;|&nbsp; <a href='https://movie-review-sentiment-analyser-1.onrender.com/' color='#2563EB'><u>Live Demo</u></a>"
    story.append(Paragraph(p4_header, body_style))
    story.append(Paragraph("&bull; Developed an NLP sentiment-analysis service with FastAPI, TF-IDF vectorization, and Logistic Regression over SQLite, with JWT authentication, multi-language detection (Langdetect), and automated PDF/Excel reporting (ReportLab, OpenPyXL).", bullet_style))

    # --- EDUCATION ---
    add_section_header("Education")
    edu_text = (
        "<b>B.Tech, Information Technology</b> &mdash; B.S. Abdur Rahman Crescent Institute of Science and Technology <font color='#475569'><i>(2022 &ndash; 2026)</i></font><br/>"
        "CGPA: 7.7 &nbsp;|&nbsp; HSC: 88% (2022) &nbsp;|&nbsp; SSLC: 91% (2020)"
    )
    story.append(Paragraph(edu_text, body_style))

    # --- CERTIFICATIONS ---
    add_section_header("Certifications")
    certs_text = (
        "Java (Basic) &ndash; HackerRank &nbsp;|&nbsp; SQL (Intermediate) &ndash; HackerRank &nbsp;|&nbsp; "
        "MongoDB Basics &ndash; MongoDB University &nbsp;|&nbsp; Python for Beginners &ndash; Infosys Springboard"
    )
    story.append(Paragraph(certs_text, body_style))

    doc.build(story)
    print("Resume PDF generated successfully at:", filename)

if __name__ == "__main__":
    out_dir = os.path.join(os.getcwd(), "public")
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, "Mohamed_Jaseen_Resume.pdf")
    build_pdf(out_path)
