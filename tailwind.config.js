module.exports = {
  mode: "jit",  
  purge: [
      './partials/**/*.hbs', 
      './pages/**/*.hbs',
      './templates/**/*.hbs',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {

      textColor: theme => theme('colors'),
    textColor: {
      primary: '#e00000',
      secondary: '#421bac',
      textwhite : '#ffffff',
      textblack : '#000000',
      bluetext  :  '#203052',
      greytext  :  '#75737d',

    },

    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#e00000',
      'secondary': '#421bac',
      'lightorange' : '#ffe3d1',
      'lightblue'   : '#def8f2',
      'lightgrey' : '#e4edf4',
      'lightgreen' : '#d1ffda',
      'clientbg'   :  '#f5f5f5',
      'whitetbg'   :  '#ffffff',
      'menubg'     :  '#040021',

      'footerbg' : '#000000'
     }),

    fontFamily: {
      'Poppins': ["Poppins", "sans-serif"],
    },


    borderRadius: {
      'none': '0',
       'sm': '0.125rem',
       DEFAULT: '0.25rem',
       DEFAULT: '4px',
       'md': '0.375rem',
       'lg': '0.5rem',
       'full': '9999px',
       'large': '12px',
       'iconradious': '20px',
       '3xl': '1.5rem',
       'featradious' : '100px',

    },


      extend: {},
    },
    variants: {
      extend: {
        backgroundImage: {
          'testimonials': "url('./src/images/client-bg.jpg')",
         }
      },
    },
    plugins: [],
  }
  
