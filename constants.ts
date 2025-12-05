import { Experience, Education, Skill } from './types';

export const RESUME_CONTENT = `
ABHISHEK KARMAKAR
Software Engineer @MindgateSolutions | FinTech | Angular
Location: Chennai, Tamil Nadu, India
Contact: 9875491383, abswaron31@gmail.com, linkedin.com/in/abhishekkarmakar31

Summary:
Experienced Software Engineer in Angular, Front-End development, FinTech, and building scalable micro frontend architectures, delivering scalable and maintainable UI solutions.
Expertise in key banking modules like Payments, Beneficiaries, Reports, Bulk Transactions, and all phases of the Software Development Life Cycle. Strong in architectural design and client communication.
Key role in driving technical excellence, optimizing performance, and ensuring consistent outcomes across multiple engineering teams.

Skills:
Angular (v13–v18), TypeScript, HTML, CSS, Bootstrap, Kendo UI, Java, Spring Boot, Git, Jenkins, Jira, System Design, HLD (High Level Design), LLD (Low Level Design).

Experience:
1. Mindgate Solutions - Software Engineer
   September 2022 - Present (3 years 4 months total tenure at company)
   Chennai, Tamil Nadu, India
2. Mindgate Solutions - Software Engineering Trainee
   June 2022 - August 2022 (3 months)
   Chennai, Tamil Nadu, India

Education:
SJC institute of technology
Bachelor of Engineering - BE, Information Technology (2015 - 2019)
`;

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Software Engineer',
    company: 'Mindgate Solutions',
    period: 'September 2022 - Present',
    location: 'Chennai, Tamil Nadu, India',
    description: 'Specializing in FinTech and Angular development. Building scalable micro frontend architectures. Expertise in banking modules including Payments, Beneficiaries, Reports, and Bulk Transactions. Involved in all phases of SDLC, architectural design, and client communication.'
  },
  {
    id: '2',
    role: 'Software Engineering Trainee',
    company: 'Mindgate Solutions',
    period: 'June 2022 - August 2022',
    location: 'Chennai, Tamil Nadu, India',
    description: 'Initial training and onboarding into software engineering practices and company technologies.'
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Engineering - BE, Information Technology',
    institution: 'SJC Institute of Technology',
    year: '2015 - 2019'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Angular (v13-v18)', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'Kendo UI', category: 'frontend' },
  { name: 'Java', category: 'backend' },
  { name: 'Spring Boot', category: 'backend' },
  { name: 'Git', category: 'tools' },
  { name: 'Jenkins', category: 'tools' },
  { name: 'Jira', category: 'tools' },
  { name: 'System Design', category: 'other' },
];

export const CONTACT_INFO = {
  phone: '9875491383',
  email: 'abswaron31@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abhishekkarmakar31',
  location: 'Chennai, Tamil Nadu, India'
};