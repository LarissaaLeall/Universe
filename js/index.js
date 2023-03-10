import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add("/theuniverse", "/pages/theuniverse.html")
router.add("/exploration", "/pages/exploration.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()