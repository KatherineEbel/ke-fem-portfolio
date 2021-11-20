export interface PortfolioProject {
  name: string
  description: string
  screenshots: Record<string, string>
}

const portfolioProjects: PortfolioProject[] = [
  {
    name: 'Manage',
    description: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
    screenshots:
      {
        portfolio: 'portfolio-manage',
        previewOne: 'manage-preview-1',
        previewTwo: 'manage-preview-2',
        hero: 'manage-hero',
      },
  },
  {
    name: 'Bookmark',
    description: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
    screenshots:
      {
        portfolio: 'portfolio-bookmark',
        previewOne: 'bookmark-preview-1',
        previewTwo: 'bookmark-preview-2',
        hero: 'bookmark-hero',
      },
  },
  {
    name: 'Insure',
    description: `This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.`,
    screenshots:
      {
        portfolio: 'portfolio-insure',
        previewOne: 'insure-preview-1',
        previewTwo: 'insure-preview-2',
        hero: 'insure-hero',
      },
  },
  {
    name: 'Fylo',
    description: `This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.`,
    screenshots:
      {
        portfolio: 'portfolio-fylo',
        previewOne: 'fylo-preview-1',
        previewTwo: 'fylo-preview-2',
        hero: 'fylo-hero',
      },
  },
]

export default portfolioProjects

