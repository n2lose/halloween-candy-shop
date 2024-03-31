import withMT from '@material-tailwind/react/utils/withMT'

const baseConfig = {
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}

export default withMT(baseConfig)
