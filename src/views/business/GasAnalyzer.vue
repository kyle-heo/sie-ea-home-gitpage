<template>
  <PageHeader :title="pageTitle" :description="pageDescription" />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ pageTitle }}</h2>
          <p class="section-description">{{ pageDescription }}</p>
        </div>

        <div class="sub-menu">
          <button
            v-for="item in tabs"
            :key="item.title"
            class="sub-menu-button"
            :class="{ active: activeTab.title === item.title }"
            @click="activeTab = item"
          >
            {{ item.title }}
          </button>
        </div>

        <div class="card">
          <div v-if="activeTab.images && activeTab.images.length" class="card-header card-header-image">
            <div class="image-grid">
              <div v-for="image in activeTab.images" :key="image" class="image-item">
                <img :src="$asset(image)" :alt="activeTab.title" />
              </div>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">{{ activeTab.title }}</h4>
            <p class="card-description content-text">{{ activeTab.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageHeader from '@/components/PageHeader.vue'

const pageTitle = "Gas Analyzer System"
const pageDescription = "Semiconductor Industry용 초고순도(UHP) 가스 분석 시스템"
const tabs = [
  {
    "title": "Gas Analyzer System",
    "content": "Gas Analyzer System (Semiconductor Industry)\n\n반도체 공정 운전에 필요한 Utility는 전력, 물, 공기, 가스 등을 의미하며, 생산 설비에 직·간접적으로 Utility가 공급되어야 합니다.\n\n반도체 제조 공정에 사용되는 가스는 제품 오염 및 결함을 방지하기 위해 불순물 농도를 측정하고 순도를 보장하여 최적화된 조건으로 생산 공정에 공급되어야 합니다.\n\n이에 따라 SIE는 반도체 산업에 필수적인 초고순도(UHP) 가스를 측정하기 위한 분석기와 시스템을 제공합니다.\n\nRack / Panel 제작을 통한 System 구성\nAnalyzer 종류: Gas Chromatograph, O₂ Analyzer, pH / H₂O Analyzer 등",
    "images": [
      "/assets/img/sieea/business/AnalyzerCabinet.jpg",
      "/assets/img/sieea/business/LocalRack.jpg"
    ]
  },
  {
    "title": "Gas Analyzer System Configuration",
    "content": "Configuration\n\n- Analyzer (Gas Chromatograph, O₂ Analyzer, ETC.)\n- pH, ORP, Conductivity, ETC.\n- Analyzer Cabinet & Rack\n- Sample Line (Insulation, Electric Heating, Steam Heating Type)\n- Gas Analyzer System & Calibration System\n- Electrical Equipment (PDB, Junction Box, Lighting, ETC.)",
    "images": [
      "/assets/img/sieea/business/SampleProbe1.jpg",
      "/assets/img/sieea/business/SampleConditioningSystem1.jpg"
    ]
  }
]
const activeTab = ref(tabs[0])
</script>

<style scoped>
.section-header {
  text-align: center;
  padding: 40px 0;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.section-description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 40px;
}

.sub-menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
}

.sub-menu-button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: #fff;
  color: #333;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sub-menu-button:hover {
  background: #f3f5f7;
}

.sub-menu-button.active {
  color: #fff;
  background: #007bff;
  border-color: #007bff;
}

.card-header-image {
  padding: 18px;
  background: #fff;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.image-item {
  min-height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
}

.image-item img {
  width: 100%;
  max-height: 320px;
  object-fit: contain;
}

.content-text {
  white-space: pre-line;
  line-height: 1.85;
}
</style>
