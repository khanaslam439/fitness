import { Open_Sans } from 'next/font/google'
 
const poppins = Open_Sans({
  subsets: ['latin'],
})

import '../public/assets/css/tailwind.min.css';
import '../public/assets/libs/js-datepicker/datepicker.min.css';
import '../public/assets/libs/choices.js/public/assets/styles/choices.min.css';
import '../public/assets/libs/tiny-slider/tiny-slider.css';
import '../public/assets/libs/@iconscout/unicons/css/line.css';
import '../public/assets/libs/@mdi/font/css/materialdesignicons.min.css';
import './globals.css'              


export default function RootLayout({ children }) {
  return (
  <html>
      <body>
        <main className={`${poppins.className} text-base text-black dark:text-white dark:bg-slate-900`}>{children}</main>
      </body>
    </html>
  )
}

