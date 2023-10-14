import './index.css'

import type Person from './person.json'

// import person from './person.json'
import App from './App.vue'

// import router from '@/routers'
import '@unocss/reset/tailwind.css'
import 'uno.css'

interface User {
  age: number
  name: string
}

const jo: User = {
  age: 18,
  name: 'jo',
}
console.log('jo', jo)

// console.log(_, 'lodash-es')

type person = typeof Person

// console.log(Person)

// console.log(1)

// import now from '~build/time'
// import {
//   CI,
//   github,
//   sha,
//   abbreviatedSha,
//   tag,
//   lastTag,
//   commitsSinceLastTag,
//   committer,
//   committerDate,
//   author,
//   authorDate,
//   commitMessage
// } from '~build/info';

// console.log(now)
// console.log('github', github)

const app = createApp(App)
// console.log('app', app)

// app.use(router)

app.mount('#app')
