export interface PortfolioProject {
  name: string
  description: string
  background: string
  screenshots: Record<string, string>
  tags: string[]
}

const portfolioProjects: PortfolioProject[] = [
  {
    name: 'Manage',
    description: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
    background: `
      This project was a front-end challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
    screenshots: {
      portfolio: 'portfolio-manage',
      previewOne: 'manage-preview-1',
      previewTwo: 'manage-preview-2',
      hero: 'manage-hero',
    },
    tags: ['Interaction Design', 'Front End Development', 'HTML', 'CSS', 'JS'],
  },
  {
    name: 'Bookmark',
    background: `
   This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style. 
    `,
    description: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
    screenshots: {
      portfolio: 'portfolio-bookmark',
      previewOne: 'bookmark-preview-1',
      previewTwo: 'bookmark-preview-2',
      hero: 'bookmark-hero',
    },
    tags: ['Interaction Design', 'Front End Development', 'HTML', 'CSS', 'JS'],
  },
  {
    name: 'Insure',
    description: `This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.`,
    background: `
    This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.
    `,
    screenshots: {
      portfolio: 'portfolio-insure',
      previewOne: 'insure-preview-1',
      previewTwo: 'insure-preview-2',
      hero: 'insure-hero',
    },
    tags: ['Interaction Design', 'Front End Development', 'HTML', 'CSS', 'JS'],
  },
  {
    name: 'Fylo',
    description: `This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.`,
    background: `
    This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.
    `,
    screenshots: {
      portfolio: 'portfolio-fylo',
      previewOne: 'fylo-preview-1',
      previewTwo: 'fylo-preview-2',
      hero: 'fylo-hero',
    },
    tags: ['Interaction Design', 'Front End Development', 'HTML', 'CSS'],
  },
]

export default portfolioProjects
