<template>
  <PageHeader
    title="Utility / Liquid Analyzer System"
    description="유틸리티 및 액체 분석 시스템을 통한 정밀한 분석 솔루션"
  />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Utility / Liquid Analyzer System</h2>
          <p class="section-description">유틸리티 및 액체 분석 시스템을 통한 정밀한 분석 솔루션</p>
        </div>

        <div class="sub-menu">
          <button
            v-for="item in menuItems"
            :key="item.title"
            @click="activeMenuItem = item"
            :class="{ active: activeMenuItem.title === item.title }"
            class="sub-menu-button"
          >
            {{ item.title }}
          </button>
        </div>

        <div class="content-area">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-image" v-if="activeMenuItem.images && activeMenuItem.images.length > 0">
                  <div class="image-grid">
                    <div class="image-item" v-for="image in activeMenuItem.images" :key="image">
                      <img :src="$asset(image)" :alt="activeMenuItem.title" />
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">{{ activeMenuItem.title }}</h4>
                  <p class="card-description" style="white-space: pre-line;">{{ activeMenuItem.content_kr }}</p>
                  <hr>
                  <p class="card-description" style="white-space: pre-line;">{{ activeMenuItem.content_en }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PageHeader from '@/components/PageHeader.vue'

const menuItems = [
  {
    title: 'Liquid Analyzer System Application',
    content_kr: `[Liquid Analyzer System]
Utility : Liquid Analyzer System
Utility는 공정 운전에 필요한 전력, 물, 스팀, 공기 등을 의미하며, 생산 설비에 직/간접적으로 Utility가 공급 되어야 합니다.
Gas & Liquid Analyzer System은 공기, 물, 스팀 공정에 적용하여 생산 설비에 공급되는 Utility 시료의 불순물 농도를 측정하고 
순도를 보장하여 최적화된 조건으로 Utility를 원활히 공급하며, 생산 설비의 성능과 효율을 유지시키기 위한 수질 관리 분석 시스템입니다. 

[Liquid Analyzer System Application]
- Air Compressor (Moisture)
- Fuel Gas (O2, Combustible)
- Cooling Water
- Boiler Feed Water
- Steam Condensate Water
- Sea Water
- WWT (Waste Water Treatment)
- Etc.`,
    content_en: `[Liquid Analyzer System]
Utility: Liquid Analyzer System
Utility refers to power, water, steam, air, etc. required for process operation, and Utility must be supplied directly/indirectly to production facilities.
The Gas & Liquid Analyzer System is applied to air, water, and steam processes to measure the impurity concentration of Utility samples supplied to production facilities, ensure purity, smoothly supply Utility under optimized conditions, and is a water quality management analysis system to maintain the performance and efficiency of production facilities.

[Liquid Analyzer System Application]
- Air Compressor (Moisture)
- Fuel Gas (O2, Combustible)
- Cooling Water
- Boiler Feed Water
- Steam Condensate Water
- Sea Water
- WWT (Waste Water Treatment)
- Etc.`,
    images: ['/assets/img/sieea/business/LiquidAnalyzerSystemApplication.jpg']
  },
  {
    title: 'Liquid Analyzer System Configuration',
    content_kr: `[Liquid Analyzer System Configuration]
- Analyzer (pH, ORP, Conductivity, DO, CL2, Oil in Water, Turbidity, COD, T-N, T-P, SS, BOD, TOC, HC, ETC.)
- Analyzer Cabinet & Rack
- Sample Probe, Sample Line (Insulation, Electric Heating, Steam Heating Type)
- Sample Conditioning System & Calibration System 
- Electrical Equipment (PDB, Junction Box, Lighting, ETC.)`,
    content_en: `[Liquid Analyzer System Configuration]
- Analyzer (pH, ORP, Conductivity, DO, CL2, Oil in Water, Turbidity, COD, T-N, T-P, SS, BOD, TOC, HC, ETC.)
- Analyzer Cabinet & Rack
- Sample Probe, Sample Line (Insulation, Electric Heating, Steam Heating Type)
- Sample Conditioning System & Calibration System 
- Electrical Equipment (PDB, Junction Box, Lighting, ETC.)`,
    images: [
      '/assets/img/sieea/business/LiquidAnalyzerSystemConfiguration1.jpg',
      '/assets/img/sieea/business/LiquidAnalyzerSystemConfiguration2.png'
    ]
  }
]

const activeMenuItem = ref(menuItems[0])

onMounted(() => {
  // 페이지 로드 시 필요한 초기화 작업
})
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
  margin-bottom: 30px;
  gap: 10px;
}

.sub-menu-button {
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sub-menu-button:hover {
  background-color: #f0f0f0;
  border-color: #ccc;
}

.sub-menu-button.active {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.content-area {
  margin-top: 20px;
}

.card-header-image {
  padding: 15px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.image-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px; /* Adjust as needed */
  overflow: hidden;
}

.image-item img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  object-fit: contain; /* Changed from cover to contain to show full image */
}
</style>
