<template>
  <nav
    class="navbar navbar-expand-lg fixed-top"
    :class="{ 'navbar-transparent': isTransparent }"
    color-on-scroll="300"
  >
    <div class="container">
      <div class="navbar-translate">
        <router-link
          to="/"
          class="h3 font-weight-bold"
          rel="tooltip"
          title="SIE-EA"
          data-placement="bottom"
        >
          SIE-EA
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation-index"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </button>
      </div>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navigation"
        ref="navbarCollapseRef"
      >
        <ul class="navbar-nav">
          <li class="nav-item dropdown" ref="aboutDropdownRef">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              @click.stop.prevent="toggleDropdown('about', $event)"
              :aria-expanded="dropdownStates.about"
              aria-haspopup="true"
            >
              회사소개
            </a>
            <ul class="dropdown-menu" :class="{ show: dropdownStates.about }">
              <li>
                <router-link to="/about/greetings" class="dropdown-item" @click="closeAllDropdowns"
                  >인사말</router-link
                >
              </li>
              <li>
                <router-link to="/about/history" class="dropdown-item" @click="closeAllDropdowns"
                  >회사연혁</router-link
                >
              </li>
              <li>
                <router-link
                  to="/about/organization"
                  class="dropdown-item"
                  @click="closeAllDropdowns"
                  >조직도</router-link
                >
              </li>
              <li>
                <router-link to="/about/clients" class="dropdown-item" @click="closeAllDropdowns"
                  >고객사</router-link
                >
              </li>
              <li>
                <router-link to="/about/location" class="dropdown-item" @click="closeAllDropdowns"
                  >오시는 길</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown" ref="businessDropdownRef">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              @click.stop.prevent="toggleDropdown('business', $event)"
              :aria-expanded="dropdownStates.business"
              aria-haspopup="true"
            >
              주요사업
            </a>
            <ul class="dropdown-menu" :class="{ show: dropdownStates.business }">
              <li>
                <router-link
                  to="/business/process-analyzer"
                  class="dropdown-item"
                  @click="closeAllDropdowns"
                  >Process Analyzer System</router-link
                >
              </li>
              <li>
                <router-link to="/business/cems" class="dropdown-item" @click="closeAllDropdowns"
                  >CEMS</router-link
                >
              </li>
              <li>
                <router-link
                  to="/business/utility-analyzer"
                  class="dropdown-item"
                  @click="closeAllDropdowns"
                  >Utility / Liquid Analyzer System</router-link
                >
              </li>
              <li>
                <router-link
                  to="/business/gas-analyzer"
                  class="dropdown-item"
                  @click="closeAllDropdowns"
                  >Gas Analyzer System</router-link
                >
              </li>
              <li>
                <router-link to="/business/swas" class="dropdown-item" @click="closeAllDropdowns"
                  >SWAS</router-link
                >
              </li>
              <li>
                <router-link
                  to="/business/closed-loop"
                  class="dropdown-item"
                  @click="closeAllDropdowns"
                  >Closed Loop Sample System</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown" ref="productsDropdownRef">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              @click.stop.prevent="toggleDropdown('products', $event)"
              :aria-expanded="dropdownStates.products"
              aria-haspopup="true"
            >
              취급제품
            </a>
            <ul class="dropdown-menu" :class="{ show: dropdownStates.products }">
              <li>
                <router-link
                  to="/products/analyzer"
                  class="dropdown-item"
                  @click="closeAllDropdowns"
                  >Analyzer Part</router-link
                >
              </li>
              <li>
                <router-link
                  to="/products/instrument"
                  class="dropdown-item"
                  @click="closeAllDropdowns"
                  >Instrument Part</router-link
                >
              </li>
              <li>
                <router-link
                  to="/products/electrical"
                  class="dropdown-item"
                  @click="closeAllDropdowns"
                  >Electrical Part</router-link
                >
              </li>
              <li>
                <router-link to="/products/hvac" class="dropdown-item" @click="closeAllDropdowns"
                  >HVAC</router-link
                >
              </li>
              <li>
                <router-link to="/products/fire" class="dropdown-item" @click="closeAllDropdowns"
                  >소화기</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown" ref="resourcesDropdownRef">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              @click.stop.prevent="toggleDropdown('resources', $event)"
              :aria-expanded="dropdownStates.resources"
              aria-haspopup="true"
            >
              자료실
            </a>
            <ul class="dropdown-menu" :class="{ show: dropdownStates.resources }">
              <li>
                <router-link
                  to="/resources/performance"
                  class="dropdown-item"
                  @click="closeAllDropdowns"
                  >사업실적</router-link
                >
              </li>
              <li>
                <router-link
                  to="/resources/catalog"
                  class="dropdown-item"
                  @click="closeAllDropdowns"
                  >카탈로그</router-link
                >
              </li>
              <li>
                <router-link
                  to="/resources/certificate"
                  class="dropdown-item"
                  @click="closeAllDropdowns"
                  >인증서</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown" ref="supportDropdownRef">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              @click.stop.prevent="toggleDropdown('support', $event)"
              :aria-expanded="dropdownStates.support"
              aria-haspopup="true"
            >
              고객지원
            </a>
            <ul class="dropdown-menu" :class="{ show: dropdownStates.support }">
              <li>
                <router-link
                  to="/customer-support/notices"
                  class="dropdown-item"
                  @click="closeAllDropdowns"
                  >공지사항(게시판)</router-link
                >
              </li>
              <li>
                <router-link
                  to="/customer-support/inquiry"
                  class="dropdown-item"
                  @click="closeAllDropdowns"
                  >문의하기</router-link
                >
              </li>
              <li>
                <router-link
                  to="/customer-support/admin"
                  class="dropdown-item"
                  @click="closeAllDropdowns"
                  >관리자 권한</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import * as bootstrap from 'bootstrap'

const router = useRouter()
const route = useRoute() // Use useRoute to access the current route

const isTransparent = ref(route.path === '/') // Initialize based on current route
const navbarCollapseRef = ref(null)
const aboutDropdownRef = ref(null)
const businessDropdownRef = ref(null)
const productsDropdownRef = ref(null)
const resourcesDropdownRef = ref(null)
const supportDropdownRef = ref(null)

// 드롭다운 상태 관리
const dropdownStates = ref({
  about: false,
  business: false,
  products: false,
  resources: false,
  support: false,
})

let collapseInstance = null
let hoverTimers = {}

// 드롭다운 토글 함수
const toggleDropdown = (key, event) => {
  // 이벤트 전파 중지 (외부 클릭 핸들러와의 충돌 방지)
  if (event) {
    event.stopPropagation()
  }

  // 다른 드롭다운 모두 닫기
  Object.keys(dropdownStates.value).forEach(k => {
    if (k !== key) {
      dropdownStates.value[k] = false
    }
  })
  // 현재 드롭다운 토글
  dropdownStates.value[key] = !dropdownStates.value[key]
}

// 모든 드롭다운 닫기
const closeAllDropdowns = () => {
  Object.keys(dropdownStates.value).forEach(key => {
    dropdownStates.value[key] = false
  })
  // 모바일 메뉴도 닫기
  if (collapseInstance && navbarCollapseRef.value?.classList.contains('show')) {
    collapseInstance.hide()
  }
}

// 외부 클릭 시 드롭다운 닫기
const handleClickOutside = event => {
  // 드롭다운 토글 버튼 클릭은 무시 (토글 함수가 처리)
  if (event.target.closest('.dropdown-toggle')) {
    return
  }
  // 드롭다운 메뉴 내부 클릭도 무시 (메뉴 항목 클릭)
  if (event.target.closest('.dropdown-menu')) {
    return
  }
  // 외부 클릭 시 모든 드롭다운 닫기
  closeAllDropdowns()
}

onMounted(async () => {
  await nextTick()

  // Collapse 초기화
  if (navbarCollapseRef.value) {
    collapseInstance = new bootstrap.Collapse(navbarCollapseRef.value, {
      toggle: false,
    })

    // Collapse 이벤트 리스너
    navbarCollapseRef.value.addEventListener('show.bs.collapse', handleCollapseShow)
    navbarCollapseRef.value.addEventListener('hide.bs.collapse', handleCollapseHide)
  }

  // 스크롤 이벤트 처리
  window.addEventListener('scroll', handleScroll)
  handleScroll() // 초기 상태 설정

  // 외부 클릭 감지 (mousedown 사용하여 click보다 먼저 실행되지 않도록)
  document.addEventListener('click', handleClickOutside, false)

  // 드롭다운 호버 이벤트 (데스크톱에서만)
  if (window.innerWidth >= 992) {
    const setupHover = (ref, key) => {
      if (!ref?.value) return
      const item = ref.value

      item.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimers[key])
        dropdownStates.value[key] = true
      })

      item.addEventListener('mouseleave', () => {
        hoverTimers[key] = setTimeout(() => {
          dropdownStates.value[key] = false
        }, 200)
      })
    }

    setupHover(aboutDropdownRef, 'about')
    setupHover(businessDropdownRef, 'business')
    setupHover(productsDropdownRef, 'products')
    setupHover(resourcesDropdownRef, 'resources')
    setupHover(supportDropdownRef, 'support')
  }

  // 라우트 변경 시 드롭다운 닫기
  router.afterEach(() => {
    closeAllDropdowns()
  })
})

onUnmounted(() => {
  if (navbarCollapseRef.value) {
    navbarCollapseRef.value.removeEventListener('show.bs.collapse', handleCollapseShow)
    navbarCollapseRef.value.removeEventListener('hide.bs.collapse', handleCollapseHide)
  }
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)

  // 타이머 정리
  Object.values(hoverTimers).forEach(timer => {
    if (timer) clearTimeout(timer)
  })
})

// Watch for route changes to update transparency
watch(
  () => route.path,
  newPath => {
    isTransparent.value = newPath === '/'
    handleScroll() // Re-evaluate scroll state on route change
  }
)

const handleCollapseShow = () => {
  if (isTransparent.value && window.scrollY < 50) {
    const navbar = document.querySelector('.navbar')
    if (navbar) {
      navbar.classList.add('no-transition')
      isTransparent.value = false
    }
  }
}

const handleCollapseHide = () => {
  if (window.scrollY < 50) {
    setTimeout(() => {
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        navbar.classList.remove('no-transition')
        isTransparent.value = true
      }
    }, 350)
  }
}

const handleScroll = () => {
  const scrollDistance = 300 // color-on-scroll 값
  // Only apply transparency logic if the current route is the home page
  if (route.path === '/') {
    if (window.scrollY > scrollDistance) {
      isTransparent.value = false
    } else if (!navbarCollapseRef.value?.classList.contains('show')) {
      isTransparent.value = true
    }
  } else {
    isTransparent.value = false // Always opaque on other pages
  }
}
</script>

<style scoped>
.navbar {
  margin-bottom: 20px;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
}

.navbar-transparent {
  background-color: transparent !important;
  box-shadow: none;
  color: #ffffff;
  padding-top: 20px;
}

.navbar.no-transition {
  -webkit-transition: none;
  -moz-transition: none;
  -o-transition: none;
  transition: none;
}

.navbar:not(.navbar-transparent) {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  padding-top: 0.5rem;
}

.nav-link {
  color: #333 !important;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
}

.navbar-transparent .nav-link {
  color: #ffffff !important;
}

.nav-link:hover {
  color: #007bff !important;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  margin-top: 0.1rem !important;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  padding: 0.5rem 0;
  background-color: #fff;
  border-radius: 0.375rem;
  opacity: 0;
  transform: translateY(-10px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    visibility 0.2s ease;
  pointer-events: none;
  visibility: hidden !important;
}

.dropdown-menu.show {
  visibility: visible !important;
  opacity: 1 !important;
  transform: translateY(0) !important;
  pointer-events: auto !important;
}

.nav-item.dropdown {
  position: relative;
}

.nav-link.dropdown-toggle {
  cursor: pointer;
}

.nav-link.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.5em;
  vertical-align: 0.15em;
  content: '';
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

@media (min-width: 992px) {
  .nav-item.dropdown:hover .dropdown-menu,
  .nav-item.dropdown .dropdown-menu.show {
    visibility: visible !important;
    opacity: 1 !important;
    transform: translateY(0) !important;
    pointer-events: auto !important;
  }

  .nav-item.dropdown .dropdown-menu {
    margin-top: 0;
  }
}

@media (max-width: 991.98px) {
  .dropdown-menu {
    margin-top: 0 !important;
    margin-left: 1rem;
    box-shadow: none;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 0.375rem;
  }

  .dropdown-item {
    color: #333 !important;
    padding: 0.5rem 1rem;
  }

  .dropdown-item:hover,
  .dropdown-item:focus {
    background-color: rgba(0, 0, 0, 0.05) !important;
    color: #007bff !important;
  }

  .navbar-transparent .dropdown-menu {
    background-color: rgba(255, 255, 255, 0.95);
  }

  .navbar-transparent .dropdown-item {
    color: #333 !important;
  }

  .dropdown-menu.show {
    visibility: visible !important;
    opacity: 1 !important;
    transform: translateY(0) !important;
    pointer-events: auto !important;
  }
}

.navbar-toggler {
  border: none;
  padding: 0;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.navbar-toggler-bar {
  display: block;
  position: relative;
  width: 22px;
  height: 2px;
  border-radius: 1px;
  background-color: #333;
  transition: all 0.2s;
}

.navbar-transparent .navbar-toggler-bar {
  background-color: #ffffff;
}

.navbar-toggler-bar + .navbar-toggler-bar {
  margin-top: 7px;
}

.navbar-toggler[aria-expanded='true'] .navbar-toggler-bar:nth-child(1) {
  transform: rotate(45deg);
  transform-origin: 10% 10%;
}

.navbar-toggler[aria-expanded='true'] .navbar-toggler-bar:nth-child(2) {
  opacity: 0;
}

.navbar-toggler[aria-expanded='true'] .navbar-toggler-bar:nth-child(3) {
  transform: rotate(-45deg);
  transform-origin: 10% 90%;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-link.dropdown-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: inherit;
  font-weight: inherit;
  padding: 0.1rem 1rem;
  text-align: left;
  width: 100%;
}

.nav-link.dropdown-toggle:focus {
  outline: none;
}
</style>
