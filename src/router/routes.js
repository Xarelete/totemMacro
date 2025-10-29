import Inicio from '../pages/Inicio.vue'

// Altus America
import AltusHome from '../pages/altus/Home.vue'
import AltusLocalizacao from '../pages/altus/Localizacao.vue'
import AltusFichaTecnica from '../pages/altus/FichaTecnica.vue'
import AltusPlantas from '../pages/altus/Plantas.vue'
import AltusLazer from '../pages/altus/Lazer.vue'
import AltusFotos from '../pages/altus/Fotos.vue'
import AltusVista from '../pages/altus/Vista.vue'

// Mirati Residenciais
import MiratiHome from '../pages/mirati/Home.vue'
import MiratiLocalizacao from '../pages/mirati/Localizacao.vue'
import MiratiFichaTecnica from '../pages/mirati/FichaTecnica.vue'
import MiratiPlantas from '../pages/mirati/Plantas.vue'
import MiratiLazer from '../pages/mirati/Lazer.vue'
import MiratiFotos from '../pages/mirati/Fotos.vue'
import MiratiVista from '../pages/mirati/Vista.vue'

export default [
  // Landing
  { path: '/', component: Inicio },

  // Altus América
  { path: '/altus', component: AltusHome },
  { path: '/altus/localizacao', component: AltusLocalizacao },
  { path: '/altus/ficha-tecnica', component: AltusFichaTecnica },
  { path: '/altus/plantas', component: AltusPlantas },
  { path: '/altus/lazer', component: AltusLazer },
  { path: '/altus/fotos', component: AltusFotos },
  { path: '/altus/vista-dos-andares', component: AltusVista },

  // Mirati Residenciais (inicialmente reutiliza mesmas páginas, com home própria)
  { path: '/mirati', component: MiratiHome },
  { path: '/mirati/localizacao', component: MiratiLocalizacao },
  { path: '/mirati/ficha-tecnica', component: MiratiFichaTecnica },
  { path: '/mirati/plantas', component: MiratiPlantas },
  { path: '/mirati/lazer', component: MiratiLazer },
  { path: '/mirati/fotos', component: MiratiFotos },
  { path: '/mirati/vista-dos-andares', component: MiratiVista }
]
