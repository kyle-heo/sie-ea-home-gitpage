import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.scss'
import { useKakao } from 'vue3-kakao-maps'
import { getAssetUrl } from './utils/asset'

// Bootstrap CSS만 import (JavaScript는 컴포넌트에서 직접 import)
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

// 템플릿 어디서나 $asset(path)로 정적 에셋 경로를 안전하게 해석 가능
app.config.globalProperties.$asset = getAssetUrl

// 카카오 맵 초기화
const kakaoApiKey = import.meta.env.VITE_KAKAO_MAPS_API_KEY || '4213ce1d3ca43775ba727720d276d23b'
useKakao(kakaoApiKey)

app.use(router)

app.mount('#app')
