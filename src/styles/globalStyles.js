export const breakpoints = {
  ssm: "320px",
  sm: "425px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
};

export const breakpointKeys = {
  "mobile-small": "ssm",
  "mobile-large": "sm",
  tablet: "md",
  "desktop-small": "lg",
  desktop: "xl",
};

export const fonts = {
  body: "Montserrat Regular",
  regular: "Montserrat Regular",
  medium: "Montserrat Medium",
  semiBold: "Montserrat SemiBold",
  bold: "Montserrat Bold",
  extraBold: "Montserrat ExtraBold",
  black: "Montserrat Black",
};

export const globalStyles = `
  @font-face {
    font-family: 'Montserrat Regular';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Montserrat-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Montserrat Medium';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/Montserrat-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/Montserrat-SemiBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Montserrat Bold';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/Montserrat-Bold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Montserrat ExtraBold';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/Montserrat-ExtraBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Montserrat Black';
    font-style: normal;
    font-weight: 900;
    src: url('/fonts/Montserrat-Black.ttf') format('truetype');
  }
  body {
    height: 100vh;
    background: #000;
  }
  
  #app {
    height: 100%;
  }
  body::before {
    content: 'mobile-small';
    display: none;
  }
  @media (min-width: ${breakpoints.ssm}) {
    body::before {
      content: 'mobile-small';
    }
  }
  @media (min-width: ${breakpoints.sm}) {
    body::before {
      content: 'mobile-large';
    }
  }
  @media (min-width: ${breakpoints.md}) {
    body::before {
      content: 'tablet';
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    body::before {
      content: 'desktop-small';
    }
  }
  @media (min-width: ${breakpoints.xl}) {
    body::before {
      content: 'desktop';
    }
  }
  
  table {
    border-collapse: separate; 
    border-spacing: 0 10px; 
    margin-top: -10px; /* correct offset on first border spacing if desired */
  }
  
  td {
    border: solid 1px;
    border-style: solid none;
    padding: 10px;
  }
  td:first-child {
    border-left-style: solid;
    border-top-left-radius: 10px; 
    border-bottom-left-radius: 10px;
  }
  td:last-child {
    border-right-style: solid;
    border-bottom-right-radius: 10px; 
    border-top-right-radius: 10px; 
  }
  
  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #20242A;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #9E9F9D;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  
  
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
  
  input:-webkit-autofill {
    color: #20242A !important;
  }

  .carousel .control-next.control-arrow:before { border-left: 8px solid #000; }
  .carousel .control-prev.control-arrow:before { border-right: 8px solid #000; }
  
  `;
