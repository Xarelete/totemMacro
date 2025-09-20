import Home from '../pages/Home.vue'
import Localizacao from '../pages/Localizacao.vue'
import FichaTecnica from '../pages/FichaTecnica.vue'
import Plantas from '../pages/Plantas.vue'
import Lazer from '../pages/Lazer.vue'
import Fotos from '../pages/Fotos.vue'
import Vista from '../pages/Vista.vue'

export default [
  { path: '/', component: Home },
  { path: '/localizacao', component: Localizacao },
  { path: '/ficha-tecnica', component: FichaTecnica },
  { path: '/plantas', component: Plantas },
  { path: '/lazer', component: Lazer },
  { path: '/fotos', component: Fotos },
  { path: '/vista-dos-andares', component: Vista }
]
