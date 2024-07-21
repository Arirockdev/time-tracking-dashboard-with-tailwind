/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        
        // * Primary
        blueProject: 'var(--blue)',
        lightRedWork: 'var(--light-red-work)',
        softBluePlay: 'var(--soft-blue-play)',
        lightRedStudy: 'var(--light-red-study)',
        limeGreenExercise: 'var(--lime-green-exercise)',
        violetSocial: 'var(--violet-social)',
        softOrangeSelfCare: 'var(--soft-orangeself-care)',
        
        // * Neutral
        veryDarkBlue: 'var(--very-dark-blue)',
        darkBlue: 'var(--dark-blue)',
        desaturatedBlue: 'var(--desaturated-blue)',
        paleBlue: 'var(--pale-blue)',
        darkBlueAlpha: 'var(--dark-blue-alpha)'
      },

      backgroundImage:{
        'icon-work': "url(../images/icon-work.svg)",
        'icon-study': "url(../images/icon-study.svg)",
        'icon-social': "url(../images/icon-social.svg)",
        'icon-self-care': "url(../images/icon-self-care.svg)",
        'icon-play': "url(../images/icon-play.svg)",
        'icon-exercise': "url(../images/icon-exercise.svg)",

      }
    },
    },
    plugins: [],
  }