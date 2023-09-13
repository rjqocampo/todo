import './styles/index.scss'
import './styles/aside.scss'
import './styles/header.scss'
import './styles/main.scss'
import './styles/breakpoints.scss'

import { getBoards } from './data-handler';
import { displayBoards } from './display-module'

displayBoards();

console.log('Hello world')